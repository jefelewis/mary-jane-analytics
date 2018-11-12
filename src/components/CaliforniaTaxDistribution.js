// Imports: Dependencies
import React, { Component } from 'react'
import { Donut, Legend, withResponsiveness } from 'britecharts-react'

// Britecharts
// const ResponsiveDonut = withResponsiveness(Donut)
// const ResponsiveLegend = withResponsiveness(Legend)


const CaliforniaDistribution2018 = [
  {
    id: 1,
    name: 'Tax Administration & Collection',
    quantity: null,
  },
  {
    id: 2,
    name: 'Department of Consumer Affairs',
    quantity: null,
  },
  {
    id: 3,
    name: 'California Public Universities',
    quantity: 10000000,
  },
  {
    id: 4,
    name: 'California Highway Patrol',
    quantity: 3000000,
  },
  {
    id: 5,
    name: 'Business & Economic Development',
    quantity: 10000000,
  },
  {
    id: 6,
    name: 'Medicinal Cannabis Research',
    quantity: 2000000,
  },
  {
    id: 7,
    name: 'Youth Education, Prevention, Early Intervention, & Treatment',
    quantity: null,
  },
  {
    id: 8,
    name: 'Environment Restoration & Protection',
    quantity: null,
  },
  {
    id: 9,
    name: 'State & Local Government Law Enforcement',
    quantity: null,
  },
]

const colors = ['#4FBC43', '#98F2AA', '#B2B2B2', '#424242', '#111111', '#006600']

// React Component: Tax Distribution
class CaliforniaTaxDistribution extends Component {
  constructor () {
    super()

    this.state = {
    }
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
      <div>
        <h1>Marijuana Tax Revenue Distribution</h1>

        <div className="distribution">
          <div className="year">
            <h2>California (2018)</h2>
            <Donut
              data={CaliforniaDistribution2018}
              width={400}
              height={400}
              externalRadius={500 / 2.5}
              internalRadius={500 / 5}
              colorSchema={colors}
            />
            <h3>Total: {() => this.getTotal(CaliforniaDistribution2018)}</h3>

            <Legend
              data={CaliforniaDistribution2018}
              height={250}
              width={500}
              markerSize={20}
              colorSchema={colors}
              numberFormat="$"
            />

          </div>
        </div>
      </div>
    )
  }
}

// Exports
export default CaliforniaTaxDistribution
