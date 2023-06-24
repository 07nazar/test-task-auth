import { type FC, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styles from './modal.module.scss'

const modalNode = document.querySelector('#modal')
interface ModalProps {
  children: ReactNode
}
export const Modal: FC<ModalProps> = ({ children }) => {
  if (modalNode === null) {
    return null
  }

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.overlay} />
      <div className={styles.modalContent}>{children}</div>
    </div>,
    modalNode
  )
}
