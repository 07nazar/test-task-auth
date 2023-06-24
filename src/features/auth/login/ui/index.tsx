import { type FC, useEffect } from 'react'
import { AuthForm } from 'src/shared/ui/auth-form/ui'
import { useAppDispatch } from 'src/shared/lib/hooks/use-app-dispatch'
import { login } from 'src/entities/session'
import { useSliceSelector } from 'src/shared/lib/hooks/use-app-selector'
import { toast } from 'react-toastify'
import { clearError } from 'src/entities/session/model/slice'
import { inputGroup, loginSchema } from '../model'

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch()

  const { error, isAuthorized } = useSliceSelector('session', state => state)

  useEffect(() => {
    if (isAuthorized) {
      toast('Authorization was success', { type: 'success' })
    }
  }, [isAuthorized])

  useEffect(() => {
    if (error) {
      toast(error, { type: 'error' })
      dispatch(clearError())
    }
  }, [error, dispatch])

  return (
    <AuthForm
      validationSchema={loginSchema}
      initialValues={{ email: '', password: '' }}
      submitForm={data => {
        void dispatch(login(data))
      }}
      titleValue='Вход в Yoldi Agency'
      inputGroup={inputGroup}
      button={{
        type: 'submit',
        value: 'Войти',
      }}
    />
  )
}
