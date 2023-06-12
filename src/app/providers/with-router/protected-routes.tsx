import { Navigate } from 'react-router-dom'

import { type FC } from 'react'
import { RouterLayout } from 'src/app/layouts'

export const ProtectedRoutes: FC = () => {
  const user = { isAuth: false }
  const token = ''

  if (!user.isAuth || token.length === 0) {
    return <Navigate to='auth' />
  }

  return <RouterLayout />
}
