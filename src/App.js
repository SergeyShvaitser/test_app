import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'
import renderRoutes from 'utils/renderRoutes'
import { routes } from 'routes'

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        {renderRoutes(routes)}
        <Redirect to={{ pathname: '/login' }} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
