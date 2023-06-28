import { Title } from 'src/shared/ui/title/ui'
import { Paragraph } from 'src/shared/ui/paragraph'
import classNames from 'classnames'
import { type FC } from 'react'
import styles from './user-info-card.module.scss'

interface IUserInfoCard {
  avatar: string
  name: string
  email: string
  index: number
}

export const UserInfoCard: FC<IUserInfoCard> = props => {
  const { index, name, avatar, email } = props

  return (
    <div
      className={classNames(styles.userInfoCard, styles.borderBottom, {
        [styles.borderTop]: index === 0,
      })}>
      <img className={styles.img} src={avatar} alt='avatar' />

      <Title titleType='subtitle' className={styles.name}>
        {name}
      </Title>
      <Paragraph className={styles.email}>{email}</Paragraph>
    </div>
  )
}
