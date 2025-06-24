import express from "express";
import {
  createSlider,
} from "../../controllers/sliders/slider-controller.js";
import { authMiddleware } from "../../controllers/auth/auth-controller.js";
import { upload } from "../../helpers/cloudinary.js";

const router = express.Router();

router.post("/", authMiddleware, upload.single("poster"), createSlider);

export default router;
