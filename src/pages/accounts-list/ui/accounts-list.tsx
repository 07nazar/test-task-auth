import { type FC } from 'react'
import { Title } from 'src/shared/ui/title/ui'

import { Accounts } from './accouts'
import styles from './accounts-list.module.scss'

const AccountsList: FC = () => (
  <div className={styles.accountsListWrapper}>
    <div className={styles.accountsList}>
      <Title titleType='title' className={styles.title}>
        Список аккаунтов
      </Title>
      <Accounts />
    </div>
  </div>
)

export default AccountsList
