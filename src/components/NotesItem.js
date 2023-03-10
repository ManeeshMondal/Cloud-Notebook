import React,{useContext} from 'react';
import noteContext from '../context/notes/noteContext'

const NotesItem = (props) => {
   const context = useContext(noteContext)
  const {deleteNote}=context
  const{showAlert}=props
  const {note,updateNote}=props
  const handelClick=()=>{
    deleteNote(note._id)
    showAlert("Deleted Successfully","success")
 
  }
  return (
    <div className='col-md-3 '>
      <div className="card my-3">
     <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <i className="far fa-trash-alt mx-2" onClick={handelClick}></i>
    <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>

  </div>
</div>
    </div>
  )
}

export default NotesItem