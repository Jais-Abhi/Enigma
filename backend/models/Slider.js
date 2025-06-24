import mongoose from "mongoose";

const SliderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  
});

const Slider = mongoose.model("Sliders", SliderSchema);
export default Slider;
