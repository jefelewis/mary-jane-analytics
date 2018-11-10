// Imports: Dependencies
import React, { Component } from 'react'
import { Donut, Legend } from 'britecharts-react'

const WashingtonDistribution2016 = [
  {
    id: 1,
    name: 'General Fund',
    quantity: 51048900,
  },
  {
    id: 2,
    name: 'Basic Health',
    quantity: 93750000,
  },
  {
    id: 3,
    name: 'Cities & Counties',
    quantity: 6000000,
  },
  {
    id: 4,
    name: 'Education, Prevention',
    quantity: 19482387,
  },
  {
    id: 5,
    name: 'Research',
    quantity: 1045000,
  },
  {
    id: 6,
    name: 'Other',
    quantity: 8121424,
  },
]

const WashingtonDistribution2017 = [
  {
    id: 1,
    name: 'General Fund',
    quantity: null,
  },
  {
    id: 2,
    name: 'Basic Health',
    quantity: null,
  },
  {
    id: 3,
    name: 'Cities & Counties',
    quantity: null,
  },
  {
    id: 4,
    name: 'Education, Prevention',
    quantity: null,
  },
  {
    id: 5,
    name: 'Research',
    quantity: null,
  },
  {
    id: 6,
    name: 'Other',
    quantity: null,
  },
]

const colors = ['#4FBC43', '#98F2AA', '#B2B2B2', '#424242', '#111111', '#006600']

// React Component: Tax Distribution
class WashingtonTaxDistributionNew extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Washington (2016)</h1>
        <Donut
          data={WashingtonDistribution2016}
          width={400}
          height={400}
          externalRadius={500 / 2.5}
          internalRadius={500 / 5}
          colorSchema={colors}
        />

        <Legend
          data={WashingtonDistribution2016}
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
export default WashingtonTaxDistributionNew
