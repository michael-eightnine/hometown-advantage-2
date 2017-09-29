import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './scss/main.css'
import Routes from './routes/Routes'
import Header from './appShell/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({ location }) => (
          <div className='app-wrap'>
            <Header />
            <main className='view-wrap'>
              <Routes />
            </main>
          </div>
        )}/>
      </Router>
    )
  }
}

export default App
