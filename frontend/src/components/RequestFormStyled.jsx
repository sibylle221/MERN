import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { createRequest } from '../features/requests/requestSlice'
import {Button} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


function RequestFormS() {

    const navigate = useNavigate()
    const onSubmit = e => {
        e.preventDefault()
        dispatch(createRequest({text, status: "active"}))
        setText('')
        navigate ('/requestsStyled')
      
    }
    

    const [text, setText ] = useState('')
   
    

    const dispatch = useDispatch()

  return <section className='form'>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label htmlFor='text'>Enter new Request</label>
                <input type='text' name='text' id='text' value = {text}
                    onChange = {(e) => setText (e.target.value)} />
                {/* <button className='btn btn-block' type='text' name='text' id='text' value = {text}
                onChange = {(e) => setText ('active')}>
                    Active
                </button> */}
            </div>
            <div className="form-group">
                <Button type="submit"                 bg={'#D8F3FF'}
                border = {'2px'}
                color = {'#5FA7CF'}
                _hover={{   bg: '#B9E9FF',}} >
                Add Request</Button>
            </div>
        </form>
        
         </section>

  
}

export default RequestFormS