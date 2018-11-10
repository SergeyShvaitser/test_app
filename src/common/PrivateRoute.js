import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom';
import isUserLogged from 'utils/checkUser';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() => (
      isUserLogged() ? <Component {...rest} /> : <Redirect to={{pathname: '/login'}} />
    )} />
)

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
}


export default PrivateRoute
