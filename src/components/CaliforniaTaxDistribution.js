// Imports: Dependencies
import React, { Component } from 'react'

// React Component: Tax Distribution
class CaliforniaTaxDistribution extends Component {
  constructor () {
    super()

    this.state = {
    }
  }

  render () {
    return (
      <div>
        <br></br>
        <h2>Here's How California's Marijuana Tax Revenue Is Allocated:</h2>
        <h3>2018 (Total: $)
        </h3>
        <ul>
          <li><b>Tax Administration & Collection: </b> $</li>
          <li><b>Department of Consumer Affairs: </b> $</li>
          <li><b>California Public Universities:</b> $10,000,000</li>
          <li><b>California Highway Patrol:</b> $3,000,000</li>
          <li><b>Business & Economic Development:</b> $10,000,000</li>
          <li><b>University of California San Diego Center for Medicinal Cannabis Research:</b> $2,000,000</li>
          <li><b>Youth Education, Prevention, Early Intervention, & Treatment:</b> $</li>
          <li><b>Environment Restoration & Protection:</b> $</li>
          <li><b>State & Local Government Law Enforcement:</b> $</li>
        </ul>
      </div>
    )
  }
}

// Exports
export default CaliforniaTaxDistribution
