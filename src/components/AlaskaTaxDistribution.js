// Imports: Dependencies
import React, { Component } from 'react'
import { Donut, Legend } from 'britecharts-react'

// Data: Alaska TaxDistribution (2017)
const AlaskaTaxDistribution2017= [
  {
    id: 1,
    name: 'General Fund',
    quantity: 879814,
  },
  {
    id: 2,
    name: 'Recidivism Reduction',
    quantity: 869683,
  },
]

const colors = ['#006600', '#4FBC43', '#98F2AA', '#B2B2B2', '#424242', '#111111', '#2E8B57', '#6B8E23']


// React Component: Alaska Tax Distribution
class AlaskaTaxDistribution extends Component {
  constructor (props) {
    super()

    this.state = {
      highlightedSlice: null,
    }

    this.getTotal = this.getTotal.bind(this)
    this.addCommasToNumber = this.addCommasToNumber.bind(this)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  // Get Total
  getTotal (array) {
    try {
      let total = 0

      for (let i = 0; i < array.length; i++) {
        total += array[i].quantity
      }
      return this.addCommasToNumber(total)
    }
    catch (error) {
      console.log(error)
    }
  }

  // Add Commas To Number
  addCommasToNumber (number) {
    try {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    catch (error) {
      console.log(error)
    }
  }

  // On Mouse Enter
  onMouseEnter (data) {
    this.setState({
      highlightedSlice: data.data.id,
    })
    console.log("Fuck", this.state.highlightedSlice)
  }

  // On Mouse Leave
  onMouseLeave () {
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
          <h2>Alaska (2017)</h2>
          <Donut
            data={AlaskaTaxDistribution2017}
            width={400}
            height={400}
            externalRadius={500 / 2.5}
            internalRadius={500 / 5}
            colorSchema={colors}
            isAnimated={false}
            // customMouseOver={this.onMouseEnter()}
            // customMouseOut={this.onMouseLeave()}
            highlightSliceById={this.state.highlightedSlice}

            />

          <p><b>Distribution Total:</b> ${this.getTotal(AlaskaTaxDistribution2017)}</p>

          <Legend
            data={AlaskaTaxDistribution2017}
            height={250}
            width={500}
            markerSize={20}
            colorSchema={colors}
            numberFormat="$"
            highlightEntryById={this.state.highlightedSlice}
          />
        </div>

      </div>
    )
  }
}

// Exports
export default AlaskaTaxDistribution
