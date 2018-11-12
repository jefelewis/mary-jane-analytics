// Imports: Dependencies
import React, { Component } from 'react'
import { Donut, Legend } from 'britecharts-react'

const OregonDistribution2016 = [
  {
    id: 1,
    name: 'Cities & Counties',
    quantity: null,
  },
  {
    id: 2,
    name: 'Department of Revenue Administrative Costs',
    quantity: null,
  },
  {
    id: 3,
    name: 'Mental Health, Alcoholism, & Drug Services',
    quantity: null,
  },
  {
    id: 4,
    name: 'Oregon Health Authority Drug Treatment & Prevention',
    quantity: null,
  },
  {
    id: 5,
    name: 'Oregon State Police',
    quantity: null,
  },
  {
    id: 6,
    name: 'State School Fund',
    quantity: null,
  },
]

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

// React Component: Oregon Tax Distribution
class OregonTaxDistribution extends Component {
  constructor (props) {
    super()

    this.getTotal = this.getTotal.bind(this)
    this.addCommasToNumber = this.addCommasToNumber.bind(this)
  }

  getTotal (array) {
    let total = 0

    for (let i = 0; i < array.length; i++) {
      total += array[i].quantity
    }
    return this.addCommasToNumber(total)
  }

  addCommasToNumber (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  render () {
    return (
      <div className="distribution">
        <div className="year">
          <h2>Oregon (2016)</h2>
          <Donut
            data={OregonDistribution2016}
            width={400}
            height={400}
            externalRadius={500 / 2.5}
            internalRadius={500 / 5}
            colorSchema={colors}
          />
          <p><b>Distribution Total:</b> ${this.getTotal(OregonDistribution2016)}</p>
          <p><b>Funds Remaining:</b> $</p>

          <Legend
            data={OregonDistribution2016}
            height={250}
            width={500}
            markerSize={20}
            colorSchema={colors}
            numberFormat="$"
          />
        </div>

        <div className="year">
          <h2>Oregon (2017)</h2>
          <Donut
            data={OregonDistribution2017}
            width={400}
            height={400}
            externalRadius={500 / 2.5}
            internalRadius={500 / 5}
            colorSchema={colors}
          />
          <p><b>Distribution Total:</b> ${this.getTotal(OregonDistribution2017)}</p>
          <p><b>Funds Remaining:</b> $</p>

          <Legend
            data={OregonDistribution2017}
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
export default OregonTaxDistribution
