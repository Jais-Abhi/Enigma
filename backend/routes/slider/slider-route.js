import express from "express";
import {
  createSlider,
  getAllSliders,
  updateSlider,
  deleteSlider,
} from "../../controllers/sliders/slider-controller.js";
import { authMiddleware } from "../../controllers/auth/auth-controller.js";
import { upload } from "../../helpers/cloudinary.js";

const router = express.Router();

router.post("/", authMiddleware, upload.single("image"), createSlider);
router.get("/", getAllSliders);
router.put("/:id", authMiddleware, upload.single("image"), updateSlider);
router.delete("/:id", authMiddleware, deleteSlider);

export default router;
