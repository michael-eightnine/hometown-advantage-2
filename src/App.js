import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/main.css'
import Routes from './routes/Routes'
import Header from './appShell/Header'

class App extends Component {
  render() {
    return (
      <Router basename="/hta-v2">
        <Route render={({ location }) => (
          <div className='app-wrap'>
            {/* If on the index page, don't render the header
                This is required for the splash page animation */}
            {location.pathname.length > 1  &&
              <Header />
            }
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
