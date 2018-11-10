// Imports: Dependencies
import React, { Component } from 'react'

// Recreational State Data
const states = [
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

// React Component: Stats
class Stats extends Component {
  // Render
  render () {
    return (
      <div className="stats">
        <p><b>{(states.length/50)*100}%</b> of America has legalized Recreational & Medicinal Marijuana</p>
        <p><b>66%</b> of America has legalized Medicinal Marijuana</p>
      </div>
    )
  }
}

// Exports
export default Stats
