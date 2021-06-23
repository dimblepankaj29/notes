import React from 'react'
import Header from './Header/Header'
import NoteList from './NoteList/NodeList'
import "./App.css"

const App = () =>{
    return(
        <>
       <Header/>
      
        <div className ="app-container">
        <NoteList/>
        </div>
       </>
    )
}

export default App