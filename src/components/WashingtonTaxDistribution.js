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
                }],
              },
            },
          }}
        />

        <h2>Here's How Washington's Marijuana Tax Revenue Is Allocated:</h2>
        <h3>2014</h3>
        <ul>
          <li><b>General Fund:</b> $</li>
          <li><b>Basic Health:</b> $</li>
          <li><b>Cities & Counties:</b> $</li>
          <li><b>Education, Prevention:</b> $</li>
          <li><b>Research:</b> $</li>
          <li><b>Other:</b> $</li>
        </ul>

        <h3>2015</h3>
        <ul>
          <li><b>General Fund:</b> $</li>
          <li><b>Basic Health :</b> $</li>
          <li><b>Cities & Counties:</b> $</li>
          <li><b>Education, Prevention:</b> $</li>
          <li><b>Research:</b> $</li>
          <li><b>Other:</b> $</li>
        </ul>

        <h3>2016</h3>
        <ul>
          <li><b>General Fund:</b> $51,048,900</li>
          <li><b>Basic Health :</b> $93,750,000</li>
          <li><b>Cities & Counties:</b> $6,000,000</li>
          <li><b>Education, Prevention:</b> $19,482,387</li>
          <li><b>Research:</b> $1,045,000</li>
          <li><b>Other:</b> $8,121,424</li>
        </ul>

        <h3>2017 (Total: $340,826,924?)</h3>
        <ul>
          <li><b>General Fund:</b> $96.6 Million</li>
          <li><b>Basic Health :</b> $145.7 Million</li>
          <li><b>Cities & Counties:</b> $55.5 Million</li>
          <li><b>Education, Prevention:</b> $44.1 Million</li>
          <li><b>Research:</b> $2.7 Million</li>
          <li><b>Other:</b> $17.4 Million</li>
        </ul>


      </div>
    )
  }
}

// Exports
export default TaxDistribution
