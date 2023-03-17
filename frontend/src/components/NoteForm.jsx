import React from 'react'
import { useState} from 'react'
import {useDispatch} from 'react-redux'
import { createNote } from '../features/notes/noteSlice'


function NoteForm() {

    const onSubmit = e => {
        e.preventDefault()
        dispatch(createNote({text}))
        setText('')
    }
    
    const [text, setText ] = useState('')

    const dispatch = useDispatch()

  return <section className='form'>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label htmlFor='text'>Notes</label>
                <input type='text' name='text' id='text' value = {text}
                    onChange = {(e) => setText (e.target.value)} />
                
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-block">Add note</button>
            </div>
        </form>
        
         </section>

  
}

export default NoteForm