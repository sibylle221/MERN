import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteNote } from '../features/notes/noteSlice'

function NoteItem( {note}) {
    const dispatch = useDispatch()

  return (
    <div className= "note">
        <div>
            {new Date(note.createdAt).toLocaleDateString('en-GB')}
            <br></br>
            {new Date(note.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
        <h2>
            {note.text}
        </h2>
        <button onClick = { () => dispatch(deleteNote(note._id))}className="delete">
            Delete
            </button>
        </div>
  )
}

export default NoteItem