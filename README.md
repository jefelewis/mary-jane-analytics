# Mary Jane Analytics
*  [About The Data](#about-the-data)
*  [Built With](#built-with)
*  [Getting Started](#getting-started)
*  [GraphQL Query Examples](#graphql-query-examples)

## About The Data
The data comes directly from each State. Below is a list of available states and data sources.

| State              | Legislation                  | Retail Sales Effective Date | Tax Data                                                                                         |
| :----------------- | :--------------------------  | :-------------------------  | :----------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------
| Alaska (AK)        | [Measure 2](http://www.elections.alaska.gov/doc/bml/BM2-13PSUM-ballot-language.pdf)                    | 02/24/2015                  | [Source](http://tax.alaska.gov/programs/programs/reports/Index.aspx)                             |
| California (CA)    | Proposition 64               | 01/01/2018                  | [Source]()
| Colorado (CO)      | Amendment 64                 | 01/01/2014                  | [Source](https://www.colorado.gov/pacific/revenue/colorado-marijuana-tax-data)                   |
| Maine (ME)         | Marijuana Legalization Act   | Pending                     | [Source]()
| Michigan (MI)      | Proposal 1                   | Pending                     | [Source]()
| Massachusetts (MA) | Question 4                   | 07/01/2018                  | [Source]()
| Nevada (NV)        | Question 2                   | 01/01/2017                  | [Source](https://tax.nv.gov/Publications/Marijuana_Statistics_and_Reports/)                      |
| Oregon (OR)        | Measure 91                   | 07/01/2015                  | [Source](https://www.oregon.gov/DOR/programs/gov-research/Pages/research-marijuana.aspx)         |
| Vermont (VT)       | H.511                        | 07/01/2018                  | [Source]()
| Washington (WA)    | Initiative 502               | 07/08/2014                  | [Source](https://lcb.wa.gov/about/annual-report)                                                 |

## Built With
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming Language
* [React](https://reactjs.org) - Frontend Framework
* [React Static](https://react-static.js.org) - Static Site Generator
* [Chart.js](https://www.chartjs.org) - Charts/Graphs
* [Britecharts](https://github.com/eventbrite/britecharts) - Charts/Graphs
* [React USA Map](https://github.com/gabidavila/react-usa-map) - Charts/Graphs
* [Axios](https://www.npmjs.com/package/axios) - HTTP Requests
* [Babel 7](https://babeljs.io) - Transpiler/Transcompiler
* [ESLint](https://eslint.org) - Linter


## Pending Items
* Update 2019 data
* UI Work
* Responsiveness

## Screens
<div align="center">
  <img src="/assets/screenshots/LineGraph.jpeg" width="1000px"</img>
  <img src="/assets/screenshots/PieChart.jpeg" width="1000px"</img>
</div>

## Getting Started
**1. Install Dependencies:**
```
npm install
```

**2. Start Server:**
```
react-static start
```

**3. Generate Build File:**
```
react-static build
```