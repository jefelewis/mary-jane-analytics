// Imports: Dependencies
import React from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'

// ChartJS: Colorado Sales Data
const coloradoSalesdata = {
  labels: [2014, 2015, 2016, 2017],
  datasets: [
    {
      label: 'Alaska',
      data: [null, null, null, null],
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
    {
      label: 'Colorado',
      data: [683523739, 995591255, 1307203473, 1507702219],
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
  ],
}

// React Component: Colorado Sales Data
const ColoradoSalesData = () => (
  <div>
    <h1>Marijuana Sales</h1>
    <Line
      data={coloradoSalesdata}
      options={{
        maintainAspectRatio: false,
        scaleBeginAtZero: true,
        scales: {
          yAxes: [{
              ticks: {
                  // Include a dollar sign in the ticks
                  callback(value, index, values) {
                      return '$' + value;
                  },
              },
          }],
        },
      }}
    />

    <h1>Sales</h1>
    <h2>Total: </h2>
  </div>
)

// Exports
export default ColoradoSalesData
