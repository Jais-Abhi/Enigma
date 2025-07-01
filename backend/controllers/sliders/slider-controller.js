// controllers/slider/slider-controller.js
import Slider from "../../models/Slider.js";
import { imageUploadUtil } from "../../helpers/cloudinary.js";

// Create Slider
const createSlider = async (req, res) => {
  try {
    const { title, subtitle } = req.body;
    const fileBuffer = req.file?.buffer;

    if (!fileBuffer)
      return res
        .status(400)
        .json({ success: false, message: "Image is required" });

    const uploadResult = await imageUploadUtil(
      `data:${req.file.mimetype};base64,${fileBuffer.toString("base64")}`
    );

    const newSlider = new Slider({
      title,
      subtitle,
      image: uploadResult.secure_url,
      createdBy: req.user.id,
    });

    await newSlider.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Slider created successfully",
        slider: newSlider,
      });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to create slider",
        error: err.message,
      });
  }
};

// Get All Sliders
const getAllSliders = async (req, res) => {
  try {
    const sliders = await Slider.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, sliders });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to fetch sliders",
        error: err.message,
      });
  }
};

// Update Slider
const updateSlider = async (req, res) => {
  try {
    const slider = await Slider.findById(req.params.id);
    if (!slider)
      return res
        .status(404)
        .json({ success: false, message: "Slider not found" });

    let imageUrl = slider.image;

    if (req.file) {
      const fileBuffer = req.file.buffer;
      const uploadResult = await imageUploadUtil(
        `data:${req.file.mimetype};base64,${fileBuffer.toString("base64")}`
      );
      imageUrl = uploadResult.secure_url;
    }

    const updatedFields = {
      title: req.body.title,
      subtitle: req.body.subtitle,
      image: imageUrl,
    };

    const updatedSlider = await Slider.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true }
    );
    res
      .status(200)
      .json({
        success: true,
        message: "Slider updated successfully",
        slider: updatedSlider,
      });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to update slider",
        error: err.message,
      });
  }
};

// Delete Slider
const deleteSlider = async (req, res) => {
  try {
    const slider = await Slider.findById(req.params.id);
    if (!slider)
      return res
        .status(404)
        .json({ success: false, message: "Slider not found" });

    await slider.deleteOne();
    res
      .status(200)
      .json({ success: true, message: "Slider deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to delete slider",
        error: err.message,
      });
  }
};

export { createSlider, getAllSliders, updateSlider, deleteSlider };
