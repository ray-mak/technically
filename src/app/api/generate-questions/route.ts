import { z } from "zod"
import { OpenAI } from "openai"
import { db } from "@/lib/db"

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const formSchema = z.object({
  userId: z.string(),
  name: z.string(),
  jobTitle: z.string(),
  jobDescription: z.string(),
  resume: z.string().optional(),
  yearsExperience: z.number().optional(),
  interviewType: z.string(),
  preferredToolStack: z.string().optional(),
  difficulty: z.string().optional(),
  focusAreas: z.string().optional(),
  questionFormat: z.string().optional(),
  companyName: z.string().optional(),
  totalQuestions: z.number(),
})

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json()
    const formData = formSchema.parse(body)

    const {
      userId,
      name,
      jobTitle,
      jobDescription,
      resume,
      yearsExperience,
      interviewType,
      preferredToolStack,
      difficulty,
      focusAreas,
      questionFormat,
      companyName,
      totalQuestions,
    } = formData

    const prompt = `
    Please act as an interviewer for a ${jobTitle} position. Can you please help me prepare ${totalQuestions} questions for a ${interviewType} interview? For technical interviews, please generate questions based on the languages/tools used in the job description as well as the desired experience level of the applicant and the company (please prioritize applicant experience first, which is provided later, followed by company experience).
    The following is the description for the job listing: ${jobDescription};
    
    ${
      resume
        ? `The following is my resume, please use it as a reference when generating questions: ${resume}`
        : ""
    };
    ${yearsExperience ? `I have ${yearsExperience} years of experience.` : ""};
    ${
      preferredToolStack ? `I have experience with ${preferredToolStack}.` : ""
    };
    ${
      difficulty
        ? `Please generate questions that are ${difficulty} difficulty.`
        : ""
    };
    ${focusAreas ? `I would like to focus on ${focusAreas}.` : ""}

Respond with an array of plain-text questions in JSON format. Return only a compact JSON array of strings on a single line. Do not format or indent the output. Avoid line breaks inside the strings. Responses should look like this ["Question 1", "Question 2", "Question 3"].
    `.trim()

    const completion = await openai.chat.completions.create({
      model: "gpt-4", // or "gpt-3.5-turbo" for cheaper
      messages: [{ role: "user", content: prompt }],
    })

    const content = completion.choices[0]?.message?.content

    const messages = [
      { role: "user", content: prompt },
      { role: "assistant", content: content || "" },
    ]
    console.log(completion)
    console.log(content)

    let questions: string[] = []

    try {
      const cleanedContent = content?.replace(/\n(?=[^"]*")/g, " ")
      questions = JSON.parse(cleanedContent || "[]")
    } catch (err) {
      return new Response(
        JSON.stringify({
          error: "Failed to parse questions from OpenAI response.",
        }),
        { status: 500 }
      )
    }

    const interview = await db.interview.create({
      data: {
        userId,
        name,
        jobTitle,
        jobDescription,
        resume,
        yearsExperience,
        interviewType,
        preferredToolStack,
        difficulty,
        focusAreas,
        questionFormat,
        companyName,
        totalQuestions,
        chatHistory: messages,
      },
    })

    await db.question.createMany({
      data: questions.map((question, index) => ({
        interviewId: interview.id,
        question: question,
        answer: "",
        position: index,
      })),
    })

    if (!interview) {
      return new Response(
        JSON.stringify({ error: "Failed to create interview." }),
        { status: 500 }
      )
    }

    return new Response(
      JSON.stringify({ interviewId: interview.id, questions }),
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Error generating questions:", error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    })
  }
}
