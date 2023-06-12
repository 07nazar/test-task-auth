import { type FC } from 'react'
import { Navigate } from 'react-router-dom'
import { RouterLayout } from 'src/app/layouts'

export const AuthRoutes: FC = () => {
  const user: { isAuth: boolean } = { isAuth: false }

  if (user.isAuth) {
    return <Navigate to='/' />
  }

  return <RouterLayout />
}
