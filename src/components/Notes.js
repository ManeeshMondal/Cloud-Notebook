import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote';
import NotesItem from './NotesItem';

const Notes = (props) => {
  const context = useContext(noteContext)
  const {showAlert}=props
  let history=useHistory()
  const { notes, getNote,editNote } = context
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNote()
    }
    else{
      history.push("/")
    } 
    // eslint-disable-next-line
  }, [])
  const [note, setNote] = useState({id:"", etitle:"",edescription:"",etag:""})
  const ref = useRef(null)
  const closeRef=useRef(null)
  // updateNote funtion 
  const updateNote = (currentNote) => {
    ref.current.click();
   setNote({id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
  }
    //  note editing
    const handleOnUpdateNote=(e)=>{
      console.log("updating....",note)
      editNote(note.id,note.etitle,note.edescription,note.etag)
      ref.current.click()
      
      showAlert("Note Updated Successfully","success")

   }
   const onChange=(e)=>{
     setNote({...note,[e.target.name]:e.target.value})
   }

  return (
    <>
      <AddNote showAlert={props.showAleart}/>
      <button ref={ref} style={{display:"none"}} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" value={note.etitle} name='etitle' aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" value={note.edescription}  name='edescription' onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
                </div>
              </form> 
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" ref={closeRef} disabled={note.etitle.length<3||note.edescription.length<5} onClick={handleOnUpdateNote}  className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className='row my-3 gap_class'>
        <h1>Your Notes</h1>
        <div className="container">
           {notes.length===0&&"No Notes To Display"}
           </div>
        {notes.map((note) => {
          return <NotesItem key={note._id} updateNote={updateNote} note={note} showAleart={props.showAleart} />;
        })}
      </div>
    </>
  )
}

export default Notes