import express from "express";
import {
  createSlider,
  getAllSliders,
  getSliderById,
  updateSlider,
  deleteSlider,
} from "../../controllers/sliders/slider-controller.js";
import { authMiddleware } from "../../controllers/auth/auth-controller.js";
import multer from "multer";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", authMiddleware, upload.single("poster"), createSlider);
router.get("/", getAllSliders);
router.get("/:id", getSliderById);
router.put("/:id", authMiddleware, upload.single("poster"), updateSlider);
router.delete("/:id", authMiddleware, deleteSlider);

export default router;