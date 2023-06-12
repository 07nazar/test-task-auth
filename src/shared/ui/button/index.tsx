import { type ButtonHTMLAttributes, type FC } from 'react'
import classNames from 'classnames'

import styles from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  beforeValue?: string
  afterValue?: string
  styleType: 'primary' | 'secondary' | 'master'
}

export const Button: FC<ButtonProps> = props => {
  const {
    children,
    disabled,
    afterValue = null,
    beforeValue = null,
    styleType,
    className = '',
  } = props

  return (
    <button
      type='button'
      className={classNames(styles.button, styles[styleType], className)}
      disabled={disabled}>
      {beforeValue !== undefined && beforeValue}
      {children}
      {afterValue !== undefined && afterValue}
    </button>
  )
}
