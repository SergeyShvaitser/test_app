import React from 'react'
import shortid from 'shortid'
import { PrivateRoute } from 'common'
import { Route } from 'react-router-dom'

const renderRoutes = routes => routes.map(({component, authenticate, ...route}) =>
  authenticate ? (
    <PrivateRoute
      key={shortid.generate()}
      component={component} {...route} />
  ) : (
    <Route
      key={shortid.generate()}
      component={component} {...route} />
  )
)

export default renderRoutes
