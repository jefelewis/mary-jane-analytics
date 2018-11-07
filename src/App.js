// Imports: Dependencies
import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'

// Imports: CSS
import './app.css'

// Imports: Components
import MarijuanaChart from './components/MarijuanaChart'
import RecreationalStates from './components/RecreationalStates'

// React Application
const App = () => (
  <Router>
    <div>
      <nav>
        <Link exact to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <div className="content">
        <MarijuanaChart />
        <RecreationalStates />
      </div>

    </div>
  </Router>
)

// Exports
export default hot(module)(App)
