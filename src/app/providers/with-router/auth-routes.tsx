import { type FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouterLayout } from 'src/app/layouts'
import { useSliceSelector } from 'src/shared/lib/hooks/use-app-selector'

export const AuthRoutes: FC = () => {
  const { isAuthorized } = useSliceSelector('session', state => state)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthorized) {
      navigate('/')
    }
  }, [isAuthorized, navigate])

  return (
    <div className='bg-gray'>
      <RouterLayout />
    </div>
  )
}
