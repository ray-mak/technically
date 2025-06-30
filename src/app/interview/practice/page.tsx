"use client"
import dynamic from "next/dynamic"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const RecordingClient = dynamic(() => import("./_components/RecordingClient"), {
  ssr: false,
})

const InterviewPracticePage = () => {
  const searchParams = useSearchParams()!
  const interviewId = searchParams.get("interviewId")
  const [questions, setQuestions] = useState([])

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
        console.log(data.questions)
      } catch (error) {
        console.error("Error fetching questions", error)
      }
    }

    fetchQuestions()
  }, [interviewId])

  return (
    <div>
      Record Interview
      <RecordingClient />
    </div>
  )
}

export default InterviewPracticePage
