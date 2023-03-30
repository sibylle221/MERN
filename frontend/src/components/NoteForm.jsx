import React from 'react'
import { useState} from 'react'
import {useDispatch} from 'react-redux'
import { createNote } from '../features/notes/noteSlice'
import { Button, Text, Box } from '@chakra-ui/react'

function NoteForm() {
    const onSubmit = e => {
        e.preventDefault()
        dispatch(createNote({text}))
        setText('')
    }
    
    const [text, setText ] = useState('')

    const dispatch = useDispatch()

  return <Box
  color = {'black'}>
  <section className='form'>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <Text 
                color = {'black'}
                align = {'left'}>
                    Status
                </Text>

                <input type='text' name='text' id='text' value = {text}
                    onChange = {(e) => setText (e.target.value)} />
            </div>
            <div className="form-group">

                <Button
                bg={'#D8F3FF'}
                color = {'#5FA7CF'}
                type="submit"   
                >
                    Add Status
                    </Button>              
            </div>
        </form>
         </section>
         </Box>
}

export default NoteForm