import { db } from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const {interviewId} = await req.json()
        if (!interviewId) {
            return new Response(JSON.stringify({ error: "Missing interviewId" }), { status: 400 })
        }
        
        const interview = await db.interview.findUnique({
            where: {
                id: interviewId,
            },
            include: { questions: { orderBy: { position: 'asc' } } }
        })

        if (!interview) {
            return new Response(JSON.stringify({ error: "Interview not found" }), { status: 404 })
        }

        return new Response(JSON.stringify({ interview }), { status: 200 })
    } catch (error) {
        console.error("Error fetching interview", error)
        return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 })
    }
}