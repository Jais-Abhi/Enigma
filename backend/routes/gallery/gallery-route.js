import express from "express";
import { authMiddleware } from "../../controllers/auth/auth-controller";
import { upload } from "../../helpers/cloudinary.js";
import {
  createGalleryImage,
  deleteGalleryImage,
  getGalleryImages,
  updateGalleryImage,
} from "../../controllers/gallery/gallery-controller.js";

const router = express.Router();

router.post("/", authMiddleware, upload.single("image"), createGalleryImage);
router.get("/", getGalleryImages);
router.put("/:id", authMiddleware, upload.single("image"), updateGalleryImage);
router.delete("/:id", authMiddleware, deleteGalleryImage);

export default router;
