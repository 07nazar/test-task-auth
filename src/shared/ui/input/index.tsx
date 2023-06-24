import { type FC, type InputHTMLAttributes, useState } from 'react'
import classNames from 'classnames'
import styles from './input.module.scss'
import { type MySvgProps } from '../../icons/types/svg-type'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputId: string
  BeforeElement?: FC<MySvgProps>
  error?: boolean
  AfterElement?: FC<MySvgProps>
}

export const Input: FC<InputProps> = props => {
  const {
    className = '',
    inputId,
    value = '',
    onChange,
    placeholder = '',
    type,
    disabled,
    error = false,
    BeforeElement,
    AfterElement,
    onBlur,
    ...otherProps
  } = props

  const [isFocus, setFocus] = useState(false)

  return (
    <label
      htmlFor={inputId}
      className={classNames(styles.inputWrapper, className, {
        [styles.disable]: disabled,
        [styles.focus]: isFocus,
        [styles.error]: error,
        [styles.fill]: value.toString().length > 0,
      })}>
      {BeforeElement !== undefined && (
        <BeforeElement
          width={20}
          height={20}
          fill={disabled === true ? 'gray' : 'black'}
        />
      )}
      <input
        {...otherProps}
        id={inputId}
        value={value}
        type={type}
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={onBlur}
        onChange={onChange}
        className={classNames(styles.input)}
        placeholder={placeholder}
        disabled={disabled}
      />
      {AfterElement !== undefined && (
        <AfterElement
          width={20}
          height={20}
          fill={disabled === true ? 'gray' : 'black'}
        />
      )}
    </label>
  )
}
