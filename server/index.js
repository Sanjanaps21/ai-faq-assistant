// File: server/index.js (Node.js Backend with fallback)
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let openai;
try {
  openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
} catch (e) {
  console.error("OpenAI not initialized. Falling back to mock mode.");
}

app.post("/api/ask", async (req, res) => {
  const { question } = req.body;

  try {
    if (!openai) throw new Error("Fallback: no OpenAI instance");

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for answering FAQs about a product or service.",
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    const answer = response.choices[0].message.content;
    res.json({ answer });
  } catch (error) {
    console.warn("Using mock response due to:", error.message);
    const mockAnswer = `This is a mock response for: "${question}" (API unavailable or quota exceeded).`;
    res.json({ answer: mockAnswer });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});

