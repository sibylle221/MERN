import { useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import React from 'react'
import { createMedication } from '../features/medications/medicationSlice'
import {Box , Button, } from '@chakra-ui/react'

function MedicationFormS() {
    const [formData , setFormData] = useState({
        email: '',
        drug: '',
        dosage: '',
        doctor: '',
        instructions: ''

    })

    const { user, email, drug, dosage, doctor, instructions } = formData
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = e => {
        e.preventDefault()
       
       {
            const medicationData = {
                email,
                drug,
                dosage,
                doctor,
                instructions
            }
            dispatch(createMedication(medicationData))

        }
        navigate('/staffhome')
    } 

  return (
<>
  <Box>
    <section className = "form"> 
    <form onSubmit = {onSubmit}  >
    <div className = "form-group">
    <input
    type = "request"
    className ="form-control"
    id = "email"
    name = "email"
    placeholder = "Please enter Patient Email"
    value = {email}
    onChange = { onChange} />
    </div>
    <div className = "form-group">
    <input
    type = "drug"
    className ="form-control"
    id = "drug"
    name = "drug"
    placeholder = "Please enter medication"
    value = {drug}
    onChange = { onChange} />
    </div>
    <div className = "form-group">
    <input
    type = "dosage"
    className ="form-control"
    id = "dosage"
    name = "dosage"
    placeholder = "Please enter dosage"
    value = {dosage}
    onChange = { onChange} />
    </div>
    <div className = "form-group">
    <input
    type = "doctor"
    className ="form-control"
    id = "doctor"
    name = "doctor"
    placeholder = "Please enter prescribing doctor"
    value = {doctor}
    onChange = { onChange} />
    </div>
    <div className = "form-group">
    <input
    type = "instructions"
    className ="form-control"
    id = "instructions"
    name = "instructions"
    placeholder = "Please enter instructions"
    value = {instructions}
    onChange = { onChange} />
    </div>
    <div className = "form-group">

        <Button
        type = "submit"
        color = {'#5FA7CF'}
        bg={'#D8F3FF'}
        >
            Prescribe Medication
    </Button>
    </div>
    </form>
    </section>
    </Box>
</>
    )
}


export default MedicationFormS