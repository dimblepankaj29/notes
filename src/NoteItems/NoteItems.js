import React from 'react'
import './NoteItems.css'
const NoteItems = (props) =>{
    const {noteItems} = props
    console.log(noteItems)
    return (
       <> 
         <ul className = "note-item-container">
             {noteItems.map(li => <li className = "note-list-item">{li.text}</li>)}
         </ul>
       </> 
    )
}

export default NoteItems