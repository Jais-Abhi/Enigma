import Event from "../../models/Event.js";
import { imageUploadUtil } from "../../helpers/cloudinary.js";

//Creating Event
const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      community,
      venue,
      eventDateTime,
      organizerName,
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

    const newEvent = new Event({
      title,
      description,
      community,
      venue,
      eventDateTime,
      organizerName,
      poster: uploadResult.secure_url,
      createdBy: req.user.id,
    });

    await newEvent.save();
    res.status(201).json({
      success: true,
      message: "Event created successfully",
      event: newEvent,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create event",
      error: err.message,
    });
  }
};

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name email");
    res.status(200).json({ success: true, events });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch events",
      error: err.message,
    });
  }
};

// Get event by ID
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate(
      "createdBy",
      "name email"
    );
    if (!event)
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    res.status(200).json({ success: true, event });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch event",
      error: err.message,
    });
  }
};

// Update event
const updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    }

    if (String(event.createdBy) !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this event",
      });
    }

    let posterUrl = event.poster;

    if (req.file) {
      const fileBuffer = req.file.buffer;
      const uploadResult = await imageUploadUtil(
        `data:${req.file.mimetype};base64,${fileBuffer.toString("base64")}`
      );
      posterUrl = uploadResult.secure_url;
    }

    // Update all fields from req.body + poster
    const updatedFields = {
      title: req.body.title,
      description: req.body.description,
      community: req.body.community,
      venue: req.body.venue,
      eventDateTime: req.body.eventDateTime,
      organizerName: req.body.organizerName,
      poster: posterUrl,
    };

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      event: updatedEvent,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update event",
      error: err.message,
    });
  }
};

// Delete event
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event)
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });

    if (String(event.createdBy) !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this event",
      });
    }

    await event.deleteOne();
    res
      .status(200)
      .json({ success: true, message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete event",
      error: err.message,
    });
  }
};

export { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };
