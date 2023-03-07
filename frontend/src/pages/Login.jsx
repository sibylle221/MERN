import React from 'react'
import { useState, useEffect } from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
    const [formData , setFormData] = useState({

        email: '',
        password: '',
    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = e => {
        e.preventDefault()
        
    } 
  return (
<>
    <section className = "heading">
        <h1>
           <FaSignInAlt/> Login
            </h1>
        <p>Login</p>
    </section>


    <section className = "form"> 
    <form onSubmit = {onSubmit}  >
    
    <div className = "form-group">
    <input
    type = "email"
    className ="form-control"
    id = "email"
    placeholder = "Please enter your email"
    value = {email}
    onChange = { onChange} />
    </div>
    <div className = "form-group">
    <input
    type = "password"
    className ="form-control"
    id = "password"
    placeholder = "Please enter your password"
    value = {password}
    onChange = { onChange} />
    </div>
    
    <div className = "form-group">
    <button type = "submit" className = "btn btn-block">Register</button>
    </div>
    </form>
    </section>

</>
    )
}

export default Login