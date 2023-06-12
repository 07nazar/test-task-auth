import { type FC, type HTMLProps, type ReactNode } from 'react'
import classNames from 'classnames'
import styles from './title.module.scss'

interface TitleProps extends HTMLProps<HTMLHeadingElement> {
  children: ReactNode
  titleType: 'title' | 'subtitle'
}

export const Title: FC<TitleProps> = props => {
  const { titleType, children, className = '' } = props

  return (
    <h1 className={classNames([styles.main, styles[titleType]], className)}>
      {children}
    </h1>
  )
}
