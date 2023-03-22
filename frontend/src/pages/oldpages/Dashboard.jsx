import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NoteForm from '../../components/NoteForm'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'
import { getNotes, reset } from '../../features/notes/noteSlice'
import NoteItem from '../../components/NoteItem'

function Dashboard() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user } = useSelector((state) => state.auth)

    const { notes, isLoading, isError, message, isSuccess } = useSelector((state) => state.notes)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(!user) {
            navigate('/login')
        }

        dispatch(getNotes())

        return () => {
            dispatch(reset())
        }

    }, [user, navigate, dispatch, isError, message])

    if (isLoading) {
        return <Spinner />
    }

  return (
    <>
    <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Home</p>
    </section>
    {/* <NoteForm /> */}

    <section className="content">
        {notes.length > 0 ? (
            <div className = "notes"> 
                {notes.map((note) => (
                    <NoteItem key={note._id} note={note} />
            ))}
            </div>
        ) :
        (<h2>No notes</h2>)
        }
    </section>
    </>
  )
}

export default Dashboard