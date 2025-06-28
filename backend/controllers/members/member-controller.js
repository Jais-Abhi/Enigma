import Member from "../../models/Member.js";
import { imageUploadUtil } from "../../helpers/cloudinary.js";
// Create Member
const createMember = async (req, res) => {
  try {
    const {
      name,
      rollNo,
      sec,
      branch,
      committee,
      position,
      contactNo,
      email,
      linkedin,
      github,
    } = req.body;

    const fileBuffer = req.file?.buffer;

    if (!fileBuffer) {
      return res
        .status(400)
        .json({ success: false, message: "Member image is required" });
    }

    const uploadResult = await imageUploadUtil(
      `data:${req.file.mimetype};base64,${fileBuffer.toString("base64")}`
    );

    const newMember = await Member.create({
      name,
      rollNo,
      sec,
      branch,
      committee,
      position,
      contactNo,
      email,
      linkedin,
      github,
      image: uploadResult.secure_url,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Member created successfully",
      member: newMember,
    });
  } catch (err) {
    console.error("Create Member Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to create member",
      error: err.message,
    });
  }
};

// Get All Members
const getAllMembers = async (req, res) => {
  try {
    const members = await Member.find().sort({ rollNo: 1 });
    res.status(200).json({ success: true, members });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch members",
      error: error.message,
    });
  }
};

// Update Member
const updateMember = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res
        .status(404)
        .json({ success: false, message: "Member not found" });
    }

    let imageUrl = member.image;

    if (req.file) {
      const fileBuffer = req.file.buffer;
      const uploadResult = await imageUploadUtil(
        `data:${req.file.mimetype};base64,${fileBuffer.toString("base64")}`
      );
      imageUrl = uploadResult.secure_url;
    }

    const updatedFields = {
      name: req.body.name,
      rollNo: req.body.rollNo,
      sec: req.body.sec,
      branch: req.body.branch,
      committee: req.body.committee,
      position: req.body.position,
      contactNo: req.body.contactNo,
      email: req.body.email,
      linkedin: req.body.linkedin,
      github: req.body.github,
      image: imageUrl,
    };

    const updatedMember = await Member.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Member updated successfully",
      member: updatedMember,
    });
  } catch (err) {
    console.error("Update Member Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to update member",
      error: err.message,
    });
  }
};

// Delete Member
const deleteMember = async (req, res) => {
  try {
    await Member.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete member",
      error: error.message,
    });
  }
};

// Toggle Member Status
const toggleMemberStatus = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);

    if (!member) {
      return res
        .status(404)
        .json({ success: false, message: "Member not found" });
    }

    member.isActive = !member.isActive;
    await member.save();

    res.status(200).json({
      success: true,
      message: "Member status updated successfully",
      member,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update member status",
      error: err.message,
    });
  }
};

export {
  createMember,
  getAllMembers,
  updateMember,
  deleteMember,
  toggleMemberStatus,
};
