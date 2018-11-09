// Imports: Dependencies
import React, { Component } from 'react'

// React Component: Tax Distribution
class NevadaTaxDistribution extends Component {
  constructor () {
    super()

    this.state = {
    }
  }

  render () {
    return (
      <div>
        <br></br>
        <h2>Here's How Nevada's Marijuana Tax Revenue Is Allocated:</h2>

        <h3>2018 (Total: $)
        </h3>
        <ul>
          <li><b>Administration:</b> $</li>
          <li><b>Distributive School Account:</b> $</li>
          <li><b>Local Government:</b> $</li>
          <li><b>Rainy Day Fund:</b> $</li>
        </ul>

        <h3>2017 (Total: $)</h3>
        <ul>
          <li><b>Administration:</b> $</li>
          <li><b>Distributive School Account:</b> $</li>
          <li><b>Local Government:</b> $</li>
          <li><b>Rainy Day Fund:</b> $</li>

        </ul>
      </div>
    )
  }
}

// Exports
export default NevadaTaxDistribution
