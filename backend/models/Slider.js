// models/Slider.js
import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    image: { type: String, required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true }
);

const Slider = mongoose.model("Slider", sliderSchema);
export default Slider;
