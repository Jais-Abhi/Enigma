import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../../controllers/events/event-controller.js";
import { authMiddleware } from "../../controllers/auth/auth-controller.js";
import { upload } from "../../helpers/cloudinary.js";

const router = express.Router();

router.post("/", authMiddleware, upload.single("poster"), createEvent);
router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.put("/:id", authMiddleware, upload.single("poster"), updateEvent);
router.delete("/:id", authMiddleware, deleteEvent);

export default router;
