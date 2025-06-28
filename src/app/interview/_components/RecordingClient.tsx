import React from "react"
import { useReactMediaRecorder } from "react-media-recorder"

const RecordingClient = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      audio: true,
    })
  const isRecording = status === "recording"

  const getMediaBlob = async (mediaBlobUrl: string): Promise<Blob> => {
    const response = await fetch(mediaBlobUrl)
    return await response.blob()
  }

  const handleUpload = async () => {
    if (!mediaBlobUrl) return

    const blob = await getMediaBlob(mediaBlobUrl)
    const formData = new FormData()
    formData.append("file", blob, "recording.webm")
    formData.append("model", "whisper-1")

    const res = await fetch("/api/transcribe", {
      method: "POST",
      body: formData,
    })

    console.log(res)
    const data = await res.json()
    console.log("Transcript:", data.text)
  }

  async function checkBlob() {
    if (!mediaBlobUrl) return
    const blob = await getMediaBlob(mediaBlobUrl)
    console.log(blob, blob.type)
  }
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      RecordingClient
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
      <button onClick={checkBlob} className="bg-blue-500 text-white">
        Check Blob
      </button>
      <button className="bg-blue-500 text-white" onClick={handleUpload}>
        Upload
      </button>
    </div>
  )
}

export default RecordingClient
