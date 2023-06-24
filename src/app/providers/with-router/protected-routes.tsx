import { useNavigate } from 'react-router-dom'

import { type FC, useEffect } from 'react'
import { RouterLayout } from 'src/app/layouts'
import { useSliceSelector } from 'src/shared/lib/hooks/use-app-selector'
import { useAppDispatch } from 'src/shared/lib/hooks/use-app-dispatch'
import { fetchProfile } from 'src/entities/user/api/user-api'

export const ProtectedRoutes: FC = () => {
  const { isAuthorized } = useSliceSelector('session', state => state)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/auth')
    } else {
      void dispatch(fetchProfile())
    }
  }, [dispatch, isAuthorized, navigate])

  return (
    <div className='bg-white'>
      <RouterLayout />
    </div>
  )
}
