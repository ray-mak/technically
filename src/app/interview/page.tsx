import { getCurrentUser } from "@/auth/nextjs/currentUser"
import InterviewForm from "./_components/InterviewForm"

const InterviewPage = async () => {
  const user = await getCurrentUser({
    withFullUser: true,
    redirectIfNotFound: true,
  })
  return (
    <div>
      Interview page
      <InterviewForm userId={user.id} />
    </div>
  )
}

export default InterviewPage
