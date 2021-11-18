import express from "express";
import { newPost } from "../collections/handlers.js";
const router = express.Router();

router.get("/", newPost);

export default router;
