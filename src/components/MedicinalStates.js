// Imports: Dependencies
import React, { Component } from 'react'

// Medicinal State Data
const states = [
  'AK',
  'AR',
  'AZ',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'HI',
  'IL',
  'LA',
  'MA',
  'MD',
  'ME',
  'MI',
  'MN',
  'MO',
  'MT',
  'ND',
  'NH',
  'NJ',
  'NM',
  'NV',
  'NY',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'UT',
  'VT',
  'WA',
  'WV',
]

// React Component: Medicinal States
class MedicinalStates extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  // Render
  render () {
    return (
      <div>
        <h1>States With Medicinal Marijuana</h1>
        <h2>{states.length} / 50 States</h2>
        {states.map(state => <p>{state}</p>)}

      </div>
    )
  }
}

// Exports
export default MedicinalStates
