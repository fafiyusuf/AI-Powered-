import express from "express";
import upload  from "../../config/multer";
import {  uploadStudyFile } from "./file.controller";
import { protect } from "../auth/auth.middleware";

const router = express.Router();

router.post("/upload" , upload.single("file"), uploadStudyFile);
// router.get("/:fileId", openFile);

export default router;
