import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteMedication } from '../features/medications/medicationSlice'

function MedicationItem( {medication}) {
    const dispatch = useDispatch()

  return (
    <div className= "medication">
        {/* <div>
            {new Date(medication.createdAt).toLocaleDateString('en-GB')}
            <br></br>
            {new Date(medication.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div> */}
        {/* <p>Drug:</p>
           
            <h3>
            {medication.drug}
            </h3>
        <p>
            Dosage:
        </p>
        <h3>{medication.dosage}</h3> */}
        {/* table displaying information on the patient's prescriptions */}
        <table>
            <tr>
                <th>Medication</th>
                <th>Dosage</th>
                <th>Prescribed by</th>
                <th>Instructions</th>
            </tr>
            <tr>
                <td>{medication.drug}</td>
                <td>{medication.dosage}</td>
                <td>{medication.doctor}</td>
                <td>{medication.instructions}</td>
            </tr>
        </table>
        <br></br>
        
        {/* <button onClick = { () => dispatch(deleteMedication(medication._id))}className="delete">
            Delete
            </button> */}
        </div>
  )
}

export default MedicationItem