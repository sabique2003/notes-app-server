const express=require('express')

const noteController=require('../Controller/noteContoller')

const routes=express.Router()

routes.post("/addnote", noteController.addNote);
routes.get("/getnote", noteController.getNote);
routes.delete("/deletenote/:id", noteController.deleteNote);
routes.put("/editnote/:id", noteController.editNote);


module.exports=routes