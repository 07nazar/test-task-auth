import { createBrowserRouter } from 'react-router-dom'

import { ProtectedRoutes } from 'src/app/providers/with-router/protected-routes'
import { Home } from 'src/pages/home'
import { Account } from 'src/pages/account'
import { AccountsList } from 'src/pages/accounts-list'
import { AuthRoutes } from 'src/app/providers/with-router/auth-routes'
import { Auth } from 'src/pages/auth'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoutes />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'account/:id',
        element: <Account />,
      },
      {
        path: 'accounts',
        element: <AccountsList />,
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthRoutes />,
    children: [
      {
        index: true,
        element: <Auth type='login' />,
      },
      {
        path: 'register',
        element: <Auth type='register' />,
      },
    ],
  },
])

// {
//   path: '/',
//       element: <ProtectedRoutes />,
//     children: [
//   { index: true, element: <Home /> },
//   { path: 'account/:id', element: <Account /> },
//   { path: 'accounts', element: <AccountsList /> },
// ],
// },
// {
//   path: '/auth',
//       element: <AuthRoutes />,
//     children: [
//   { index: true, element: <Auth type='login' /> },
//   { path: 'register', element: <Auth type='register' /> },
// ],
// },
