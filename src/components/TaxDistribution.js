// Imports: Dependencies
import React, { Component } from 'react'

// React Component: Tax Distribution
class TaxDistribution extends Component {
  constructor () {
    super()

    this.state = {
    }
  }


  render () {
    return (
      <div>
        <br></br>
        <h1>How Are The Taxes Spent?</h1>

        <h2>Colorado</h2>
        <h3>2014 - 2015</h3>

        <h3>2015 - 2016</h3>
        <ul>
          <li><b>$40 Million</b> for <b>Public School Capital Construction Assistance Fund</b>, which is capped at $40 Million. Any excess funds are sent to the Public School Fund (See next item)</li>
          <li><b>$2.5 Million</b> for <b>Public School Fund</b></li>
        </ul>

        <h3>2016 - 2017</h3>
        <ul>
          <li><b>$40 Million</b> for <b>Public School Capital Construction Assistance Fund</b>, which is capped at $40 Million. Any excess funds are sent to the Public School Fund (See next item)</li>
          <li><b>$31.6 Million</b> for <b>Public School Fund</b></li>
        </ul>

      </div>
    )
  }
}

// Exports
export default TaxDistribution
