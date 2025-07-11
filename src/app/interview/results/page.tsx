import React, { Suspense } from "react"
import InterviewResultsClient from "./InterviewResultsClient"

const InterviewResultsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InterviewResultsClient />
    </Suspense>
  )
}

export default InterviewResultsPage
