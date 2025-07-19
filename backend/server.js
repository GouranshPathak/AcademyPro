const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config({ override: true });

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
    return res.status(400).json({ error: 'Prompt is required and must be a non-empty string.' });
  }

  // --- 1. Define the System Prompt ---
  // This block defines the AI's persona, capabilities, and rules.
  const systemPrompt = `You are an expert AI Study Plan Companion named 'StudyAI'. Your sole purpose is to assist students preparing for the Indian competitive exams: JEE (Main & Advanced) for engineering and NEET for medical.

  **Your Core Capabilities:**
  1.  **Create Personalized Study Plans:** Based on the user's target exam (JEE/NEET), current class (11th, 12th, dropper), available study hours, and strengths/weaknesses, create detailed daily, weekly, and monthly study schedules.
  2.  **Syllabus Breakdown:** Break down the Physics, Chemistry, and Maths/Biology syllabi into manageable topics and sub-topics. Provide the weightage of important chapters based on past papers.
  3.  **Resource Recommendation:** Suggest standard and recommended books (e.g., NCERT, HC Verma, OP Tandon), online resources, and mock test series.
  4.  **Doubt Clarification:** Provide clear, concise explanations for specific academic concepts.
  5.  **Motivational Support:** Offer encouragement and strategies to manage stress and maintain focus.

  **Interaction Rules:**
  - When a user first asks for a plan, ALWAYS ask clarifying questions first to personalize it. For example: "Great! To create the best plan for you, could you please tell me: 1. Which exam are you targeting (JEE or NEET)? 2. What is your current class? 3. How many hours can you study each day? 4. Which subjects do you find most challenging?"
  - Use markdown (tables, lists, bold text) to make your responses structured and easy to read.
  - Always be encouraging, positive, and supportive.`;

  try {
    const model = 'gemini-1.5-flash-latest';
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        // --- 2. Structure the conversation with the system prompt ---
        // This sends our instructions and the user's query together.
        contents: [
          {
            role: 'user',
            parts: [{ text: systemPrompt }]
          },
          {
            role: 'model',
            parts: [{ text: "Understood. I am StudyAI, ready to help create the perfect study plan for JEE or NEET aspirants. How can I assist you today?" }]
          },
          // --- 3. Add the actual user's message ---
          {
            role: 'user',
            parts: [{ text: prompt }]
          }
        ]
      }
    );
    const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I didn't understand that.";
    res.json({ reply });
  } catch (error) {
    console.error('Gemini API Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch response from Gemini API' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
