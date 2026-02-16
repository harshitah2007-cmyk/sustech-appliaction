
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, ACHIEVEMENTS, PROJECTS, EDUCATION_HISTORY } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the personal Admissions Assistant for Harshita Hiranyamayi, an applicant for the SUSTech Bachelor of Engineering (2026 intake).

CONTEXT FOR HARSHITA:
- Personality: Extremely curious, a "builder" by nature, loves knowing the "why" behind everything.
- Academic History: 90% in 10th Board (2023). Currently pursuing a 3-year Fine Arts Diploma (2023-2026, final exams in May 2026).
- The "Rakshak Bot" (2020): Her hallmark project. It alerts drivers of safe distances and sends SOS alerts to police/hospitals automatically. She actually built this and coded the emergency response system.
- Sports: Competitive Badminton player since 2018. 2023 Regional Champion. Also won medals in Tug of War, 200m Run, Throwball, and Relay.
- Future Goals:
    - Short term: Create AI-empowered devices for the healthcare industry.
    - Long term: Work on satellites and the space industry.

TONE: 
Confident, active, and detailed. Instead of saying "she is interested in...", say "she has built..." or "she has achieved...". Use lavender/floral aesthetic cues in your language. 

TASK: Answer questions from SUSTech admissions or visitors about Harshita's journey. Keep answers concise and evidence-based.
`;

export async function chatWithAssistant(message: string, history: { role: 'user' | 'model', text: string }[]) {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm experiencing a brief technical glitch. Please ask me again about Harshita's Rakshak Bot or her badminton championships!";
  }
}
