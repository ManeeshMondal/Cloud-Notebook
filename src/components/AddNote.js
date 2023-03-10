import React,{useContext,useState} from 'react';
import noteContext from '../context/notes/noteContext'

const AddNote = () => {
    const context = useContext(noteContext)
     const {addNote}=context
     const [note, setNote] = useState({title:"",description:"",tag:""})
    // new note adding
     const handleOnAddnote=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
        setNote({title:"",description:"",tag:""})
     }
     const onChange=(e)=>{
       setNote({...note,[e.target.name]:e.target.value})
     }
  return (
    <div className="my-3 gap_class">
      <h1>Add Your Notes</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title'  value={note.title} aria-describedby="emailHelp" onChange={onChange}/>
         </div>
         <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" value={note.description} name='description' onChange={onChange}/>
         </div>
         <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" value={note.tag} name='tag' onChange={onChange}/>
         </div>
        <button type="submit" disabled={note.title.length<3||note.description.length<5} className="btn btn-primary" onClick={handleOnAddnote}>Add Note</button>
      </form>
      </div>
  )
}

export default AddNote