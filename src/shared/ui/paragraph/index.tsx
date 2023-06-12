import { type FC, type HTMLProps, type ReactNode } from 'react'

import classNames from 'classnames'
import styles from './paragraph.module.scss'

interface ParagraphProps extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode
}
export const Paragraph: FC<ParagraphProps> = props => {
  const { children, className = '' } = props
  return <p className={classNames(styles.paragraph, className)}>{children}</p>
}
