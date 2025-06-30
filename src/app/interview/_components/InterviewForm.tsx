"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function InterviewForm({ userId }: { userId: string }) {
  const [formData, setFormData] = useState({
    userId: userId,
    name: "",
    jobTitle: "",
    jobDescription: "",
    resume: "",
    yearsExperience: "",
    interviewType: "",
    preferredToolStack: "",
    difficulty: "",
    focusAreas: "",
    questionFormat: "",
    companyName: "",
    totalQuestions: "",
  })

  const router = useRouter()

  const handleChange =
    (field: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setFormData({ ...formData, [field]: e.target.value })
    }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form data:", formData)

    const requiredFields = [
      "name",
      "jobTitle",
      "jobDescription",
      "interviewType",
      "totalQuestions",
    ]

    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        alert(`Please fill in the required field: ${field}`)
        return
      }
    }

    const yearsExperience = formData.yearsExperience
      ? parseInt(formData.yearsExperience, 10)
      : undefined

    const totalQuestions = parseInt(String(formData.totalQuestions), 10)
    if (isNaN(totalQuestions) || totalQuestions <= 0) {
      alert("Total questions must be a positive number")
      return
    }

    const payload = {
      ...formData,
      yearsExperience,
      totalQuestions,
    }

    const response = await fetch("/api/generate-questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const data = await response.json()
    router.push(`/interview/practice?interviewId=${data.interviewId}`)
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-4">
      <div>
        <label className="block font-semibold mb-1">
          Interview Session Name (required)
        </label>
        <input
          className="w-full border rounded px-3 py-2"
          value={formData.name}
          onChange={handleChange("name")}
          placeholder="e.g., Tech Lead Interview"
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Job Title (required)</label>
        <input
          className="w-full border rounded px-3 py-2"
          value={formData.jobTitle}
          onChange={handleChange("jobTitle")}
          placeholder="e.g., Frontend Developer"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">
          Job Description (required)
        </label>
        <textarea
          className="w-full border rounded px-3 py-2"
          value={formData.jobDescription}
          onChange={handleChange("jobDescription")}
          placeholder="Paste job listing here..."
          rows={6}
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Resume (optional) </label>
        <textarea
          className="w-full border rounded px-3 py-2"
          value={formData.resume}
          onChange={handleChange("resume")}
          placeholder="Paste your resume here..."
          rows={6}
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">
          Interview Type (required)
        </label>
        <select
          className="w-full border rounded px-3 py-2"
          value={formData.interviewType}
          onChange={handleChange("interviewType")}
        >
          <option value="">Select type</option>
          <option value="screener">Screener</option>
          <option value="technical">Technical</option>
          <option value="behavioral">Behavioral</option>
          <option value="system_design">System Design</option>
          <option value="portfolio_review">Portfolio Review</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1">
          Total Questions (Required, max 15)
        </label>
        <input
          type="number"
          className="w-full border rounded px-3 py-2"
          value={formData.totalQuestions}
          onChange={handleChange("totalQuestions")}
          placeholder="e.g., 5"
          min="1"
          max="15"
        />
      </div>
      <div className="py-8">
        <p className="font-semibold text-3xl">Optional Fields</p>
      </div>

      <div>
        <label className="block font-semibold mb-1">Years of Experience</label>
        <input
          type="number"
          className="w-full border rounded px-3 py-2"
          value={formData.yearsExperience}
          onChange={handleChange("yearsExperience")}
          placeholder="e.g., 3"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Tech Stack / Tools</label>
        <input
          className="w-full border rounded px-3 py-2"
          value={formData.preferredToolStack}
          onChange={handleChange("preferredToolStack")}
          placeholder="e.g., React, Node.js, Figma"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Difficulty</label>
        <select
          className="w-full border rounded px-3 py-2"
          value={formData.difficulty}
          onChange={handleChange("difficulty")}
        >
          <option value="">Select difficulty</option>
          <option value="easy">Easy</option>
          <option value="standard">Standard</option>
          <option value="challenging">Challenging</option>
          <option value="faang">FAANG-Level</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1">Focus Areas / Topics</label>
        <input
          className="w-full border rounded px-3 py-2"
          value={formData.focusAreas}
          onChange={handleChange("focusAreas")}
          placeholder="e.g., APIs, System Design, UI Testing"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Question Format</label>
        <select
          className="w-full border rounded px-3 py-2"
          value={formData.questionFormat}
          onChange={handleChange("questionFormat")}
        >
          <option value="">Select format</option>
          <option value="open_ended">Open-ended</option>
          <option value="multiple_choice">Multiple Choice</option>
          <option value="live_coding">Live Coding</option>
          <option value="take_home">Take-home Challenge</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1">
          Company Name (optional)
        </label>
        <input
          className="w-full border rounded px-3 py-2"
          value={formData.companyName}
          onChange={handleChange("companyName")}
          placeholder="e.g., Google, Stripe"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Generate Interview Questions
      </button>
    </form>
  )
}
