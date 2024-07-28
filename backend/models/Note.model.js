const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  topic:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  }
},{
  timestamps:true
});

const NoteModel = mongoose.model("Note", NoteSchema);

module.exports = {
  NoteModel,
};
