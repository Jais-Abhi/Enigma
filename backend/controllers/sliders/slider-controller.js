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
    console.error("Slider creation failed:", err.message); // 🔍 देखें terminal में
    res.status(500).json({
      success: false,
      message: "Failed to create slider",
      error: err.message,
    });
  }
};

export { createSlider };
