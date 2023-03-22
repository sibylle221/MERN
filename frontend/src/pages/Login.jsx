import React from 'react'
import { useState, useEffect } from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {FaUser} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import {toast } from 'react-toastify'
import { login, reset } from "../features/auth/authSlice"
import Spinner from '../components/Spinner'
import Logo from '../styling/Logo'
import {Text} from '@chakra-ui/react'
import {Stack, Box, Button} from '@chakra-ui/react'

function Login() {
    const [formData , setFormData] = useState({

        email: '',
        password: '',
    })

    const { email, password } = formData

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
        
            const userData = {
                email,
                password

    } 

        dispatch(login(userData))
}
    if (isLoading) {
        return <Spinner />
    }

  return (
<>
<Stack
align={'center'}
color ={'#5FA7CF'}
fontWeight = {'bold'}
>
    

<Logo/>
    <section className = "heading">
        <h1>
            </h1>
        <p>Login</p>
    </section>

<Box
width   = {'full'}
color ={'black'}
>
    <section className = "form"> 
    <form onSubmit = {onSubmit}  >
    
    <div className = "form-group">
    <input
    type = "email"
    className ="form-control"
    id = "email"
    name='email'
    placeholder = "Please enter your email"
    value = {email}
    onChange = { onChange} />
    </div>
    <div className = "form-group">
    <input
    type = "password"
    className ="form-control"
    id = "password"
    name='password'
    placeholder = "Please enter your password"
    value = {password}
    onChange = { onChange} />
    </div>
    
    <div className = "form-group">
        <Button 
        bgColor={'#5FA7CF'}
        fontSize = {'2xl'}
        color = 'white' type = "submit" className = "btn btn-block">Login</Button>
    
    </div>
    </form>
    <Button

    color = {'#5FA7CF'}
    fontSize = {'xl'}
    fontWeight = {'bold'}
    onClick = {() => navigate('/register')}
    >
        Not a member? Register here
    </Button>

    </section>
    </Box>
    </Stack>
</>
    )
}

export default Login