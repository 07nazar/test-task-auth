import { type FC, useRef } from 'react'
import classNames from 'classnames'

import { useHover } from 'src/shared/lib/hooks/use-hover'
import { UploadAvatar } from 'src/features/account/upload-avatar'
import styles from './avatar.module.scss'

interface AvatarProps {
  type: 'mini' | 'big'
  imageUrl: string
  className?: string
}

export const Avatar: FC<AvatarProps> = props => {
  const { type, imageUrl, className = '' } = props
  const ref = useRef(null)
  const isHover = useHover(ref)

  return (
    <div ref={ref} className={classNames(className, styles.avatarWrapper)}>
      {isHover ? (
        <UploadAvatar />
      ) : (
        <img
          src={imageUrl}
          alt='avatar'
          className={classNames(styles.avatar, styles[type])}
        />
      )}
    </div>
  )
}
