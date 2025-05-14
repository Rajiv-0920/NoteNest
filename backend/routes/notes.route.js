import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import {
  getNote,
  getNotes,
  createNotes,
  updateNotes,
  deleteNotes,
} from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/", protectedRoute, getNotes);
router.get("/:id", protectedRoute, getNote);
router.post("/", protectedRoute, createNotes);
router.put("/:id", protectedRoute, updateNotes);
router.delete("/:id", protectedRoute, deleteNotes);

export default router;
