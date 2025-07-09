import { getCurrentUser } from '@/auth/nextjs/currentUser'
import React from 'react'
import InterviewPracticePage from './_components/InterviewPracticeClient'

const page = async () => {
    const user = await getCurrentUser({ withFullUser: true })
    console.log(user)

    //TODO: ensure interviewId is associated with user
  return (
    <div><InterviewPracticePage /></div>
  )
}

export default page