// // Imports: Dependencies
// import React, { Component } from 'react'
// import { Doughnut, Bar } from 'react-chartjs-2'
// import 'chartjs-plugin-labels';

// const taxDistributionData = {
//   labels: ['Cities & Counties', 'Department of Revenue Administrative Costs', 'Mental Health, Alcoholism, & Drug Services', 'Oregon Health Authority Drug Treatment & Prevention', 'Oregon State Police', 'State School Fund'],
//   datasets: [
//     {
//       data: [21334247.17, 6519686.21, 21334247.17, 5333561.80, 16000685.39, 42668494.35],
//       backgroundColor: [
//         '#4FBC43',
//         '#98F2AA',
//         '#B2B2B2',
//         '#424242',
//         '#111111',
//         '#006600',
//       ],
//     },
//   ],
// }


// // React Component: Tax Distribution
// class OregonTaxDistribution extends Component {
//   constructor () {
//     super()

//     this.state = {
//     }
//   }

//   addCommasToNumber(number) {
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   }

//   getTaxDistributionTotal(array) {
//     let total = null;

//     for (let i = 0; i <= array.datasets[0].data.length; i++) {
//       total += array[i];
//     }

//     return total;
//   }

//   render () {
//     return (
//       <div className="distribution">
//         <br></br>
//         <h2>Oregon Marijuana Tax Revenue Distribution:</h2>
//         <h4>Disbursement of Funds Began: October 2017</h4>

//         <Doughnut
//           className="allocation"
//           height={400}
//           width={400}
//           data={taxDistributionData}
//           options={{
//             maintainAspectRatio: true,
//             scaleBeginAtZero: false,
//             responsive: false,
//             legend: {
//               display: false,
//               position: 'default',              
//             },
//             plugins: {
//               labels: {
//                 render: 'value',
//                 outsidePadding: 4,
//                 textMargin: 10,
//                 position: 'outside',
//                 render: (args) => {
//                   return `${args.label}: ${args.value}`
//                 }
//               },
//             },
//           }}
//         />

//         <div>
//           <h2>2017 Total</h2>
//           <p></p>
//         </div>
//         <ul>
//           <li><b>Cities & Counties:</b> $21,334,247.17</li>
//           <li><b>Department of Revenue Administrative Costs:</b> $6,519,686.21</li>
//           <li><b>Mental Health, Alcoholism, & Drug Services:</b> $21,334,247.17</li>
//           <li><b>Oregon Health Authority Drug Treatment & Prevention:</b> $5,333,561.80</li>
//           <li><b>Oregon State Police:</b> $16,000,685.39</li>
//           <li><b>State School Fund:</b> $42,668,494.35</li>
//         </ul>

//         {/* <Bar
//           height={450}
//           width={450}
//           data={taxDistributionData}
//           options={{
//             maintainAspectRatio: false,
//             scaleBeginAtZero: false,
//             responsive: false,
//             legend: {
//               position: 'right',
//             },
//             scales: {
//               xAxes: [{
//                   stacked: true,
//               }],
//               yAxes: [{
//                   stacked: true,
//               }],
//             },
//           }}
//         /> */}

//       </div>
//     )
//   }
// }

// // Exports
// export default OregonTaxDistribution
