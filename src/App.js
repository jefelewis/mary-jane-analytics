// Imports: Dependencies
import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'

// Imports: CSS
import './app.css'

// Imports: Components
import MarijuanaChart from './components/MarijuanaChart'
import RecreationalStates from './components/RecreationalStates'
import MedicinalStates from './components/MedicinalStates'

// React Application
const App = () => (
  <Router>
    <div>
      <nav>
        <h1>Amerijauna</h1>
      </nav>

      <div className="content">
        <MarijuanaChart />
        <RecreationalStates />
        <MedicinalStates />
      </div>

    </div>
  </Router>
)

// Exports
export default hot(module)(App)
