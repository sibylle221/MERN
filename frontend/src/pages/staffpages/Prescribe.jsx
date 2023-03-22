import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'
import { getMedications, reset } from '../../features/medications/medicationSlice'
import MedicationForm from '../../components/MedicationForm'
import { Text, Box, Table, Tr, Th, Td,  } from '@chakra-ui/react'
import LogoSmall from '../../styling/LogoSmall'
import MedicationFormS from '../../components/MedicationForm'

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
      {/* only return if user is admin else display error*/}#	
      {user && user.role === 'staff' && (	
        <div className="container">	
            <div className="row">	
                <div className="col-md-6 offset-md-3">	
                    <h1 className="text-center">Prescribe Medication</h1>	
                    <MedicationFormS />	
                </div>	
            </div>	
        </div>	
    )}	
    {!user && (	
        <div className="container">	
            <div className="row">	
                <div className="col-md-6 offset-md-3">	
                    <h1 className="text-center">Prescribe Medication</h1>	
                    <p className="text-center">You need to login to access this page</p>	
                </div>	
            </div>	
        </div>	
    )}	
    {user && user.role !== 'staff' && (	
        <div className="container">	
            <div className="row">	
                <div className="col-md-6 offset-md-3">	
                    <h1 className="text-center">Prescribe Medication</h1>	
                    <p className="text-center">You are not authorized to access this page</p>	
                </div>	
            </div>	
        </div>	
    )}	

    <Box 
    color = {'#5FA7CF'}
    fontWeight = {'bold'}
    >

        <LogoSmall/>
    <section className="heading">
        <h1>Prescribe</h1>
        <p>Prescribe New Medication</p>
    </section>
    {/* <MedicationFormS /> */}


    </Box>
    </>
  )
}

export default PrescribeS