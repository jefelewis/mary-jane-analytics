// Imports: Dependencies
import React from 'react'

// Imports: CSS
import './css/app.css'
import './css/distribution.css'
import './css/footer.css'
import './css/header.css'
import './css/map.css'
import './css/monthly.css'
import './css/stats.css'

// Imports: Components
import ColoradoSalesData from './components/ColoradoSalesData'
import Stats from './components/Stats'
import MonthlyTaxData from './components/MonthlyTaxData'
import AlaskaTaxDistribution from './components/AlaskaTaxDistribution'
import CaliforniaTaxDistribution from './components/CaliforniaTaxDistribution'
import ColoradoTaxDistribution from './components/ColoradoTaxDistribution'
import NevadaTaxDistribution from './components/NevadaTaxDistribution'
import OregonTaxDistribution from './components/OregonTaxDistribution'
import WashingtonTaxDistribution from './components/WashingtonTaxDistributionNew'
import UnitedStatesMap from './components/UnitedStatesMap'
import Footer from './components/Footer'
import Header from './components/Header'

// React Application
const App = () => (
  <div className="content">
    <Header />
    <Stats />
    {/* <ColoradoSalesData />
    <ColoradoTaxData />
    <RecreationalStates />
    <MedicinalStates /> */}
    <MonthlyTaxData />
    {/* <CaliforniaTaxDistribution /> */}
    {/* <WashingtonTaxDistribution />
    <ColoradoTaxDistribution />
    */}
    <AlaskaTaxDistribution />
    <ColoradoTaxDistribution />
    <NevadaTaxDistribution />
    <OregonTaxDistribution />
    <WashingtonTaxDistribution />
    <UnitedStatesMap />
    <Footer />
  </div>
)

// Exports
export default App
