import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { createRequest } from '../features/requests/requestSlice'


function RequestForm() {

    const onSubmit = e => {
        e.preventDefault()
        dispatch(createRequest({text, status: "active"}))
        setText('')
      
    }
    

    const [text, setText ] = useState('')
   
    

    const dispatch = useDispatch()

  return <section className='form'>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label htmlFor='text'>Requests</label>
                <input type='text' name='text' id='text' value = {text}
                    onChange = {(e) => setText (e.target.value)} />
                {/* <button className='btn btn-block' type='text' name='text' id='text' value = {text}
                onChange = {(e) => setText ('active')}>
                    Active
                </button> */}
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-block">Add Request</button>
            </div>
        </form>
        
         </section>

  
}

export default RequestForm