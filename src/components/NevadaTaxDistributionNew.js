// Imports: Dependencies
import React, { Component } from 'react'
import { Donut, Legend } from 'britecharts-react'

const NevadaTaxDistribution2017= [
  {
    id: 1,
    name: 'Administration',
    quantity: 5000000,
  },
  {
    id: 2,
    name: 'Distributive School Account',
    quantity: 27000000,
  },
  {
    id: 3,
    name: 'Local Government',
    quantity: 5000000,
  },
  {
    id: 4,
    name: 'Rainy Day Fund',
    quantity: 42500000,
  },
]


//             Light Green Foam Green Light Grey   Grey      Black    Dark Green
// const colors = ['#4FBC43', '#98F2AA', '#B2B2B2', '#424242', '#111111', '#006600']
const colors2 = ['#006600', '#4FBC43', '#98F2AA', '#B2B2B2', '#424242', '#111111', '#2E8B57', '#6B8E23']


// React Component: Tax Distribution
class NevadaTaxDistributionNew extends Component {
  constructor (props) {
    super()

    this.state = {
      highlightedSlice: null,
    }


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

  handleMouseOver (data) {
    this.setState({
      highlightedSlice: data.data.id,
    })
  }

  handleMouseOut () {
    this.setState({
      highlightedSlice: 99999,
    })
  }

  render () {
    const legendMargin = {
      top: 10,
      bottom: 10,
      left: 10,
      right: 30,
    }

    return (
      <div className="distribution">
        <div className="year">
          <h2>Nevada (2017)</h2>
          <Donut
            data={NevadaTaxDistribution2017}
            width={400}
            height={400}
            externalRadius={500 / 2.5}
            internalRadius={500 / 5}
            colorSchema={colors2}
            />

          <p><b>Distribution Total:</b> ${this.getTotal(NevadaTaxDistribution2017)}</p>
          <p><b>Funds Remaining:</b> $</p>

          <Legend
            data={NevadaTaxDistribution2017}
            height={250}
            width={500}
            markerSize={20}
            colorSchema={colors2}
            numberFormat="$"
          />
        </div>

      </div>
    )
  }
}

// Exports
export default NevadaTaxDistributionNew
