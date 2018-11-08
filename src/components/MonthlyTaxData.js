// Imports: Dependencies
import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { renderStatic } from 'react-helmet';
import { runInThisContext } from 'vm';

// ChartJS: Colorado Tax Data
const monthlyTaxdata = {
  labels: [
    'January (2014)', 'February (2014)', 'March (2014)', 'April (2014)', 'June (2014)', 'July (2014)', 'August (2014)', 'September (2014)', 'October (2014)', 'November (2014)', 'December (2014)',
    'January (2015)', 'February (2015)', 'March (2015)', 'April (2015)', 'June (2015)', 'July (2015)', 'August (2015)', 'September (2015)', 'October (2015)', 'November (2015)', 'December (2015)',
    'January (2016)', 'February (2016)', 'March (2016)', 'April (2016)', 'June (2016)', 'July (2016)', 'August (2016)', 'September (2016)', 'October (2016)', 'November (2016)', 'December (2016)',
    'January (2017)', 'February (2017)', 'March (2017)', 'April (2017)', 'June (2017)', 'July (2017)', 'August (2017)', 'September (2017)', 'October (2017)', 'November (2017)', 'December (2017)',
    'January (2018)', 'February (2018)', 'March (2018)', 'April (2018)', 'June (2018)', 'July (2018)', 'August (2018)', 'September (2018)', 'October (2018)', 'November (2018)', 'December (2018)'

  ],
  datasets: [
    {
      label: 'Alaska',
      data: [
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null
      ],
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#4a8e39',
      borderColor: '#4a8e39',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '000',
      pointBackgroundColor: '#000',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
    {
      label: 'California',
      data: [
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null
      ],
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#4a8e39',
      borderColor: '#4a8e39',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '000',
      pointBackgroundColor: '#000',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
    {
      label: 'Colorado',
      data: [
        null, 3519756, 4092575, 4980992, 5273355, 5715707, 6522085, 7407450, 7741167, 7232870, 7642800, 7465568,
        8558141, 8802295, 9099395, 9979643, 10617311, 11326452, 10856584, 12811437, 13181758, 11656736, 11290012, 12231410,
        13247434, 12466617, 14195923, 13097298, 17183162, 14482648, 16823849, 17574149, 19145992, 19266922, 18425864, 17694953,
        18164787, 17723858, 17550692, 22867587, 18563939, 19662464, 20437751, 23775043, 23235507, 23098408, 21076993, 21211445,
        21681438, 21134864, 20871820, 22947141, 22367707, 21928692, 22963778, 23044818, 2377039
      ],
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#4a8e39',
      borderColor: '#4a8e39',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '000',
      pointBackgroundColor: '#000',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
    {
      label: 'Maine',
      data: [
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null
      ],
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#4a8e39',
      borderColor: '#4a8e39',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '000',
      pointBackgroundColor: '#000',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
    {
      label: 'Massachusetts',
      data: [
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null
      ],
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#4a8e39',
      borderColor: '#4a8e39',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '000',
      pointBackgroundColor: '#000',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
    {
      label: 'Michigan',
      data: [
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null
      ],
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#4a8e39',
      borderColor: '#4a8e39',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '000',
      pointBackgroundColor: '#000',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
    {
      label: 'Nevada',
      data: [
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, 3682773, 4861641, 4720284, 5839336, 5506067, 5766694, 5553590, 5946346, 7095894, 6550222,
        7112453, 7124485, 7908428
      ],
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#265e1d',
      borderColor: '#265e1d',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#000',
      pointBackgroundColor: '#000',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
    {
      label: 'Oregon',
      data: [
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, 2484170, 4358754,
        3735111, 4339440, 5735508, 5533949, 7345281, 6679585, 7831157, 6463877, 5647600, 5261096, 5191764, 5181959,
        5169803, 6637787, 7277322, 5944069, 7827988, 7445026, 7221129, 8110286, 7176690, 9283580, 7708791, 7839406,
        8868932, 9001343, 8560616, 10099649, 10114594, 8054422,
      ],
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#7e1946',
      borderColor: '#aac0aa',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#000',
      pointBackgroundColor: '#000',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
    {
      label: 'Vermont',
      data: [
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null
      ],
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#4a8e39',
      borderColor: '#4a8e39',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '000',
      pointBackgroundColor: '#000',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
    {
      label: 'Washington',
      data: [
        null, null, null, null, null, 1565, 937273, 1815427, 3250921, 4022719, 4238002, 4613530,
        4613530, 5678767, 7401676, 8795471, 10374631, 11484814, 11630909, 12951601, 14059556, 13066575, 14867945, 14521815,
        15565692, 17356284, 18199216, 19025327, 20012239, 20012239, 23547274, 25003323, 26002289, 25545043, 23979399, 27040937,
        25065468, 24981028, 28292342, 27443478, 27683285, 28550644, 29764431, 30589485, 30552329, 27906730, 28889510, 31108194,
        28760989, 28064890, 31696311, 30096911, 30750992, 31598278, 32383413, 33407125, 29263350,
      ],
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#7e1946',
      borderColor: '#aac0aa',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#000',
      pointBackgroundColor: '#000',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
    },
  ],
  
}

// React Component: Monthly Tax Data
class MonthlyTaxData extends Component {
  constructor () {
    super()

    this.state = {
      initalMonth: monthlyTaxdata.labels[0],
      completeTotal: null,
      washingtonTotal: null,
    }
  }

  addCommasToNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getCompleteTotal(state) {
    let total = 0;
    let taxRevenue = null;

    if (state === "Alaska") {
      taxRevenue = monthlyTaxdata.datasets[0].data
    }
    if (state === "California") {
      taxRevenue = monthlyTaxdata.datasets[1].data
    }
    if (state === "Colorado") {
      taxRevenue = monthlyTaxdata.datasets[2].data
    }
    if (state === "Maine") {
      taxRevenue = monthlyTaxdata.datasets[3].data
    }
    if (state === "Massachusetts") {
      taxRevenue = monthlyTaxdata.datasets[4].data
    }
    if (state === "Michigan") {
      taxRevenue = monthlyTaxdata.datasets[5].data
    }
    if (state === "Nevada") {
      taxRevenue = monthlyTaxdata.datasets[6].data
    }
    if (state === "Oregon") {
      taxRevenue = monthlyTaxdata.datasets[7].data
    }
    if (state === "Vermont") {
      taxRevenue = monthlyTaxdata.datasets[8].data
    }
    if (state === "Washington") {
      taxRevenue = monthlyTaxdata.datasets[9].data
    }

    for (let i = 0; i < taxRevenue.length; i++) {
      total += taxRevenue[i]
    }
    return this.addCommasToNumber(total)
  }

  render () {
    return (
      <div>
        <h1>Monthly Medicinal & Recreational Marijuana Tax Revenue</h1>
        <Line
          data={monthlyTaxdata}
          options={{
            maintainAspectRatio: true,
            scaleBeginAtZero: true,
            responsive: true,
            scales: {
              xAxes: [{
                ticks: {
                  autoSkip: false
                },
              }],
              yAxes: [{
                  ticks: {
                      // Include dollar signs and commas
                      callback: function(value, index, values) {
                        value = value.toString();
                        value = value.split(/(?=(?:...)*$)/);
                        value = value.join(',');
                        return `$${  value}`;
                    },
                    min: 0,
                    beginAtZero: true,
                    stepSize: 5000000,
                  },
              }],
            },
          }}
        />
        <h1>Alaska Marijuana Tax Revenue Since February 2014: ${this.getCompleteTotal("Alaska")}</h1>
        <br></br>
        <h1>California Marijuana Tax Revenue Since February 2014: ${this.getCompleteTotal("California")}</h1>
        <br></br>
        <h1>Colorado Marijuana Tax Revenue Since February 2014: ${this.getCompleteTotal("Colorado")}</h1>
        <br></br>
        <h1>Maine Marijuana Tax Revenue Since January 2017: ${this.getCompleteTotal("Maine")}</h1>
        <br></br>
        <h1>Michigan Marijuana Tax Revenue Since January 2017: ${this.getCompleteTotal("Michigan")}</h1>
        <br></br>
        <h1>Massachusetts Marijuana Tax Revenue Since January 2017: ${this.getCompleteTotal("Massachusetts")}</h1>
        <br></br>
        <h1>Nevada Marijuana Tax Revenue Since January 2017: ${this.getCompleteTotal("Nevada")}</h1>
        <br></br>
        <h1>Oregon Marijuana Tax Revenue Since February 2016: ${this.getCompleteTotal("Oregon")}</h1>
        <br></br>
        <h1>Vermont Marijuana Tax Revenue Since February 2016: ${this.getCompleteTotal("Oregon")}</h1>
        <br></br>
        <h1>Washington Marijuana Tax Revenue Since February 2014: ${this.getCompleteTotal("Washington")}</h1>
        <br></br>
        <h1>States Average $ Million In Tax Revenue Per Month</h1>
      </div>
    )
  }
}


// Exports
export default MonthlyTaxData
