import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import Grid from './../grid/Grid'
import collectionList from './../data/collections'

const collectionRoutes = collectionList.map((item, index) => {
  const linkRef = '/collections/' + item.name.replace(/\s+/g, '-').toLowerCase()

  return (
    <Route
      path={linkRef}
      render={() => item.isGrid ? <Grid filterBy={item.name} /> : null }
      key={index}
    />
  )
})

const Routes = (props) => {
  return (
    <CSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={350}
      transitionLeaveTimeout={350}
    >
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
            <Grid filterBy={null} />
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
    </CSSTransitionGroup>
  )
}

export default withRouter((props) => <Routes {...props}/>)
