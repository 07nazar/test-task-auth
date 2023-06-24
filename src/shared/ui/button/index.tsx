import { type ButtonHTMLAttributes, type FC } from 'react'
import classNames from 'classnames'

import { type MySvgProps } from 'src/shared/icons/types/svg-type'
import styles from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  BeforeValue?: FC<MySvgProps>
  AfterValue?: FC<MySvgProps>
  styleType: 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = props => {
  const {
    type,
    children,
    disabled,
    AfterValue = null,
    BeforeValue = null,
    styleType,
    className = '',
    onClick,
  } = props

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      className={classNames(styles.button, styles[styleType], className)}
      disabled={disabled}>
      {BeforeValue !== null && (
        <BeforeValue width={20} height={20} fill='black' />
      )}
      {children}
      {AfterValue !== null && (
        <AfterValue width={20} height={20} fill='black' />
      )}
    </button>
  )
}
