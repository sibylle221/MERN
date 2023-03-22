import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'
import { getMedications, reset } from '../features/medications/medicationSlice'
import MedicationForm from '../components/MedicationForm'

function Prescribe() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const { medications, isLoading, isError, message } = useSelector((state) => state.medications)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(!user) {
            navigate('/login')
        }

        dispatch(getMedications())

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
        <h1>Prescribe</h1>
        <p>Prescribe New Medication</p>
    </section>
    <MedicationForm />



    </>
  )
}

export default Prescribe