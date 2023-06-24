import { createBrowserRouter } from 'react-router-dom'
import { withLazy } from 'src/app/providers/with-lazy'

import {
  AsyncAccount,
  AsyncAccountsList,
  AsyncAuth,
  AsyncEdit,
  AsyncHome,
} from 'src/pages'
import { ProtectedRoutes } from './protected-routes'
import { AuthRoutes } from './auth-routes'

export const router = createBrowserRouter([
  { path: 'home', element: withLazy(<AsyncHome />) },
  {
    path: '/',
    element: <ProtectedRoutes />,
    children: [
      {
        index: true,
        element: withLazy(<AsyncAccountsList />),
      },
      {
        path: 'account',
        children: [
          { path: ':id', element: withLazy(<AsyncAccount />) },
          { path: 'edit/:id', element: withLazy(<AsyncEdit />) },
        ],
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthRoutes />,
    children: [
      {
        index: true,
        element: withLazy(<AsyncAuth type='login' />),
      },
      {
        path: 'register',
        element: withLazy(<AsyncAuth type='register' />),
      },
    ],
  },
])
