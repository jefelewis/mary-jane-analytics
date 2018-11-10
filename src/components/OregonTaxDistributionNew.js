// Imports: Dependencies
import React, { Component } from 'react'
import { Donut, Legend } from 'britecharts-react'

const OregonDistribution2017 = [
  {
    id: 1,
    name: 'Cities & Counties',
    quantity: 21334247.17,
  },
  {
    id: 2,
    name: 'Department of Revenue Administrative Costs',
    quantity: 6519686.21,
  },
  {
    id: 3,
    name: 'Mental Health, Alcoholism, & Drug Services',
    quantity: 21334247.17,
  },
  {
    id: 4,
    name: 'Oregon Health Authority Drug Treatment & Prevention',
    quantity: 5333561.80,
  },
  {
    id: 5,
    name: 'Oregon State Police',
    quantity: 16000685.39,
  },
  {
    id: 6,
    name: 'State School Fund',
    quantity: 42668494.35,
  },
]

const colors = ['#4FBC43', '#98F2AA', '#B2B2B2', '#424242', '#111111', '#006600']

// React Component: Tax Distribution
class OregonTaxDistributionNew extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Oregon (2017)</h1>
        <Donut
          data={OregonDistribution2017}
          width={400}
          height={400}
          externalRadius={500 / 2.5}
          internalRadius={500 / 5}
          colorSchema={colors}
        />

        <Legend
          data={OregonDistribution2017}
          height={250}
          width={400}
          markerSize={20}
          colorSchema={colors}
          numberFormat="s"
        />
      </div>
    )
  }
}

// Exports
export default OregonTaxDistributionNew
