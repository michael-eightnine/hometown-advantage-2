import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import Grid from './../grid/Grid'
import ValueMachine from './../collections/valueMachine/ValueMachine'
import About from './../staticPages/About'
import Splash from './../staticPages/Splash'
import collectionList from './../data/collections'

const CollectionComponents = {
  Grid,
  ValueMachine,
}

const collectionRoutes = collectionList.map((item, index) => {
  const linkRef = '/collections/' + item.name.replace(/\s+/g, '-').toLowerCase()
  const CollectionComponent = CollectionComponents[item.componentName]

  return (
    <Route
      path={linkRef}
      render={ () => <CollectionComponent filterBy={item.name} /> }
      key={index}
    />
  )
})

const Routes = ({location}) => {
  return (
    <CSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={350}
      transitionLeaveTimeout={350}
    >
      <Switch key={location.key} location={location}>
        {/* Splash Route */}
        <Route exact
          path='/'
          key='splash'
          render={ () => <Splash /> }
        />
        {/* Stream Route */}
        <Route
          path='/stream'
          key='content-stream'
          render={ () => <Grid filterBy={null} /> }
        />
        {/* Collection Routes */}
        {collectionRoutes}
        {/* About Route */}
        <Route
          path='/the-advantage'
          key='the-advantage'
          render={ () => <About /> }
        />
        {/* Fallback Route */}
        <Route
          path='/'
          render={ () => <Redirect to='/stream' /> }
        />
      </Switch>
    </CSSTransitionGroup>
  )
}

export default withRouter((props) => <Routes {...props}/>)
