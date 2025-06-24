import Slider from "../../models/Slider.js";
import { imageUploadUtil } from "../../helpers/cloudinary.js";

const createSlider = async (req, res) => {
  try {
    const { title, subtitle } = req.body;
    const fileBuffer = req.file?.buffer;

    if (!fileBuffer) {
      return res.status(400).json({ success: false, message: "Poster image is required" });
    }

    const uploadResult = await imageUploadUtil(
      `data:${req.file.mimetype};base64,${fileBuffer.toString("base64")}`
    );

    const newSlider = new Slider({
      title,
      subtitle,
      poster: uploadResult.secure_url,
      createdBy: req.user.id,
    });

    await newSlider.save();

    res.status(201).json({
      success: true,
      message: "Slider created successfully",
      slider: newSlider,
    });
  } catch (err) {
    console.error("Slider creation failed:", err.message);
    res.status(500).json({ success: false, message: "Failed to create slider", error: err.message });
  }
};

const getAllSliders = async (req, res) => {
  try {
    const sliders = await Slider.find();
    res.status(200).json(sliders);
  } catch (err) {
    res.status(500).json({ message: "Server error while fetching sliders" });
  }
};

const getSliderById = async (req, res) => {
  try {
    const slider = await Slider.findById(req.params.id);
    if (!slider) return res.status(404).json({ success: false, message: "Slider not found" });
    res.status(200).json({ success: true, slider });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch slider", error: err.message });
  }
};

const updateSlider = async (req, res) => {
  try {
    const slider = await Slider.findById(req.params.id);
    if (!slider) return res.status(404).json({ success: false, message: "Slider not found" });
    if (String(slider.createdBy) !== req.user.id) return res.status(403).json({ success: false, message: "Unauthorized" });

    let posterUrl = slider.poster;
    if (req.file) {
      const uploadResult = await imageUploadUtil(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`
      );
      posterUrl = uploadResult.secure_url;
    }

    const updatedSlider = await Slider.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      subtitle: req.body.subtitle,
      poster: posterUrl,
    }, { new: true });

    res.status(200).json({ success: true, message: "Slider updated", slider: updatedSlider });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update slider", error: err.message });
  }
};

const deleteSlider = async (req, res) => {
  try {
    const slider = await Slider.findById(req.params.id);
    if (!slider) return res.status(404).json({ success: false, message: "Slider not found" });
    if (String(slider.createdBy) !== req.user.id) return res.status(403).json({ success: false, message: "Unauthorized" });

    await slider.deleteOne();
    res.status(200).json({ success: true, message: "Slider deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete slider", error: err.message });
  }
};

export { createSlider, getAllSliders, getSliderById, updateSlider, deleteSlider };
