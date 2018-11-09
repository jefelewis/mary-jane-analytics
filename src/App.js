// Imports: Dependencies
import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'

// Imports: CSS
import './app.css'
import './css/footer.css'

// Imports: Components
import ColoradoSalesData from './components/ColoradoSalesData'
import RecreationalStates from './components/RecreationalStates'
import MedicinalStates from './components/MedicinalStates'
import ColoradoTaxData from './components/ColoradoTaxData'
import MonthlyTaxData from './components/MonthlyTaxData'
import CaliforniaTaxDistribution from './components/CaliforniaTaxDistribution'
import ColoradoTaxDistribution from './components/ColoradoTaxDistribution'
import NevadaTaxDistribution from './components/NevadaTaxDistribution'
import OregonTaxDistribution from './components/OregonTaxDistribution'
import WashingtonTaxDistribution from './components/WashingtonTaxDistribution'
import Footer from './components/Footer'

// React Application
const App = () => (
  <Router>
    <div>
      {/* <nav>
        <h1>Marijuana Facts</h1>
      </nav> */}

      <div className="content">
        {/* <ColoradoSalesData />
        <ColoradoTaxData />
        <RecreationalStates />
        <MedicinalStates /> */}
        <MonthlyTaxData />
        {/* <WashingtonTaxDistribution />
        <ColoradoTaxDistribution />
        <CaliforniaTaxDistribution /> */}
        {/* <NevadaTaxDistribution /> */}
        <OregonTaxDistribution />
        <Footer />
      </div>
    </div>
  </Router>
)

// Exports
export default hot(module)(App)
