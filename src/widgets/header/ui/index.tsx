import { type FC } from 'react'
import headerLogo from 'src/shared/images/header-logo.png'
import { Paragraph } from 'src/shared/ui/paragraph'
import { Button } from 'src/shared/ui/button'

import avatar from 'src/shared/images/avatar.png'
import classNames from 'classnames'
import styles from './header.module.scss'

const name = 'Владислав'

const isAuth = false
export const Header: FC = () => (
  <header className='bg-white'>
    <div className={classNames('container', styles.header)}>
      <img src={headerLogo} className={styles.logo} alt='header-logo' />
      <Paragraph className={styles.paragraph}>
        Разрабатываем и запускаем
        <br /> сложные веб проекты
      </Paragraph>

      {!isAuth ? (
        <Button styleType='secondary'>Войти</Button>
      ) : (
        <button type='button' className={styles.user_group}>
          <Paragraph>{name}</Paragraph>
          <img src={avatar} alt='user-avatar' />
        </button>
      )}
    </div>
  </header>
)
