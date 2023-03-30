import React from 'react'
import {useDispatch} from 'react-redux'

function MedicationItem( {medication}) {
    const dispatch = useDispatch()

  return (
    <div className= "medication">

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
        </div>
  )
}

export default MedicationItem