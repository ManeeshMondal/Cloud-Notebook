const express = require("express");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");
const router = express.Router();

//Router:1  fetching all the notes  using  : get "/api/notes/fetchallnotes" [login required]
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });

    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Router:2  posting all the notes  using  : POST "/api/notes/addnote" [login required]
router.post(
  "/addnote",fetchUser,
  [
    body("title", "Enter a valid title.").isLength({ min: 3 }),
    body(
      "description","Description should be more than 5 characters"
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    //if there are errors send bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { title, description, tag } = req.body;
       const user=req.user.id;
      const note = new Notes({
        user,
        title,
        description,
        tag,
        
      });
      // console.log(req.user._id)
      const savedNote =await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Router:3  Update all the notes  using  : PUT "/api/notes/updatenote/:id" [login required]
router.put("/updatenote/:id",fetchUser,async (req, res) => {
  const {title,description,tag}=req.body;
  try {
  // create a new note object 
  const newNote={};
   if(title){newNote.title=title}
   if(description){newNote.description=description}
   if(tag){newNote.tag=tag}

  //  find the note to be updated ans update 
  let note =await Notes.findById(req.params.id);
  // if there is no notes in this id 
  if(!note){
    return res.status(404).send("Not found")
  }
  // if the notes id and enterd id not match 
  if(note.user.toString()!=req.user.id){
    return res.status(401).send("Not Allowed")
  }

  note= await Notes.findByIdAndUpdate(req.params.id,{$set: newNote},{new:true})
  res.json(newNote)
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}
})

//Router:4  delete   the notes  using  : DELETE "/api/notes/deletenote/:id" [login required]
router.delete("/deletenote/:id",fetchUser,async (req,res)=>{
  try {
    
  
  //  find the note to be deleted ans delete 
  let note =await Notes.findById(req.params.id);
  // if there is no notes in this id 
   if(!note){
    return res.status(404).send("Not found")
   }
  // allow to delete only if the user owns this note
    if(note.user.toString()!=req.user.id){
    return res.status(401).send("Not Allowed")
   }
   note= await Notes.findByIdAndDelete(req.params.id)
   res.json({Success:"Note has been deleted",note:note})
}
catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}
})
module.exports = router;
