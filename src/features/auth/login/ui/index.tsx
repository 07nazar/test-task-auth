import { type FC, useState } from 'react'

import { AuthForm } from 'src/shared/ui/auth-form/ui'
import { Input } from 'src/shared/ui/input'

import { MailIcon, Castle, Eye } from 'src/shared/icons'

export const LoginForm: FC = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  })

  return (
    <AuthForm
      titleValue='Вход в Yoldi Agency'
      inputGroup={
        <>
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
            onChange={e => {
              setInputValues(prev => ({ ...prev, password: e.target.value }))
            }}
            type='password'
            BeforeElement={Castle}
            AfterElement={Eye}
            inputId='password'
            placeholder='Пароль'
          />
        </>
      }
      button={{
        value: 'Войти',
        isDisable: inputValues.email === '' || inputValues.password === '',
      }}
    />
  )
}
