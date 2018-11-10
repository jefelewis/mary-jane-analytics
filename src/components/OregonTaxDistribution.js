// Imports: Dependencies
import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'

const taxDistributionData = {
  labels: ['Cities & Counties', 'Department of Revenue Administrative Costs', 'Mental Health, Alcoholism, & Drug Services', 'Oregon Health Authority Drug Treatment & Prevention', 'Oregon State Police', 'State School Fund'],
  datasets: [
    {
      data: [21334247.17, 6519686.21, 21334247.17, 5333561.80, 16000685.39, 42668494.35],
      backgroundColor: [
        '#4FBC43',
        '#98F2AA',
        '#B2B2B2',
        '#424242',
        '#111111',
        '#006600',
      ],
    },
  ],
}


// React Component: Tax Distribution
class OregonTaxDistribution extends Component {
  constructor () {
    super()

    this.state = {
    }
  }

  render () {
    return (
      <div>
        <Doughnut
          data={taxDistributionData}
          options={{
            maintainAspectRatio: true,
            scaleBeginAtZero: true,
            responsive: true,
          }}
        />

        <br></br>
        <h2>Here's How Oregon's Marijuana Tax Revenue Is Allocated:</h2>
        <h4>Disbursement of Funds Began: October 2017</h4>

        <h3>2017</h3>
        <ul>
          <li><b>Cities & Counties:</b> $21,334,247.17</li>
          <li><b>Department of Revenue Administrative Costs:</b> $6,519,686.21</li>
          <li><b>Mental Health, Alcoholism, & Drug Services:</b> $21,334,247.17</li>
          <li><b>Oregon Health Authority Drug Treatment & Prevention:</b> $5,333,561.80</li>
          <li><b>Oregon State Police:</b> $16,000,685.39</li>
          <li><b>State School Fund:</b> $42,668,494.35</li>
        </ul>

      </div>
    )
  }
}

// Exports
export default OregonTaxDistribution
