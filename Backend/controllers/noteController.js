console.log("NOTE CONTROLLER LOADED");

import Note from "../models/note.js";

// CREATE NOTE
export const createNote = async (req, res) => {
  try {
    const note = await Note.create({
      title: req.body.title,

      description: req.body.description,
       
      folder:req.body.folder,


      user: req.user._id,
    });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL NOTES
export const getNotes = async (req, res) => {

  try {

    const filter = {

      user: req.user.id,

    };

    if (req.query.folder) {

      filter.folder =
        req.query.folder;

    }

    const notes =
      await Note.find(filter);

    res.json(notes);

  } catch (error) {

    res.status(500).json({

      message:
        error.message,

    });

  }

};




// GET SINGLE NOTE
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE NOTE
export const updateNote = async (req, res) => {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    note.title = req.body.title;

    note.description = req.body.description;

    await note.save();

    res.json(note);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE NOTE
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    await note.deleteOne();

    res.json({
      message: "Note deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};