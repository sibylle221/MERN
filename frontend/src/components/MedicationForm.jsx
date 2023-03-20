// import React from 'react'
// import { useState} from 'react'
// import {useDispatch} from 'react-redux'
// import { createMedication } from '../features/medications/medicationSlice'


// function MedicationForm() {

//     const onSubmit = e => {
//         e.preventDefault()
//         dispatch(createMedication({user, drug, dosage, doctor, instructions}))
//         setUser('')
//         setDrug('')
//         setDosage('')
//         setDoctor('')
//         setInstructions('')

//     }
    
//     const [user , setUser] = useState('')
//     const [drug , setDrug] = useState('')
//     const [dosage , setDosage] = useState('')
//     const [doctor , setDoctor] = useState('')
//     const [instructions , setInstructions] = useState('')



//     const dispatch = useDispatch()

//   return <section className='form'>
//         <form onSubmit={onSubmit}>
//             <div className='form-group'>
//                 <label htmlFor='user'>Patient:</label>
//                 <input type='text' name='user' value={user} on
//                     onChange = {(e) => setUser (e.target.value)} />
//                     <label htmlFor='drug'>Drug:</label>
//                 <input type='text' name='drug' value={drug} on
//                     onChange = {(e) => setDrug (e.target.value)} />
//                     <label htmlFor='text'>Dosage:</label>
//                 <input type='text' name='dosage' value={dosage} on
//                     onChange = {(e) => setDosage (e.target.value)} />
//                     <label htmlFor='text'>Prescribed by:</label>
//                 <input type='text' name='doctor' value={doctor} on
//                     onChange = {(e) => setDoctor (e.target.value)} />
//                     <label htmlFor='text'>Instructions:</label>
//                 <input type='text' name='instructions' value={instructions} on
//                     onChange = {(e) => setInstructions (e.target.value)} />

                
//             </div>
//             <div className="form-group">
//                 <button type="submit" className="btn btn-block">Add Prescription</button>
//             </div>
//         </form>
        
//          </section>

  
// }

// export default MedicationForm

// import React from 'react'
import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {FaUser} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import {toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import React from 'react'
// import {useDispatch} from 'react-redux'
import { createMedication } from '../features/medications/medicationSlice'
import { reset } from '../features/auth/authSlice'




function MedicationForm() {
    const [formData , setFormData] = useState({
        user: '',
        drug: '',
        dosage: '',
        doctor: '',
        instructions: ''

    })

    const { name, drug, dosage, doctor, instructions } = formData

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
                name,
                drug,
                dosage,
                doctor,
                instructions
            }
            dispatch(createMedication(medicationData))

        }
    } 



  return (
<>
  


    <section className = "form"> 
    <form onSubmit = {onSubmit}  >
    <div className = "form-group">
    <input
    type = "request"
    className ="form-control"
    id = "name"
    name = "name"
    placeholder = "Please enter Patient Name"
    value = {name}
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
    <button type = "submit" className = "btn btn-block">Prescribe Medication</button>
    </div>
    </form>
    </section>

</>
    )
}


export default MedicationForm