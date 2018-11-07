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

// React Component: Recreational States
class RecreationalStates extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  // Render
  render () {
    return (
      <div>
        <h1>States With Recreational Marijuana</h1>
        <h2>{states.length} / 50 States</h2>
        <h2>{(states.length/50)*100}% of America</h2>
        {states.map(state => <p>{state}</p>)}

      </div>
    )
  }
}

// Exports
export default RecreationalStates
