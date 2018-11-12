// Imports: Dependencies
import React, { Component } from 'react'
import { Donut, Legend } from 'britecharts-react'

const ColoradoDistribution2016 = [
  {
    id: 1,
    name: 'Department of Agriculture',
    quantity:  2269240,
  },
  {
    id: 2,
    name: 'Department of Education',
    quantity:  8478160,
  },
  {
    id: 3,
    name: 'Governor\'s Office',
    quantity: 216944,
  },
  {
    id: 4,
    name: 'Department of Health Care Policy & Financing',
    quantity: 750000,
  },
  {
    id: 5,
    name: 'Higher Education',
    quantity: 900000,
  },
  {
    id: 6,
    name: 'Department of Human Services',
    quantity: 16634353,
  },
  {
    id: 7,
    name: 'Judicial Department',
    quantity:  1550000,
  },
  {
    id: 7,
    name: 'Labor & Employment',
    quantity:  500000,
  },
  {
    id: 8,
    name: 'Law',
    quantity: 1036766,
  },
  {
    id: 9,
    name: 'Department of Local Affairs',
    quantity:  1180695,
  },
  {
    id: 9,
    name: 'Public Health & Environment',
    quantity:  18098462,
  },
  {
    id: 10,
    name: 'Department of Public Safety',
    quantity: 722809,
  },
  {
    id: 11,
    name: 'Regulatory Agencies',
    quantity:  null,
  },
  {
    id: 12,
    name: 'Department of Transportation',
    quantity:  950000,
  },
  {
    id: 13,
    name: 'Department of Revenue',
    quantity:  7707249,
  },
  {
    id: 14,
    name: 'Other',
    quantity:  0,
  },
  {
    id: 15,
    name: 'General Fund',
    quantity:  26277661,
  },
]

const ColoradoDistribution2017 = [
  {
    id: 1,
    name: 'Department of Agriculture',
    quantity:  2209783,
  },
  {
    id: 2,
    name: 'Department of Education',
    quantity:  20372330,
  },
  {
    id: 3,
    name: 'Governor\'s Office',
    quantity: 1726824,
  },
  {
    id: 4,
    name: 'Department of Health Care Policy & Financing',
    quantity: 750000,
  },
  {
    id: 5,
    name: 'Higher Education',
    quantity: 1800000,
  },
  {
    id: 6,
    name: 'Department of Human Services',
    quantity: 31638208,
  },
  {
    id: 7,
    name: 'Judicial Department',
    quantity:  1571728,
  },
  {
    id: 7,
    name: 'Labor & Employment',
    quantity:  165296,
  },
  {
    id: 8,
    name: 'Law',
    quantity: 1036766,
  },
  {
    id: 9,
    name: 'Derpartment of Local Affairs',
    quantity:  16532573,
  },
  {
    id: 9,
    name: 'Public Health & Environment',
    quantity:  20730746,
  },
  {
    id: 10,
    name: 'Department of Public Safety',
    quantity: 735960,
  },
  {
    id: 11,
    name: 'Regulatory Agencies',
    quantity:  304225,
  },
  {
    id: 12,
    name: 'Department of Transportation',
    quantity:  950000,
  },
  {
    id: 13,
    name: 'Department of Revenue',
    quantity:  1591805,
  },
  {
    id: 14,
    name: 'Other',
    quantity:  15449006,
  },
  {
    id: 15,
    name: 'General Fund',
    quantity:  null,
  },
]


//             Light Green Foam Green Light Grey   Grey      Black    Dark Green
// const colors = ['#4FBC43', '#98F2AA', '#B2B2B2', '#424242', '#111111', '#006600']
const colors2 = ['#006600', '#4FBC43', '#98F2AA', '#B2B2B2', '#424242', '#111111', '#2E8B57', '#ADFF2F', '00FF7F', '7FFF00', '#90EE90', '#32CD32']


// React Component: Colorado Tax Distribution
class ColoradoTaxDistribution extends Component {
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
          <h2>Colorado (2016)</h2>
          <Donut
            data={ColoradoDistribution2016}
            width={400}
            height={400}
            externalRadius={500 / 2.5}
            internalRadius={500 / 5}
            colorSchema={colors2}
            />

          <p><b>Distribution Total:</b> ${this.getTotal(ColoradoDistribution2016)}</p>

          <Legend
            data={ColoradoDistribution2016}
            height={250}
            width={500}
            markerSize={20}
            colorSchema={colors2}
            numberFormat="$"
          />
        </div>

        <div className="year">
          <h2>Colorado (2017)</h2>
          <Donut
            data={ColoradoDistribution2017}
            width={400}
            height={400}
            externalRadius={500 / 2.5}
            internalRadius={500 / 5}
            colorSchema={colors2}
            />

          <p><b>Distribution Total:</b> ${this.getTotal(ColoradoDistribution2017)}</p>

          <Legend
            data={ColoradoDistribution2017}
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
export default ColoradoTaxDistribution
