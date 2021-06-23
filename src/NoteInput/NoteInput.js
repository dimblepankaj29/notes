import React from 'react'
import './NoteInput.css'
const NoteInput = (props) =>{
  const {note, setNote} = props
  return(
    <div className="note-input" >
      <label htmlFor="note">Enter Notes</label>
      <textarea name="note" className="note-input--text" value = {note} onChange = {(e)=>setNote(e.target.value)}/>
    </div> 
  )
}

export default NoteInput