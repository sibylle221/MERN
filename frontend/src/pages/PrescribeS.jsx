import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'
import { getMedications, reset } from '../features/medications/medicationSlice'
import MedicationForm from '../components/MedicationForm'
import { Text, Box, Table, Tr, Th, Td,  } from '@chakra-ui/react'
import LogoSmall from '../styling/LogoSmall'
import MedicationFormS from '../components/MedicationFormS'

function PrescribeS() {

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
    <Box 
    color = {'#5FA7CF'}
    fontWeight = {'bold'}
    >

        <LogoSmall/>
    <section className="heading">
        <h1>Prescribe</h1>
        <p>Prescribe New Medication</p>
    </section>
    <MedicationFormS />


    </Box>
    </>
  )
}

export default PrescribeS