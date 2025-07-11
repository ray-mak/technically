"use client"
import { useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"

const InterviewResultsClient = () => {
  const searchParams = useSearchParams()!
  const interviewId = searchParams.get("interviewId")
  const [interviewResults, setInterviewResults] = useState<any>([])

  useEffect(() => {
    if (!interviewId) return
    const fetchQuestions = async () => {
      try {
        const res = await fetch("/api/results", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ interviewId }),
        })
        const data = await res.json()
        setInterviewResults(data)
      } catch (error) {
        console.error("Error fetching questions", error)
      }
    }

    fetchQuestions()
  }, [interviewId])

  if (!interviewId) {
    return <div>Interview not found</div>
  }

  console.log(interviewResults)

  if (interviewResults.length === 0) {
    return <div>Loading...</div>
  }
  return (
    <div>
      {interviewResults.interview.questions.map((q: any, index: number) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold">Question {index + 1}:</h3>
          <p>{q.question}</p>

          <h4 className="font-semibold mt-2">Your Answer:</h4>
          <p>{q.answer || "No answer recorded"}</p>

          <h4 className="font-semibold mt-2 text-green-600">Feedback:</h4>
          <p>
            {interviewResults.interview.feedback[index] ||
              "No feedback available"}
          </p>
        </div>
      ))}
      {interviewResults.interview.questions.map(
        (result: any, index: number) => (
          <div key={index} className="my-4">
            <p className="font-bold">{result.question}</p>
            <p>{result.answer}</p>
          </div>
        )
      )}
      {interviewResults.interview.feedback.map((note: any, index: number) => (
        <div key={index} className="my-4">
          <p className="font-bold">{note}</p>
        </div>
      ))}
    </div>
  )
}

export default InterviewResultsClient
