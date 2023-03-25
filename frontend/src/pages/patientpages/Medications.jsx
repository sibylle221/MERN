import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'
import { getMedications, reset } from '../../features/medications/medicationSlice'
import MedicationItem from '../../components/MedicationItem'
import MedicationForm from '../../components/MedicationForm'
import { Text, Box, Table, Tr, Th, Td,  } from '@chakra-ui/react'
import LogoSmall from '../../styling/LogoSmall'

function MedicationsS() {

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
         borderRadius = {'md'}
        margin = {'auto'}
       textAlign = {'center'}
       justifyContent = {'center'}
        alignItems = {'center'}



    >
            <LogoSmall/>
    <section className="heading">
        <h1>Medications</h1>
        <p>Prescribed Medications</p>
    </section>

 
        {medications.length > 0 ? (
                <Table className="medications"
                color = {'black'}
                fontWeight = {'normal'}
                >
                <thead>
                  <Tr
                  bg = {'#B9E9FF'}
                  >
                    <Th>Medication</Th>
                    <Th>Dosage</Th>
                    <Th>Prescribed by</Th>
                    <Th>Instructions</Th>
                  </Tr>
                </thead>
                <tbody>
                  {medications.map((medication) => (
                    <Tr key={medication._id}>
                      <Td>{medication.drug}</Td>
                      <Td>{medication.dosage}</Td>
                      <Td>{medication.doctor}</Td>
                      <Td>{medication.instructions}</Td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
            
        ) :
        (<h2>No medications</h2>)
        }

    </Box>
    </>
  )
}

export default MedicationsS