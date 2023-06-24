import { type FC, useEffect } from 'react'
import { AuthForm } from 'src/shared/ui/auth-form/ui'
import { useAppDispatch } from 'src/shared/lib/hooks/use-app-dispatch'
import { registration } from 'src/entities/session'
import { useNavigate } from 'react-router-dom'
import { useSliceSelector } from 'src/shared/lib/hooks/use-app-selector'
import { toast } from 'react-toastify'
import { clearError } from 'src/entities/session/model/slice'
import { inputGroup, registerSchema } from '../model'

export const RegisterForm: FC = () => {
  const { isAuthorized, error } = useSliceSelector('session', state => state)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isAuthorized) {
      navigate('/')
      toast('Register was success', { type: 'success' })
    }
  }, [isAuthorized, navigate])

  useEffect(() => {
    if (error) {
      toast(error, { type: 'error' })
      dispatch(clearError())
    }
  }, [error])

  return (
    <AuthForm
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={registerSchema}
      submitForm={data => {
        void dispatch(registration(data))
      }}
      titleValue='Регистрация в Yoldi Agency'
      inputGroup={inputGroup}
      button={{
        type: 'submit',
        value: 'Создать аккаунт',
      }}
    />
  )
}
