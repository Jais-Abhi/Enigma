import express from "express";
import {
  createMember,
  getAllMembers,
  updateMember,
  deleteMember,
  toggleMemberStatus,
} from "../../controllers/members/member-controller.js";
import { authMiddleware } from "../../controllers/auth/auth-controller.js";
import { upload } from "../../helpers/cloudinary.js";

const router = express.Router();

router.post("/", authMiddleware, upload.single("image"), createMember);
router.get("/", getAllMembers);
router.put("/:id", authMiddleware, upload.single("image"), updateMember);
router.delete("/:id", authMiddleware, deleteMember);
router.patch("/toggle-status/:id", authMiddleware, toggleMemberStatus);

export default router;
