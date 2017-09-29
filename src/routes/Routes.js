import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
// import { CSSTransitionGroup } from 'react-transition-group'
// import Grid from './Grid'
import collectionList from './../data/collections'

const collectionRoutes = collectionList.map((item, index) => {
  const linkRef = '/collections/' + item.name.replace(/\s+/g, '-').toLowerCase()

  return (
    <Route
      path={linkRef}
      render={() => (
        <div>hello {item.name}</div>
      )}
      key={index}
    />
  )
})

const Routes = (props) => {
  return (
    <Switch key={props.location.key} location={props.location}>
      {/* Splash Route */}
      <Route exact
        path='/'
        key='splash'
        render={() => (
          <div>HELLO HOME</div>
        )}
      />
      {/* Stream Route */}
      <Route
        path='/stream'
        key='content-stream'
        render={() => (
          <div>HELLO STREAM</div>
        )}
      />
      {/* Collection Routes */}
      {collectionRoutes}
      {/* About Route */}
      <Route
        path='/the-advantage'
        key='the-advantage'
        render={() => (
          <div>HELLO ABOUT</div>
        )}
      />
      {/* Fallback Route */}
      <Route
        path='/'
        render={() => (
          <Redirect to='/content-stream' />
        )}
      />
    </Switch>
  )
}

export default withRouter((props) => <Routes {...props}/>)
