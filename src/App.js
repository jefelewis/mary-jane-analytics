// Imports: Dependencies
import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'

// Imports: CSS
import './css/app.css'
import './css/distribution.css'
import './css/map.css'
import './css/footer.css'
import './css/header.css'

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
import OregonTaxDistributionNew from './components/OregonTaxDistributionNew'
import WashingtonTaxDistribution from './components/WashingtonTaxDistribution'
import WashingtonTaxDistributionNew from './components/WashingtonTaxDistributionNew'
import UnitedStatesMap from './components/UnitedStatesMap'
import Footer from './components/Footer'
import Header from './components/Header'

// React Application
const App = () => (
  <Router>
    <div>
      <div className="content">
        <Header />
        {/* <ColoradoSalesData />
        <ColoradoTaxData />
        <RecreationalStates />
        <MedicinalStates /> */}
        <MonthlyTaxData />
        {/* <WashingtonTaxDistribution />
        <ColoradoTaxDistribution />
        <CaliforniaTaxDistribution /> */}
        {/* <NevadaTaxDistribution /> */}
        <WashingtonTaxDistributionNew />
        <OregonTaxDistributionNew />
        <UnitedStatesMap />
        <Footer />
      </div>
    </div>
  </Router>
)

// Exports
export default hot(module)(App)
