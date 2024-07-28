const express=require("express");
const NoteRouter=express.Router();
const {Authentication}=require("../middlewares/Authenitcation");
const { CreateNote, GetUserAllNote, updateNote, deleteNote, getNote } = require("../controllers/Note.Controller");


NoteRouter.route("/notes").post(Authentication,CreateNote).get(Authentication,GetUserAllNote);
NoteRouter.route("/notes/:id").get(Authentication,getNote).patch(Authentication,updateNote).delete(Authentication,deleteNote);

module.exports={
    NoteRouter
}