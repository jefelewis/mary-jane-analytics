// Imports: Dependencies
import React from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'

// // Import Data
// const coloradoData = '../data/colorado.json'

// Data
const deleteData = {
  "colorado": {
    "sales": [
      {
        "year": 2014,
        "amount": 683523739
      },
      {
        "year": 2015,
        "amount": 995591255
      },
      {
        "year": 2016,
        "amount": 1307203473
      },
      {
        "year": 2017,
        "amount": 1507702219
      },
      {
        "year": 2018,
        "amount": null
      },
      {
        "year": 2019,
        "amount": null
      },
      {
        "year": 2020,
        "amount": null
      }
    ],
    "taxes": [
      {
        "year": 2014,
        "amount": 67594323
      },
      {
        "year": 2015,
        "amount": 130411173
      },
      {
        "year": 2016,
        "amount": 193604810
      },
      {
        "year": 2017,
        "amount": 247368473
      },
      {
        "year": 2018,
        "amount": null
      },
      {
        "year": 2019,
        "amount": null
      },
      {
        "year": 2020,
        "amount": null
      }
    ]
  }
}






// Years
let years = []
let taxRevenue = []

const coloradoSalesdata = {
  labels: deleteData.colorado.sales.map(year => {
    return years.push(year.year)
  }),
  datasets: [{
    label: 'Marijuana Sales Data',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: deleteData.colorado.taxes.map(tax => {
      return taxRevenue.push(tax.amount)
    }),
  }],
}

const MarijuanaChart = () => (
  <div>
    <h1>FUCK</h1>
    <Bar
      data={coloradoSalesdata}
      width={100}
      height={50}
      options={{
        maintainAspectRatio: false,
      }}
    />
  </div>
)

export default MarijuanaChart
