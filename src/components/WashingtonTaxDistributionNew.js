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
    quantity: 96600000,
  },
  {
    id: 2,
    name: 'Basic Health',
    quantity: 145700000,
  },
  {
    id: 3,
    name: 'Cities & Counties',
    quantity: 55000000,
  },
  {
    id: 4,
    name: 'Education, Prevention',
    quantity: 44100000,
  },
  {
    id: 5,
    name: 'Research',
    quantity: 2700000,
  },
  {
    id: 6,
    name: 'Other',
    quantity: 17400000,
  },
]

const colors = ['#4FBC43', '#98F2AA', '#B2B2B2', '#424242', '#111111', '#006600']

// React Component: Tax Distribution
class WashingtonTaxDistributionNew extends Component {
  constructor (props) {
    super()

  }

  getTotal (array) {
    let total = 0

    for (let i = 0; i < array.length; i++) {
      total += array[i].quantity
    }
    return total
  }

  render () {
    return (
      <div className="distribution">
        <div>
          <h1>Marijuana Tax Revenue Distribution</h1>
        </div>

        <div className="year">
          <h2>Washington (2016)</h2>
          <Donut
            data={WashingtonDistribution2016}
            width={400}
            height={400}
            externalRadius={500 / 2.5}
            internalRadius={500 / 5}
            colorSchema={colors}
            />
          <h3>Total: {() => this.getTotal(WashingtonDistribution2016)}</h3>

          <Legend
            data={WashingtonDistribution2016}
            height={250}
            width={500}
            markerSize={20}
            colorSchema={colors}
            numberFormat="$"
          />
        </div>

        <div className="year">
          <h2>Washington (2017)</h2>
          <Donut
            data={WashingtonDistribution2017}
            width={400}
            height={400}
            externalRadius={500 / 2.5}
            internalRadius={500 / 5}
            colorSchema={colors}
            />

          <h3>Total: {() => this.getTotal(WashingtonDistribution2017)}</h3>
          <Legend
            data={WashingtonDistribution2017}
            height={250}
            width={500}
            markerSize={20}
            colorSchema={colors}
            numberFormat="$"
          />
        </div>

      </div>
    )
  }
}

// Exports
export default WashingtonTaxDistributionNew
