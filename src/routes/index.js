import Dashboard from 'views/containers/Dashboard'
import Login from 'views/containers/Login'

export const routes = [
  {
    path: '/',
    component: Dashboard,
    authenticate: true,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  }
]
