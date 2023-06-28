import { type FC } from 'react'
import { AccountHeader } from 'src/widgets/account-header'
import { Logout } from 'src/features/auth/logout'
import { AccountInfo } from '../account-info'

import styles from './account.module.scss'

const Account: FC = () => (
  <div className={styles.account}>
    <AccountHeader />
    <div className={styles.accountInfoWrapper}>
      <div className={styles.accountInfo}>
        <AccountInfo />
        <Logout />
      </div>
    </div>
  </div>
)

export default Account
