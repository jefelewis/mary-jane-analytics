// Imports: Dependencies
import React, { Component } from 'react'

// Recreational State Data
const recreationalStates = [
  'Alaska (AK)',
  'California (CA)',
  'Colorado (CO)',
  'Massachusetts (MA)',
  'Maine (ME)',
  'Michigan (MI)',
  'Nevada (NV)',
  'Oregon (OR)',
  'Vermont (VT)',
  'Washington (WA)',
]

const medicinalStates = [
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
  'Washington (WA)',
  'West Virginia (WV)',
]

// React Component: Stats
class Stats extends Component {
  // Render
  render () {
    return (
      <div className="stats">
        <p><b>{(recreationalStates.length/50)*100}%</b> of the United States has legalized Recreational & Medicinal Marijuana</p>
        <p><b>{(medicinalStates.length/50)*100}%</b> of the United States has legalized Medicinal Marijuana</p>
      </div>
    )
  }
}

// Exports
export default Stats
