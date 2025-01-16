import express from "express";
import { updateUser } from "../controllers/userClerkController";

const router = express.Router();

// List all courses
router.put("/:userId", updateUser);

export default router;
