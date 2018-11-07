// Imports: Dependencies
import React from 'react'
import ReactDOM from 'react-dom'

// Imports: React Application
import App from './App'

// Exports
export default App

// Render React Application
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render
  render(App)
}
