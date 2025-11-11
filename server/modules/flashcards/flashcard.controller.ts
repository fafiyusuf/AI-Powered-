import { NextFunction, Response } from "express";
import { AuthRequest } from "../auth/auth.middleware";
import {
    createFlashcard,
    deleteFlashcard,
    generateFlashcards,
    getFlashcardById,
    getFlashcardStats,
    listFlashcards,
    updateFlashcard,
} from "./flashcard.service";

export const getFlashcards = async (req: AuthRequest, res: Response, next: NextFunction) => {
	try {
		const userId = req.user!.id;
		const tag = typeof req.query.tag === "string" ? req.query.tag : undefined;
		const cards = await listFlashcards(userId, { tag });
		res.json({ success: true, data: cards });
	} catch (err) {
		next(err);
	}
};

export const createFlashcardHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
	try {
		const userId = req.user!.id;
		const { question, answer, tags } = req.body as { question: string; answer: string; tags?: string[] };
		const card = await createFlashcard(userId, { question, answer, tags });
		res.status(201).json({ success: true, data: card });
	} catch (err) {
		next(err);
	}
};

export const getFlashcardHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
	try {
		const userId = req.user!.id;
		const { id } = req.params;
		const card = await getFlashcardById(userId, id);
		res.json({ success: true, data: card });
	} catch (err) {
		next(err);
	}
};

export const updateFlashcardHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
	try {
		const userId = req.user!.id;
		const { id } = req.params;
		const { question, answer, tags } = req.body as { question?: string; answer?: string; tags?: string[] };
		const card = await updateFlashcard(userId, id, { question, answer, tags });
		res.json({ success: true, data: card });
	} catch (err) {
		next(err);
	}
};

export const deleteFlashcardHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
	try {
		const userId = req.user!.id;
		const { id } = req.params;
		await deleteFlashcard(userId, id);
		res.json({ success: true, message: "Flashcard deleted" });
	} catch (err) {
		next(err);
	}
};

export const generateFlashcardsHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
	try {
		const userId = req.user!.id;
		const { sourceText, subject, count } = req.body as {
			sourceText: string;
			subject?: string;
			count?: number;
		};
		const cards = await generateFlashcards(userId, { sourceText, subject, count });
		res.status(201).json({ success: true, data: cards });
	} catch (err) {
		next(err);
	}
};

export const getFlashcardStatsHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
	try {
		const userId = req.user!.id;
		const stats = await getFlashcardStats(userId);
		res.json({ success: true, data: stats });
	} catch (err) {
		next(err);
	}
};

