import { type FC } from 'react'
import { Title } from 'src/shared/ui/title/ui'
import { Paragraph } from 'src/shared/ui/paragraph'
import { Avatar } from 'src/shared/ui/avatar'
import avatar from 'src/shared/images/empty-avatar.png'

import { EditUserInfo } from 'src/features/account/edit-user-info'
import { useSliceSelector } from 'src/shared/lib/hooks/use-app-selector'
import { capitalizeName } from 'src/shared/lib/helpers/capitalize-name'

import styles from './account-info.module.scss'

export const AccountInfo: FC = () => {
  const { userDto, isLoading } = useSliceSelector('user', state => state)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!userDto) {
    return <div>SKELETON</div>
  }

  const { email, bio, image, name } = userDto

  return (
    <div className={styles.accountInfo}>
      <Avatar
        type='big'
        imageUrl={image.url || avatar}
        className={styles.avatar}
      />

      <div className={styles.topInfo}>
        <div className={styles.baseInfo}>
          <Title titleType='title' className={styles.name}>
            {capitalizeName(name)}
          </Title>
          <Paragraph className={styles.email}>{email}</Paragraph>
        </div>

        <EditUserInfo />
      </div>

      <Paragraph className={styles.bio}>{bio}</Paragraph>
    </div>
  )
}
