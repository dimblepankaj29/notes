import React, {useState, useEffect} from 'react'
import NoteItems from '../NoteItems/NoteItems'
import {getList} from '../Api/NoteList'
import './NoteList.css'

const NoteList = () =>{
  const [noteItems, setNoteItems] = useState([])
  const [noteData, setNoteData] = useState ([])
  const [selectNote, setSelectedNote] = useState("")

  useEffect (()=>{
    // Get note list from API call
    getList().then(res =>{
      setNoteData(res)
    })
  },[])

  useEffect (()=>{
    selectNote && setNoteItems(noteData.find(note => note.noteId === selectNote))
  },[noteData])
  
  const addNote = (note) =>{
    noteData.forEach(r => {
      if (r.noteId === selectNote){
          r.notes.push({ noteItemId: r.notes.length+1, text: note})
      }
    })
      setNoteData(noteData)
  }

  const handleNoteClick = (noteId)=> {
    setSelectedNote(noteId)
    setNoteItems(noteData.find(note => note.noteId === noteId))
  }
  
  return(
  <>
    <ul className ="note-container">
      {noteData?.length >0 &&  noteData.map(note => 
          <li className = {selectNote === note.noteId ? "note-item-active": "note-item"} key = {note.noteId} 
          onClick= {() => handleNoteClick(note.noteId)}>{note.noteTitle}</li>  
      )}
    </ul>
    <NoteItems noteItems = {noteItems} addNote = {addNote} />
  </>
  
  )
}

export default NoteList