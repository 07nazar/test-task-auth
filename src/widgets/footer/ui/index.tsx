import { type FC } from 'react'
import { Paragraph } from 'src/shared/ui/paragraph'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import styles from './footer.module.scss'

export const Footer: FC = () => {
  const { pathname } = useLocation()

  return (
    <footer className='bg-white'>
      <div className={classNames('container', styles.footer)}>
        <Paragraph className={styles.paragraph}>
          {pathname === '/auth' ? (
            <Link className={styles.link} to='/auth/register'>
              Еще нет аккаунта? Зарегистрироваться
            </Link>
          ) : (
            <Link className={styles.link} to='/auth'>
              Уже есть аккаунт? Войти
            </Link>
          )}
        </Paragraph>
      </div>
    </footer>
  )
}
