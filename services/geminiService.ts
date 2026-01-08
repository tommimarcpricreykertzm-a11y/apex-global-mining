import { GoogleGenAI } from "@google/genai";
import { MessageRole } from '../types';

// Initialize the API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are 'ApexBot', the official corporate AI assistant for Apex Global Mining Group. 
Your tone is professional, confident, transparent, and safety-oriented.

Key Company Facts:
- Founded: 1985
- CEO: Elena Corves
- Headquarters: London, UK
- Core Resources: Copper, Lithium, Gold, Rare Earth Elements.
- Sustainability: Aiming for Net Zero by 2040. 95% water recycling rate in Chile operations.
- Stock Ticker: APX (LSE/NYSE)
- Recent News: New discovery in Western Australia (Project Helios).

Guidelines:
1. Answer questions about mining operations, investor relations, and sustainability.
2. If asked about stock advice, provide historical data but disclaim that you cannot provide financial advice.
3. Keep answers concise (under 100 words unless detailed technical info is requested).
4. Emphasize safety and community partnership in all operational answers.
5. LANGUAGE SUPPORT: If the user inputs in Chinese, reply in Chinese. If the user inputs in English, reply in English.
`;

export const sendMessageToGemini = async (history: { role: string; parts: [{ text: string }] }[], message: string): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history
    });

    const response = await chat.sendMessage({ message });
    
    if (response.text) {
      return response.text;
    } else {
      throw new Error("No text returned from model");
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I am currently unable to retrieve that information due to a connection issue. Please contact our Investor Relations team for immediate assistance.";
  }
};