import { type FC, useRef } from 'react'
import emptyHeaderBg from 'src/shared/images/empty-header-bg.jpg'
import headerBg from 'src/shared/images/profile-header.jpg'
import { UploadHeaderBg } from 'src/features/account/upload-header-bg/ui'
import { useHover } from 'src/shared/lib/hooks/use-hover'
import styles from './account-header.module.scss'

export const AccountHeader: FC = () => {
  const userHeaderBg = headerBg
  const ref = useRef(null)
  const isHover = useHover(ref)
  return (
    <div ref={ref} className={styles.profile_header}>
      {isHover && <UploadHeaderBg />}

      {userHeaderBg === null ? (
        <img
          className={styles.headerImage}
          src={emptyHeaderBg}
          alt='header-bg'
        />
      ) : (
        <img className={styles.headerImage} src={headerBg} alt='header-bg' />
      )}
    </div>
  )
}
