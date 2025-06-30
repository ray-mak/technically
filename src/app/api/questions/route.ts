import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(req: Request, res: NextResponse) {
  const { searchParams } = new URL(req.url)
  const interviewId = searchParams.get("interviewId")

  if (!interviewId) {
    return NextResponse.json({ error: "Missing interviewId" }, { status: 400 })
  }

  const interview = await db.interview.findUnique({
    where: {
      id: interviewId,
    },
    select: {
      questions: { orderBy: { position: "asc" } },
    },
  })

  if (!interview) {
    return NextResponse.json({ error: "Interview not found" }, { status: 404 })
  }

  return NextResponse.json({ questions: interview.questions }, { status: 200 })
}
