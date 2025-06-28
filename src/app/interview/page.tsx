"use client"
import dynamic from "next/dynamic"
import InterviewForm from "./_components/InterviewForm"

const RecordingClient = dynamic(() => import("./_components/RecordingClient"), {
  ssr: false,
})

const InterviewPage = () => {
  return (
    <div>
      Interview page
      <InterviewForm />
      {/* <RecordingClient /> */}
    </div>
  )
}

export default InterviewPage
