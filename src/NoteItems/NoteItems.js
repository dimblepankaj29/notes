import React, {useState, useEffect} from 'react'
import NoteInput from '../NoteInput/NoteInput'
import './NoteItems.css'
const NoteItems = (props) =>{
    const {noteItems,addNote} = props
    const [note, setNote] = useState('')

    const handleOnClick = ()=>{
      addNote(note)
      setNote('')
    }
    return (
       <div className =" note-item-container"> 
        <div className="noteInput-block">
          <NoteInput note = {note} setNote = {setNote}/>
          <button onClick={ handleOnClick } disabled = {!note && !noteItems?.noteId}>Add</button>
         </div>
         {Object.keys(noteItems).length ===0 && <p><strong>Please select Note to see the Note list</strong></p>}
         <ul >
             {noteItems?.notes?.map(li => <li className = "note-list-item">{li.text}</li>)}
         </ul>
       </div> 
    )
}

export default NoteItems