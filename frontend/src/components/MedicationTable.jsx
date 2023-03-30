// Patient Prescriptions
import React, { Component } from 'react'

export class MedicationTable extends Component {
    
  render() {
    return (
      <div>
        {/* table returning all medications prescribed to patient */}
        <table id="medicationTable" class="table">
            <tr>
                <th>Drug</th>
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
      </div>
    )
  }
}

export default MedicationTable