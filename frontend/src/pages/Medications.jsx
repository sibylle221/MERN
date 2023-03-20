import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'
import { getMedications, reset } from '../features/medications/medicationSlice'
import MedicationItem from '../components/MedicationItem'
import MedicationForm from '../components/MedicationForm'

function Medications() {

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
        <h1>Medications</h1>
        <p>Prescribed Medications</p>
    </section>

    <section className="content">
        {medications.length > 0 ? (
                <table className="medications">
                <thead>
                  <tr>
                    <th>Medication</th>
                    <th>Dosage</th>
                    <th>Prescribed by</th>
                    <th>Instructions</th>
                  </tr>
                </thead>
                <tbody>
                  {medications.map((medication) => (
                    <tr key={medication._id}>
                      <td>{medication.drug}</td>
                      <td>{medication.dosage}</td>
                      <td>{medication.doctor}</td>
                      <td>{medication.instructions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            
        ) :
        (<h2>No medications</h2>)
        }
    </section>
    </>
  )
}

export default Medications