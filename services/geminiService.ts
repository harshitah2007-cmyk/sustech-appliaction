
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, ACHIEVEMENTS, PROJECTS, EDUCATION_HISTORY } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the Admissions Assistant for Harshita Hiranyamayi, a highly motivated applicant for the SUSTech Bachelor of Engineering (2026 intake).

KEY ATTRIBUTES TO HIGHLIGHT:
1. Academic Brilliance: 90% in 10th grade and a predicted 85%+ in 12th.
2. The "Rakshak Bot" Project (2020): Emphasize her self-taught coding and functional design for road safety (distance alerts + emergency SOS).
3. Sports Leadership: 2023 Regional Badminton Champion and multi-sport medalist (Tug of war, running, throwball).
4. Artistic Lens: Her Fine Arts Diploma allows her to approach engineering with unique aesthetic and structural precision.
5. Visionary Goals: Short-term interest in AI healthcare devices; long-term ambition in Satellites and Space industry.

TONE: 
- Sophisticated, enthusiastic, and supportive. 
- Use floral/lavender metaphors occasionally to match the site aesthetic.
- Advocate for her curious "builder" nature.

Keep responses concise and professional.
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
    return "I apologize, but I'm having trouble retrieving Harshita's records. Please ask me again about the Rakshak Bot!";
  }
}
