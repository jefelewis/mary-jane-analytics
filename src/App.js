// Imports: Dependencies
import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'

// Imports: CSS
import './css/app.css'
import './css/distribution.css'
import './css/footer.css'
import './css/header.css'
import './css/map.css'
import './css/stats.css'

// Imports: Components
import ColoradoSalesData from './components/ColoradoSalesData'
import Stats from './components/Stats'
import MonthlyTaxData from './components/MonthlyTaxData'
import CaliforniaTaxDistribution from './components/CaliforniaTaxDistribution'
import ColoradoTaxDistribution from './components/ColoradoTaxDistribution'
import NevadaTaxDistribution from './components/NevadaTaxDistribution'
import OregonTaxDistributionNew from './components/OregonTaxDistributionNew'
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
        <Stats />
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
