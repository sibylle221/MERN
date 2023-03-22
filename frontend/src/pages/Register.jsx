import React from 'react'
import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {FaUser} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import {toast } from 'react-toastify'
import { register, reset } from "../features/auth/authSlice"
import Spinner from '../components/Spinner'
import Logo from '../styling/Logo'
import {Text,Button, Box} from '@chakra-ui/react'

function Register() {
    const [formData , setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, isLoading, isError, message, isSuccess } = useSelector (
        (state) => state.auth
        )

    useEffect (() => {
        if(isError) {
            toast.error(message)
  
        }
        if(isSuccess || user) {
            toast.success(message)
            navigate('/')
        }
        dispatch (reset())

    }, [user, isLoading, isError, message, isSuccess, navigate, dispatch])

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
            toast.error ('Passwords do not match')
        } else {
            const userData = {
                name,
                email,
                password
            }
            dispatch(register(userData))

        }
    } 

    if (isLoading) {
        return <Spinner />
    }


  return (
<>
<Box color = {'#5FA7CF'}   >
<Logo/> 
    <section className = "heading">
        <h1>
            Register
            </h1>
        <p>Create an account to access Propel Health</p>
    </section>


    <section className = "form"> 
    <form onSubmit = {onSubmit}  >
    <div className = "form-group">
    <input
    type = "request"
    className ="form-control"
    id = "name"
    name = "name"
    placeholder = "Please enter your name"
    value = {name}
    onChange = { onChange} />
    </div>
    <div className = "form-group">
    <input
    type = "email"
    className ="form-control"
    id = "email"
    name = "email"
    placeholder = "Please enter your email"
    value = {email}
    onChange = { onChange} />
    </div>
    <div className = "form-group">
    <input
    type = "password"
    className ="form-control"
    id = "password"
    name = "password"
    placeholder = "Please enter your password"
    value = {password}
    onChange = { onChange} />
    </div>
    <div className = "form-group">
    <input
    type = "password"
    className ="form-control"
    id = "password2"
    name = "password2"
    placeholder = "Please confirm your password"
    value = {password2}
    onChange = { onChange} />
    </div>
    <div className = "form-group">
        <Button type='submit'
                        bg={'#D8F3FF'}
                        border = {'2px'}
                        color = {'#5FA7CF'}    

                        borderRadius = {'md'}

                        _hover={{
                          bg: '#B9E9FF',
                        }}>
            Register
   
    </Button>
    </div>
    </form>
    </section>
    </Box>
</>
    )
}


export default Register