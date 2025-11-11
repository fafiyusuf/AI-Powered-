
import { GoogleGenAI } from "@google/genai";

export const genController = async (fileUrl: string, prompt: string) => {
 
  const ai = new GoogleGenAI({apiKey: process.env.GENAI_API_KEY});
  
  
  const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${prompt}\n\nHere is the study material: ${fileUrl}`,
  });
  
    return response;
};
