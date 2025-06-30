import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rollNo: { type: String, required: true },
    sec: { type: String, required: true },
    branch: { type: String, required: true },
    committee: {
      type: String,
      enum: [
        "AI/ML & Cloud",
        "Cybersecurity",
        "Technical",
        "Knowledge & Collaboration Hub",
        "DSA & CP",
        "Web Development",
        "Social Media",
      ],
      required: true,
    },
    position: {
      type: String,
      enum: ["Member", "Head","CoHead"],
      default: "Member",
    },
    contactNo: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    linkedin: { type: String },
    github: { type: String },
    image: { type: String },
    isActive: { type: Boolean, default: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  },
  { timestamps: true }
);

const Member = mongoose.model("Member", MemberSchema);
export default Member;
