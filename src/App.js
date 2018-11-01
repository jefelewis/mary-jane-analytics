// Imports: Dependencies
import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

// Imports: CSS
import './app.css'

// Imports: Components
import MarijuanaChart from './components/MarijuanaChart'

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
      </div>

    </div>
  </Router>
)

export default hot(module)(App)
