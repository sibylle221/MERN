import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'



function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector (
        (state) => state.auth
    )
    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    const onProfile = () => {
        navigate('/profile')
    }

    const onNotes = () => {
        navigate('/notes')
    }

    const onHome = () => {
        navigate('/')
    }

    const onRequests = () => {
        navigate('/requests')
    }

  return (
    <header className = "header">
    <div className = "logo">
        <Link to = "/">Propel Health</Link>
    </div>
    <ul>
        {user ? ( <li>
            <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
            </button>
            <button className='btn' onClick = {onProfile}>
                <FaUser /> Profile
            </button>
            <button className='btn' onClick = {onNotes}>
                <FaUser /> Notes
                </button>
            <button className='btn' onClick = {onHome}>
                <FaUser /> Home
            </button>
            <button className='btn' onClick = {onRequests}>
                <FaUser /> Requests
            </button>
        </li>) : (<>
        <li>
            <Link to = "/login">
                <FaSignInAlt /> Login
            </Link>
        </li>
        <li>
            <Link to = "/register">
                <FaUser /> Register
            </Link>
        </li>

        </>)}

    </ul>
    </header>
  )
}


export default Header