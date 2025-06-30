"use client"
import dynamic from "next/dynamic"

const RecordingClient = dynamic(() => import("./_components/RecordingClient"), {
  ssr: false,
})

const InterviewPage = () => {
  return (
    <div>
      Record Interview
      <RecordingClient />
    </div>
  )
}

export default InterviewPage
