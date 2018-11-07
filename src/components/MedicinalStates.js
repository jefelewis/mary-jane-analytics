// Imports: Dependencies
import React, { Component } from 'react'

// Medicinal State Data
const states = [
  'Alaska (AK)',
  'Arkansas (AR)',
  'Arizona (AZ)',
  'California (CA)',
  'Colorado (CO)',
  'Connecticut (CT)',
  'Delaware (DE)',
  'Florida (FL)',
  'Hawaii (HI)',
  'Illinois (IL)',
  'Louisiana (LA)',
  'Massachusetts (MA)',
  'Maryland (MD)',
  'Maine (ME)',
  'Michigan (MI)',
  'Minnesota (MN)',
  'Missouri (MO)',
  'Montana (MT)',
  'North Dakota (ND)',
  'New Hampshire (NH)',
  'New Jersey (NJ)',
  'New Mexico (NM)',
  'Nevada (NV)',
  'New York (NY)',
  'Ohio (OH)',
  'Oklahoma (OK)',
  'Oregon (OR)',
  'Pennsylvania (PA)',
  'Rhode Island (RI)',
  'Utah (UT)',
  'Vermont (VT)',
  '(WA)',
  'West Virginia (WV)',
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
        <ol>
          {states.map(state => <li key={state.name}>{state}</li>)}
        </ol>

      </div>
    )
  }
}

// Exports
export default MedicinalStates
