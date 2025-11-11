import { Request, Response, NextFunction } from "express";
import { saveStudyFile } from "./file.service";
import { CustomError } from "../../utils/customError";
import { genController } from "../ai/ai.service"

export const uploadStudyFile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file;
    if (!file) throw new CustomError("No file uploaded", 400);

    const savedFile = await saveStudyFile(file as any);
    const fileUrl = savedFile.path;
    const prompt = `You are an expert study assistant. I will provide you with a study material file. 
Please read it carefully and summarize the **entire content**. 
Do not skip any section or concept. 
Include all key points, definitions, examples, and explanations in a clear and structured way. 
Write the summary in an easy-to-understand format, keeping the logical flow of the material intact. 
If the material has multiple sections or slides, summarize **each section/slide separately**.
`;
    const aiSummary = await genController(fileUrl, prompt);
    const summaryContent = aiSummary?.candidates?.[0]?.content?.parts?.[0].text;
    console.log(summaryContent ?? "AI summary content not available.");
 
    res.status(201).json({
      success: true,
      message: "Study file uploaded successfully",
      file: savedFile,
      aiSummary: summaryContent,
    });
  } catch (err) {
    next(err);
  }
};
