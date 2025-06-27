import { NextApiRequest, NextApiResponse } from "next"
import { OpenAI } from "openai"
import formidable from "formidable"
import fs from "fs"

export const config = {
  api: {
    bodyParser: false,
  },
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const form = new formidable.IncomingForm()

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form", err)
      return res.status(500).json({ error: "Error parsing form data" })
    }

    const uploadedFile = files.file
    const file = Array.isArray(uploadedFile) ? uploadedFile[0] : uploadedFile

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" })
    }

    try {
      const fileBuffer = fs.createReadStream(file.filepath)

      const transcription = await openai.audio.transcriptions.create({
        file: fileBuffer,
        model: "whisper-1",
        response_format: "json",
      })

      return res.status(200).json({ text: transcription.text })
    } catch (error) {
      console.error("OpenAI transcription error", error)
      return res.status(500).json({ error: "Transcription failed" })
    }
  })
}
