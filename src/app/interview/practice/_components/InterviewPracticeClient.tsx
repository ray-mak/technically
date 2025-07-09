"use client"
import dynamic from "next/dynamic"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const RecordingClient = dynamic(() => import("./RecordingClient"), {
  ssr: false,
})

type Question = {
  id: string
  question: string
  answer: string
}

const InterviewPracticePage = () => {
  const searchParams = useSearchParams()!
  const interviewId = searchParams.get("interviewId")
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const isLastQuestion = currentIndex === questions.length - 1

  if (!interviewId) {
    return <div>Interview not found</div>
  }

  useEffect(() => {
    if (!interviewId) return
    const fetchQuestions = async () => {
      try {
        const res = await fetch(`/api/questions?interviewId=${interviewId}`)
        const data = await res.json()
        setQuestions(data.questions)
      } catch (error) {
        console.error("Error fetching questions", error)
      }
    }

    fetchQuestions()
  }, [interviewId])

  function nextQuestion() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  if (questions.length === 0) {
    return <div>Loading...</div>
  }

  console.log(questions)


  // TODO
  // Pass question and questionId to RecordingClient. Pass function to RecordingClient to handle index change. RecordingClient should make api call transcribe. 
  return (
    <div>
      Record Interview
      <RecordingClient
        question={questions[currentIndex].question}
        questionId={questions[currentIndex].id}
        nextQuestion={nextQuestion}
        isLastQuestion={isLastQuestion}
        interviewId={interviewId}
      />
    </div>
  )
}

export default InterviewPracticePage
