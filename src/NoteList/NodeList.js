import React, {useState, useEffect} from 'react'
// import {NoteListData} from '../constant/constant'
import NoteItems from '../NoteItems/NoteItems'
import {getList} from '../Api/NoteList'
import './NoteList.css'

const NoteList = () =>{
    const [noteItems, setNoteItems] = useState([])
    const [noteData, setNoteData] = useState ([])
    const handleNoteClick = (noteId)=> {
      setNoteItems(noteData.find(note => note.noteId === noteId).notes)
    }

    useEffect (()=>{
      console.log("getList",getList())
        setNoteData(getList())
    },[])
    return(
    <>
      <ul className ="note-container">
        {noteData?.length >0 &&  noteData.map(note => 
            <li className ="note-item" key = {note.noteId} 
            onClick= {() => handleNoteClick(note.noteId)}>{note.noteTitle}</li>  
        )}
      </ul>
      <NoteItems noteItems = {noteItems} />
    </>
   
    )
}

export default NoteList