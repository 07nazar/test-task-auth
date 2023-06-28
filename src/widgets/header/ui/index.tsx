import { type FC } from 'react'
import headerLogo from 'src/shared/images/header-logo.png'
import { Paragraph } from 'src/shared/ui/paragraph'
import { Button } from 'src/shared/ui/button'

import avatar from 'src/shared/images/empty-avatar.png'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { useSliceSelector } from 'src/shared/lib/hooks/use-app-selector'
import { capitalizeName } from 'src/shared/lib/helpers/capitalize-name'
import ContentLoader from 'react-content-loader'
import styles from './header.module.scss'

export const Header: FC = () => {
  const { isAuthorized } = useSliceSelector('session', state => state)
  const { userDto } = useSliceSelector('user', state => state)

  return (
    <header className='bg-white'>
      <div className={classNames('container', styles.header)}>
        <Link to='/'>
          <img src={headerLogo} className={styles.logo} alt='header-logo' />
        </Link>

        <Paragraph className={styles.paragraph}>
          Разрабатываем и запускаем
          <br /> сложные веб проекты
        </Paragraph>

        {!isAuthorized && <Button styleType='secondary'>Войти</Button>}

        {userDto && (
          <Link to='account/123' className={styles.user_group}>
            <Paragraph>{capitalizeName(userDto.name)}</Paragraph>
            <img
              width={50}
              className={styles.avatar}
              height={50}
              src={userDto.image.url || avatar}
              alt='user-avatar'
            />
          </Link>
        )}
        {isAuthorized && !userDto && (
          <ContentLoader
            speed={2}
            width={155}
            height={50}
            viewBox='0 0 155 50'
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'>
            <rect x='161' y='18' rx='3' ry='3' width='88' height='6' />
            <rect x='0' y='56' rx='3' ry='3' width='410' height='6' />
            <rect x='0' y='72' rx='3' ry='3' width='380' height='6' />
            <rect x='0' y='88' rx='3' ry='3' width='178' height='6' />
            <rect x='0' y='15' rx='0' ry='0' width='85' height='26' />
            <rect x='95' y='0' rx='100' ry='100' width='50' height='50' />
          </ContentLoader>
        )}
      </div>
    </header>
  )
}
