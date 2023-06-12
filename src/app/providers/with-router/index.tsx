import { RouterProvider } from 'react-router-dom'
import { type FC } from 'react'
import { router } from './routes'

export const withRouter: FC = () => <RouterProvider router={router} />
