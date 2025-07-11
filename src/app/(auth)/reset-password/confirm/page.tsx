import React, { Suspense } from "react"
import ResetPasswordForm from "./ResetPasswordForm"

const ResetPasswordPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  )
}

export default ResetPasswordPage
