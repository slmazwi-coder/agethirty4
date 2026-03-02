import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * In Project IDX / Firebase Studio, if you've enabled the API, 
 * it will try to use the key from your environment variables.
 */
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");

export const askGemini = async (prompt: string) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I'm having trouble connecting to the Age Thirty 4 AI right now.";
  }
};