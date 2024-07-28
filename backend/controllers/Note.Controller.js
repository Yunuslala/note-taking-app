const AsyncErrorHandler = require("../middlewares/AsyncErrorHandler");
const { NoteModel } = require("../models/Note.model");
const { ErrorHandler } = require("../utils/Error.Handler");

exports.CreateNote = AsyncErrorHandler(async (req, res, next) => {
  try {
    const { topic, description } = req.body;
    const notes = new NoteModel({
      topic,
      description,
      userId: req.body.UserId,
    });
    await notes.save();
    return res
      .status(200)
      .send({ success: true, msg: "note is created", data: notes });
  } catch (err) {
    return next(new ErrorHandler(500, err));
  }
});
exports.GetUserAllNote = AsyncErrorHandler(async (req, res) => {
  try {
    const notes = await NoteModel.find({ userId: req.body.UserId }).populate('userId');
    if (!notes.length) {
      return res
        .status(200)
        .send({ success: false, msg: "notes does not exist Invalid Id" });
    }
    return res
      .status(200)
      .send({ success: true, msg: "notes are dispersed", data: notes });
  } catch (err) {
    return next(new ErrorHandler(500, err));
  }
});
exports.getNote = AsyncErrorHandler(async (req, res) => {
  try {
    const resumes = await NoteModel.findOne({ _id: req.params.id });
    if (!resumes) {
      return res
        .status(200)
        .send({ success: false, msg: "note does not exist Invalid Id" });
    }
    return res
      .status(200)
      .send({ success: true, msg: "note is despersed", data: resumes });
  } catch (err) {
    return next(new ErrorHandler(500, err));
  }
});

exports.updateNote = AsyncErrorHandler(async (req, res, next) => {
  try {
    const { topic, description } = req.body;
    const findNotes = await NoteModel.findById({ _id: req.params.id });
    if (!findNotes) {
      return res
        .status(200)
        .send({ success: true, msg: "notes does not exist Invalid Id" });
    }
    const note = await NoteModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        topic: topic ? topic : findNotes.topic,
        description: description ? description : findNotes.description,
      },
      { new: true }
    );
    return res
      .status(200)
      .send({ success: true, msg: "note is updated", data: note });
  } catch (err) {
    console.log("error", err);
    return next(new ErrorHandler(500, err));
  }
});

exports.deleteNote = AsyncErrorHandler(async (req, res, next) => {
  try {
    console.log("deleteid",req.params.id)
    const findNotes = await NoteModel.findById({ _id: req.params.id });
    if (!findNotes) {
      return res
        .status(200)
        .send({ success: false, msg: "note does not exist Invalid Id" });
    }
    await NoteModel.findByIdAndDelete({ _id: req.params.id });
    return res.status(200).send({ success: true, msg: "note removed" });
  } catch (err) {
    console.log("err",err)
    return next(new ErrorHandler(500, err));
  }
});
