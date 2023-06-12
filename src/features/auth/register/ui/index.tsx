import { type FC, useState } from 'react'
import { AuthForm } from 'src/shared/ui/auth-form/ui'
import { Input } from 'src/shared/ui/input'
import { Castle, Eye, MailIcon, ProfileIcon } from 'src/shared/icons'

export const RegisterForm: FC = () => {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
  })
  return (
    <AuthForm
      titleValue='Регистрация в Yoldi Agency'
      inputGroup={
        <>
          <Input
            value={inputValues.name}
            onChange={e => {
              setInputValues(prev => ({ ...prev, name: e.target.value }))
            }}
            type='text'
            BeforeElement={ProfileIcon}
            inputId='name'
            placeholder='Имя'
          />
          <Input
            value={inputValues.email}
            onChange={e => {
              setInputValues(prev => ({ ...prev, email: e.target.value }))
            }}
            type='email'
            BeforeElement={MailIcon}
            inputId='email'
            placeholder='E-mail'
          />
          <Input
            value={inputValues.password}
            type='password'
            onChange={e => {
              setInputValues(prev => ({ ...prev, password: e.target.value }))
            }}
            BeforeElement={Castle}
            AfterElement={Eye}
            inputId='password'
            placeholder='Пароль'
          />
        </>
      }
      button={{
        value: 'Создать аккаунт',
        isDisable:
          inputValues.name === '' ||
          inputValues.email === '' ||
          inputValues.password === '',
      }}
    />
  )
}
