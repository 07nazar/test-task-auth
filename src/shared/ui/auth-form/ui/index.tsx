import { type FC, type HTMLProps, type ReactNode } from 'react'
import { Title } from 'src/shared/ui/title/ui'
import { Button } from 'src/shared/ui/button'

import styles from './auth-form.module.scss'

interface RegisterFormProps extends HTMLProps<HTMLFormElement> {
  titleValue: string
  inputGroup: ReactNode
  button: {
    beforeValue?: string
    afterValue?: string
    value: string
    isDisable?: boolean
  }
}
export const AuthForm: FC<RegisterFormProps> = props => {
  const { titleValue, inputGroup, button } = props

  return (
    <form className={styles.form}>
      <Title titleType='title'>{titleValue}</Title>
      <div className={styles.input_group}>{inputGroup}</div>
      <Button
        styleType='primary'
        beforeValue={button.beforeValue}
        afterValue={button.afterValue}
        disabled={button.isDisable}>
        Создать аккаунт
      </Button>
    </form>
  )
}
