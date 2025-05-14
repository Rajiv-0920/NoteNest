import Note from "../models/note.model.js";

export const getNotes = async (req, res) => {
  try {
    const userId = req.user._id;
    const notes = await Note.find({ userId });
    if (notes.length === 0) {
      return res.status(200).json({
        success: true,
        status: "success",
        message: "No notes found for the user.",
        data: [],
      });
    }
    return res.status(200).json({
      success: true,
      status: "success",
      message: "All notes fetched successfully.",
      data: notes,
    });
  } catch (error) {
    console.log(`Error in Notes Controller ${error.message}`);
    res.status(500).json({
      success: false,
      status: "Internal",
      message: "Internal Server Error",
    });
  }
};

export const getNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const note = await Note.findById(noteId);

    return res.status(200).json({
      success: true,
      status: "success",
      message: "Note fetched successfully.",
      data: note,
    });
  } catch (error) {
    console.log(`Error in getNote router ${error.message}`);
    return res.status(500).json({
      success: false,
      error: "Internal Error",
      message: "Internal Server Error",
    });
  }
};

export const createNotes = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user._id;

  if (!title || !content) {
    return res.status(400).json({
      success: false,
      error: "Bad Request",
      message: "Title and Content are required.",
    });
  }

  try {
    const newNote = new Note({ userId, title, content });
    if (newNote) {
      await newNote.save();
      return res.status(201).json({
        success: true,
        status: "success",
        message: "Notes created successfully",
        data: { ...newNote._doc },
      });
    } else {
      return res.status(400).json({
        success: false,
        status: "fail",
        message: "Failed to create note. Please provide valid note data.",
      });
    }
  } catch (error) {
    console.log(`Error in createNote router ${error.message}`);
    return res.status(500).json({
      success: false,
      error: "Internal Error",
      message: "Internal Server Error",
    });
  }
};

export const updateNotes = async (req, res) => {
  const updateNote = req.body;
  const noteId = req.params.id;

  if (!noteId) {
    return res.status(400).json({
      success: false,
      error: "Bad Request",
      message: "Please select a note to update.",
    });
  }

  try {
    const noteUpdated = await Note.findByIdAndUpdate(noteId, updateNote, {
      new: true,
    });

    return res.status(201).json({
      success: true,
      status: "success",
      message: "Notes updated successfully",
      data: { ...noteUpdated._doc },
    });
  } catch (error) {
    console.log(`Error in updateNote router ${error.message}`);
    return res.status(500).json({
      success: false,
      error: "Internal Error",
      message: "Internal Server Error",
    });
  }
};

export const deleteNotes = async (req, res) => {
  const noteId = req.params.id;

  if (!noteId) {
    return res.status(400).json({
      success: false,
      error: "Bad Request",
      message: "Note not found. Nothing to delete.",
    });
  }

  try {
    await Note.deleteOne({ _id: noteId });
    return res.status(200).json({
      success: true,
      status: "Delete",
      message: "Note successfully deleted.",
    });
  } catch (error) {
    console.log(`Error in updateNote router ${error.message}`);
    return res.status(500).json({
      success: false,
      error: "Internal Error",
      message: "Internal Server Error",
    });
  }
};
