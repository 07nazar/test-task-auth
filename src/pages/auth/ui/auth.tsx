import { type FC } from 'react'

import { RegisterForm } from 'src/features/auth/register'
import { LoginForm } from 'src/features/auth/login'

import styles from './auth.module.scss'

interface AuthProps {
  type: 'login' | 'register'
}
const Auth: FC<AuthProps> = props => {
  const { type } = props

  return (
    <div className={styles.auth}>
      {type === 'login' ? <LoginForm /> : <RegisterForm />}
    </div>
  )
}

export default Auth
