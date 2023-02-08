import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "https://cloud-notebook.up.railway.app";
  const initialnotes = [];
  const [notes, setNotes] = useState(initialnotes);
  //get all  notes
  const getNote = async () => {
    // api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        auth_token:localStorage.getItem('token'),
         
      },
    });
    const json =await response.json();
    console.log(json);
    setNotes(json);
  };

  //  Add note
  const addNote = async (title, description, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth_token:localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // logic to add note
    const note= await response.json()
    setNotes(notes.concat(note));
  };

  // Delete note
  const deleteNote =async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        auth_token:localStorage.getItem('token'),
      },
    });
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    console.log(response)
    setNotes(newNote);
  };

  // Edit note
  const editNote = async (id, title, description, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        auth_token:localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json)

    // logic to edit
    let newNotes=JSON.parse(JSON.stringify(notes)) 
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }   
    }
    setNotes(newNotes);
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
