import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteNote } from '../features/notes/noteSlice'
import { Box, Button, Text } from '@chakra-ui/react'


function NoteItem( {note}) {
    const dispatch = useDispatch()

  return (
    <Box
    border = {'2px'}
    borderColor = {'gray.400'}
    p = {4}
    m = {4}
    rounded = {'md'}
    color = {'black'}
    >
    <div className= "note">
        <div>
            {new Date(note.createdAt).toLocaleDateString('en-GB')}
            <br></br>
            {new Date(note.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
        <h2>
            {note.text}
        </h2>
        <br></br>
        <Button
        // bg={'#5FA7CF'}
        border = {'2px'}

        color = {'gray.600'}
        onClick = { () => dispatch(deleteNote(note._id))}
        >
            Delete
            </Button>
        </div>
        </Box>
  )
}

export default NoteItem