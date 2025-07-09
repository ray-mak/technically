"use client"
import { useRouter } from "next/navigation"
import React from "react"
import { useReactMediaRecorder } from "react-media-recorder"

const RecordingClient = ({
  question,
  questionId,
  nextQuestion,
  isLastQuestion,
  interviewId
}: {
  question: string
  questionId: string
  nextQuestion: () => void
  isLastQuestion: boolean
  interviewId: string
}) => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      audio: true,
    })
  const isRecording = status === "recording"

  const getMediaBlob = async (mediaBlobUrl: string): Promise<Blob> => {
    const response = await fetch(mediaBlobUrl)
    return await response.blob()
  }

  const router = useRouter()

  const handleNextQuestion = async () => {
    if (!mediaBlobUrl) return

    const blob = await getMediaBlob(mediaBlobUrl)
    const formData = new FormData()
    formData.append("file", blob, "recording.webm")
    formData.append("model", "whisper-1")
    formData.append("questionId", questionId)

    if (!isLastQuestion) {
      nextQuestion()
    }

    const res = await fetch("/api/transcribe", {
      method: "POST",
      body: formData,
    })

    if (isLastQuestion) {
      const analyzeRes = await fetch("/api/analyze", {
        method: "POST",
        body: JSON.stringify({ interviewId }),
      })

      const analyzeData = await analyzeRes.json()

      router.push(`/interview/results?interviewId=${interviewId}`)
      console.log("Last question")
    } 
    

    // console.log(res)
    // const data = await res.json()
    // console.log("Transcript:", data.text)
  }

  async function checkBlob() {
    if (!mediaBlobUrl) return
    const blob = await getMediaBlob(mediaBlobUrl)
    console.log(blob, blob.type)
  }

  console.log(mediaBlobUrl)
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      RecordingClient
      <p>{question}</p>
      <button
        className={`${
          isRecording
            ? "bg-red-500 hover:bg-red-700"
            : "bg-blue-500 hover:bg-blue-700"
        } text-white font-bold py-2 px-4 rounded`}
        onClick={isRecording ? stopRecording : startRecording}
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      <audio src={mediaBlobUrl} controls />
      {/* <button onClick={checkBlob} className="bg-blue-500 text-white">
        Check Blob
      </button>
      <button className="bg-blue-500 text-white" onClick={handleUpload}>
        Upload
      </button> */}
      {mediaBlobUrl && <button className="bg-blue-500 text-white py-2 px-4 rounded-sm" onClick={handleNextQuestion}>Next Question</button>}
    </div>
  )
}

export default RecordingClient
