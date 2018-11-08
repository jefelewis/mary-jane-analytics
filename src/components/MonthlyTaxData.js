// Imports: Dependencies
import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { renderStatic } from 'react-helmet';
import { runInThisContext } from 'vm';

// ChartJS: Colorado Tax Data
const monthlyTaxdata = {
  labels: [
    'February (2014)', 'March (2014)', 'April (2014)', 'June (2014)', 'July (2014)', 'August (2014)', 'September (2014)', 'October (2014)', 'November (2014)', 'December (2014)',
    'January (2015)', 'February (2015)', 'March (2015)', 'April (2015)', 'June (2015)', 'July (2015)', 'August (2015)', 'September (2015)', 'October (2015)', 'November (2015)', 'December (2015)',
    'January (2016)', 'February (2016)', 'March (2016)', 'April (2016)', 'June (2016)', 'July (2016)', 'August (2016)', 'September (2016)', 'October (2016)', 'November (2016)', 'December (2016)',
    'January (2017)', 'February (2017)', 'March (2017)', 'April (2017)', 'June (2017)', 'July (2017)', 'August (2017)', 'September (2017)', 'October (2017)', 'November (2017)', 'December (2017)',
    'January (2018)', 'February (2018)', 'March (2018)', 'April (2018)', 'June (2018)', 'July (2018)', 'August (2018)', 'September (2018)', 'October (2018)', 'November (2018)', 'December (2018)'

  ],
  datasets: [
    {
      label: 'Colorado (Recreational Legalized: 2014)',
      data: [
        3519756, 4092575, 4980992, 5273355, 5715707, 6522085, 7407450, 7741167, 7232870, 7642800, 7465568,
        8558141, 8802295, 9099395, 9979643, 10617311, 11326452, 10856584, 12811437, 13181758, 11656736, 11290012,
        12231410, 13247434, 12466617, 14195923, 13097298, 17183162, 14482648, 16823849, 17574149, 19145992, 19266922, 18425864,
        17694953, 18164787, 17723858, 17550692, 22867587, 18563939, 19662464, 20437751, 23775043, 23235507, 23098408, 21076993,
        21211445, 21681438, 21134864, 20871820, 22947141, 22367707, 21928692, 22963778, 23044818, 2377039
      ],
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

// Helper Functions
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// React Component: Monthly Tax Data
class MonthlyTaxData extends Component {
  constructor () {
    super()

    this.state = {
      initalMonth: monthlyTaxdata.labels[0],
      completeTotal: null,
    }
  }

  componentDidMount() {
    let total = 0;

    for (let i = 0; i < monthlyTaxdata.datasets[0].data.length; i++) {
      total += monthlyTaxdata.datasets[0].data[i]
    }

    this.setState({
      completeTotal: numberWithCommas(total)
    })
  }

  render () {
    return (
      <div>
        <h1>Marijuana Tax Revenue (Medicinal & Recreational)</h1>
        <Line
          data={monthlyTaxdata}
          height={550}
          width={500}
          options={{
            maintainAspectRatio: false,
            scaleBeginAtZero: true,
            responsive: true,
            scales: {
              xAxes: [{
                ticks: {
                  min: 0,
                  beginAtZero: true,
                  stepSize: 10000,
                },
              }],
              yAxes: [{
                  ticks: {
                      // Include a dollar sign in the ticks
                      callback (value, index, values) {
                          return `$${  value}`;
                      },
                  },
              }],
            },
          }}
        />
        <h1>Colorado Marijuana Tax Revenue Since {this.state.initalMonth}: ${this.state.completeTotal}</h1>
      </div>
    )
  }
}


// Exports
export default MonthlyTaxData
