const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const enrollRoute = require('./routes/enroll');
const contactRoute = require('./routes/Contact'); // Make sure this line is present
const mockTestRoute = require('./routes/mocktest');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/enroll', enrollRoute);
app.use('/api/contact', contactRoute); // Make sure this line is present
app.use('/api/mocktest', mockTestRoute);

// Gemini AI Chat Route
app.post('/api/chat', async (req, res) => {
  const { prompt, history = [] } = req.body;

  if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
    return res.status(400).json({ error: 'Prompt is required and must be a non-empty string.' });
  }

  const systemPrompt = `You are an expert AI Study Plan Companion named 'StudyAI'. Your sole purpose is to assist students preparing for the Indian competitive exams: JEE (Main & Advanced) for engineering and NEET for medical.

The current date is July 20, 2025. Use this for all scheduling and timeline-related queries.

**Your Core Capabilities:**
1. **Create Personalized Study Plans**
2. **Syllabus Breakdown**
3. **Resource Recommendation**
4. **Doubt Clarification**
5. **Motivational Support**

**Interaction Rules:**
- Always ask clarifying questions before generating a study plan.
- Use markdown for structure.
- Be positive, helpful, and supportive.
- Use the conversation history for context.`;

  try {
    const model = 'gemini-1.5-flash-latest';
    const contents = [
      ...history,
      { role: 'user', parts: [{ text: prompt }] },
    ];

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents,
        systemInstruction: { parts: [{ text: systemPrompt }] },
      }
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I am unable to process that request right now.";
      
    res.json({ reply });

  } catch (error) {
    console.error('Gemini API Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch response from the AI model.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
