"use client"
import { useRouter, useSearchParams } from "next/navigation"
import React, { useState } from "react"

const ResetPasswordForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()!
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  })

  const [passwordError, setPasswordError] = useState<string | null>(null)

  if (!searchParams) {
    // maybe redirect or show error
    return <div>Missing token</div>
  }
  const token = searchParams.get("token")

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (formData.newPassword !== formData.confirmPassword) {
      setPasswordError("Passwords do not match")
      return
    } else {
      setPasswordError(null)
    }

    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword: formData.newPassword }),
      })

      const result = await response.json()
      console.log(response)
      console.log(result)

      if (!response.ok) {
        setPasswordError(result.error)
      }

      router.push("/reset-password/success")
    } catch (error) {
      console.error("Unexpected error: ", error)
      setPasswordError("Something went wrong")
    }
  }
  if (!token) return <div>Missing token</div>

  return (
    <form
      className="flex flex-col p-8 border rounded-sm bg-white sm:w-[420px] w-[320px]"
      onSubmit={handleSubmit}
    >
      <p className="text-2xl font-bold">Change Password</p>
      <label htmlFor="newPassword" className="flex flex-col gap-1">
        New Password
        <input
          type="password"
          name="newPassword"
          id="newPassword"
          className="p-2 border rounded-sm"
          autoComplete="off"
          value={formData.newPassword}
          onChange={handleForm}
        />
      </label>
      <label htmlFor="confirmPassword" className="flex flex-col gap-1">
        Confirm Password
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className="p-2 border rounded-sm"
          autoComplete="off"
          value={formData.confirmPassword}
          onChange={handleForm}
        />
      </label>
      {passwordError && <p className="text-red-500">{passwordError}</p>}
      <button
        type="submit"
        className="p-2 mt-4 rounded-sm bg-slate-600 text-white hover:bg-slate-700"
      >
        Update Password
      </button>
    </form>
  )
}

export default ResetPasswordForm
