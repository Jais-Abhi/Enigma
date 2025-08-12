import Gallery from "../../models/Gallery";
import { imageUploadUtil } from "../../helpers/cloudinary";

// Create Gallery Image
const createGalleryImage = async (req, res) => {
  try {
    const { title, description } = req.body;
    const fileBuffer = req.file?.buffer;

    if (!fileBuffer) {
      return res
        .status(400)
        .json({ success: false, message: "Gallery image is required" });
    }

    const uploadResult = await imageUploadUtil(
      `data:${req.file.mimetype};base64,${fileBuffer.toString("base64")}`
    );

    const newGalleryImage = await Gallery.create({
      title,
      description,
      image: uploadResult.secure_url,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Gallery image created successfully",
      galleryImage: newGalleryImage,
    });
  } catch (err) {
    console.error("Create Gallery Image Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to create gallery image",
      error: err.message,
    });
  }
};

const getGalleryImages = async (req, res) => {
  try {
    const galleryImages = await Gallery.find();
    res.status(200).json({
      success: true,
      galleryImages,
    });
  } catch (err) {
    console.error("Get Gallery Images Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve gallery images",
      error: err.message,
    });
  }
};

const updateGalleryImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const fileBuffer = req.file?.buffer;

    const galleryImage = await Gallery.findById(id);
    if (!galleryImage) {
      return res
        .status(404)
        .json({ success: false, message: "Image not found" });
    }

    if (fileBuffer) {
      const uploadResult = await imageUploadUtil(
        `data:${req.file.mimetype};base64,${fileBuffer.toString("base64")}`
      );
      galleryImage.image = uploadResult.secure_url;
    }

    galleryImage.title = title || galleryImage.title;
    galleryImage.description = description || galleryImage.description;

    await galleryImage.save();

    res.status(200).json({
      success: true,
      message: "Gallery image updated successfully",
      galleryImage,
    });
  } catch (err) {
    console.error("Update Gallery Image Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to update gallery image",
      error: err.message,
    });
  }
};

const deleteGalleryImage = async (req, res) => {
  try {
    const { id } = req.params;
    await Gallery.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Gallery image delete successful!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fail to delete Gallery Image!",
    });
  }
};

export {
  createGalleryImage,
  getGalleryImages,
  updateGalleryImage,
  deleteGalleryImage,
};
