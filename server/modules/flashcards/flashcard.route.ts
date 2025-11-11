import express from "express";
import { protect } from "../auth/auth.middleware";
import {
    createFlashcardHandler,
    deleteFlashcardHandler,
    generateFlashcardsHandler,
    getFlashcardHandler,
    getFlashcardStatsHandler,
    getFlashcards,
    updateFlashcardHandler,
} from "./flashcard.controller";

const router = express.Router();

// All flashcard routes are protected
router.use(protect);

// Generation and Stats
router.post("/generate", generateFlashcardsHandler); // POST /api/flashcards/generate
router.get("/stats", getFlashcardStatsHandler); // GET /api/flashcards/stats

// CRUD
router.get("/", getFlashcards); // GET /api/flashcards
router.post("/", createFlashcardHandler); // POST /api/flashcards
router.get("/:id", getFlashcardHandler); // GET /api/flashcards/:id
router.patch("/:id", updateFlashcardHandler); // PATCH /api/flashcards/:id
router.delete("/:id", deleteFlashcardHandler); // DELETE /api/flashcards/:id

export default router;

