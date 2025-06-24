import Slider from "../../models/Slider.js";
import { imageUploadUtil } from "../../helpers/cloudinary.js";
const createSlider = async (req, res) => {
  try {
    const {
      title,
      subtitle,
    } = req.body;
    const fileBuffer = req.file?.buffer;

    if (!fileBuffer) {
      return res
        .status(400)
        .json({ success: false, message: "Poster image is required" });
    }

    const uploadResult = await imageUploadUtil(
      `data:${req.file.mimetype};base64,${fileBuffer.toString("base64")}`
    );

    const newEvent = new Slider({
      title,
      subtitle,
      poster: uploadResult.secure_url,
      createdBy: req.user.id,
    });

    await newSliders.save();
    res.status(201).json({
      success: true,
      message: "Event created successfully",
      slider: newSliders,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create event",
      error: err.message,
    });
  }
};
export { createSlider}
