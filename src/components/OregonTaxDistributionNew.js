// Imports: Dependencies
import React, { Component } from 'react'
import { Donut, Legend } from 'britecharts-react'

const OregonDistribution2017 = [
  {
    id: 1,
    name: 'Cities & Counties',
    quantity: 21334247.17,
    color: '#4FBC43',
  },
  {
    id: 2,
    name: 'Department of Revenue Administrative Costs',
    quantity: 6519686.21,
    color: '#98F2AA',
  },
  {
    id: 3,
    name: 'Mental Health, Alcoholism, & Drug Services',
    quantity: 21334247.17,
    color: '#B2B2B2',
  },
  {
    id: 4,
    name: 'Oregon Health Authority Drug Treatment & Prevention',
    quantity: 5333561.80,
    color: '#424242',
  },
  {
    id: 5,
    name: 'Oregon State Police',
    quantity: 16000685.39,
    color: '#111111',
  },
  {
    id: 6,
    name: 'State School Fund',
    quantity: 42668494.35,
    color: '#006600',
  },
]

// React Component: Tax Distribution
class OregonTaxDistributionNew extends Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div>
        <h1>2017</h1>
        <Donut
          data={OregonDistribution2017}
          width={400}
          height={400}
          externalRadius={500 / 2.5}
          internalRadius={500 / 5}
        />

        <Legend
          data={OregonDistribution2017}
          height={250}
          width={400}
          markerSize={20}
        />
      </div>
    )
  }
}

// Exports
export default OregonTaxDistributionNew
