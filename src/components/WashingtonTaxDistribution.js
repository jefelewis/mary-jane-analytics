// Imports: Dependencies
import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

// ChartJS: Washington
const washingtonDistribution = {
  labels: [
    '2016', '2017',
  ],
  datasets: [
    {
      label: 'General Fund',
      data: [
        51048900, 96600000,
      ],
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      stack: '1',
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
    },
    {
      label: 'Basic Health',
      data: [
        93750000, 145700000,
      ],
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      stack: '2',
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
    },
    {
      label: 'Cities & Counties',
      data: [
        6000000, 55000000,
      ],
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      stack: '3',
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
    },
    {
      label: 'Education, Prevention',
      data: [
        19482387, 44100000,
      ],
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      stack: '4',
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
    },
    {
      label: 'Research',
      data: [
        1045000, 2700000,
      ],
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      stack: '5',
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
    },
    {
      label: 'Other',
      data: [
        8121424, 17400000,
      ],
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      stack: '6',
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
    },
  ],
}


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
        <Bar
          data={washingtonDistribution}
          options={{
            maintainAspectRatio: true,
            scaleBeginAtZero: true,
            responsive: true,
            scales: {
              scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true,
                }]
              }
            }
          }}
        />


        <h2>Washington</h2>
        <h3>2017</h3>
        <ul>
          <li><b>General Fund:</b> $96.6 Million Dollars</li>
          <li><b>Basic Health :</b> $145.7 Million Dollars</li>
          <li><b>Cities & Counties:</b> $55.5 Million Dollars</li>
          <li><b>Education, Prevention:</b> $44.1 Million Dollars</li>
          <li><b>Research:</b> $2.7 Million Dollars</li>
          <li><b>Other:</b> $17.4 Million Dollars</li>
        </ul>
      </div>
    )
  }
}

// Exports
export default TaxDistribution
