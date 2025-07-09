import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const {interviewId} = await req.json()

        if (!interviewId) {
            return new Response(JSON.stringify({ error: "Missing interviewId" }), { status: 400 })
        }

        const interview = await db.interview.findUnique({
            where: {
                id: interviewId,
            },
            include: { questions: { orderBy: { position: 'asc' } } }
        })

        if (!interview) {
            return new Response(JSON.stringify({ error: "Interview not found" }), { status: 404 })
        }

        const qnaPairs = interview.questions.map((q,i)=> `Question ${i+1}: ${q.question}\nAnswer ${i+1}: ${q.answer}`).join('\n\n')

        const prompt = `You are in interviewer. Please provide constructive feedback based on the following interview responses. Your feedback should be a short paragraph per question. Talk about the strengths and weaknesses and areas of improvement for each question and potentially why. The feedback should be given in a way that sounds like a conversation between the interviewer and the interviewee and use "you" when referencing the candidate. 
        
        ${qnaPairs}
        
        Respond with an array of plain-text questions in JSON format. Do not format or indent the output. Avoid line breaks inside the strings. Responses should look like this ["Feedback 1", "Feedback 2", "Feedback 3"]`.trim()

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        })

        const rawFeedback = completion.choices[0].message.content
        let feedback = []

        try {
            feedback = JSON.parse(rawFeedback || "[]")
        } catch (error) {
            console.error("Failed to parse feedback:", error)
            return new Response(JSON.stringify({ error: "Invalid feedback format" }), { status: 500 })
        }

        console.log("Feedback:", feedback)

        await db.interview.update({
            where: {
                id: interviewId
            },
            data: {
                feedback
            }
        })

        return new Response(JSON.stringify({ questions: interview.questions, feedback }), { status: 200 })
    } catch (error) {
        console.error("Analyze error:", error)
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 })
    }
}