import Dashboard from 'views/containers/Dashboard'
import Login from 'views/containers/Login'

export const routes = [
  {
    path: '/test_app',
    component: Dashboard,
    authenticate: true,
    exact: true,
  },
  {
    path: '/test_app/login',
    component: Login,
    exact: true,
  }
]
