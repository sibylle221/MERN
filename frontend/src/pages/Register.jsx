import React from 'react'
import { useState, useEffect } from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
    const [formData , setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = e => {
        e.preventDefault()
        if(password !== password2){
            console.log('Passwords do not match')
        } else {
            console.log(formData)
        }
    } 
  return (
<>
    <section className = "heading">
        <h1>
            < FaUser/>Register
            </h1>
        <p>Register to create your own goals</p>
    </section>


    <section className = "form"> 
    <form onSubmit = {onSubmit}  >
    <div className = "form-group">
    <input
    type = "text"
    className ="form-control"
    id = "name"
    placeholder = "Please enter your name"
    value = {name}
    onChange = { onChange} />
    </div>
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
    <input
    type = "password"
    className ="form-control"
    id = "password2"
    placeholder = "Please confirm your password"
    value = {password2}
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

export default Register