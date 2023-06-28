import { type FC } from 'react'
import { Button } from 'src/shared/ui/button'
import { SignOutIcon } from 'src/shared/icons'
import classNames from 'classnames'
import { useAppDispatch } from 'src/shared/lib/hooks/use-app-dispatch'
import { clearSessionData } from 'src/entities/session'
import { logout } from 'src/entities/session/api/auth-async-thunks'
import { clearUserData } from 'src/entities/user'
import styles from './logout.module.scss'

export const Logout: FC = () => {
  const dispatch = useAppDispatch()

  const logoutHandler = (): void => {
    void dispatch(logout())
    dispatch(clearSessionData())
    dispatch(clearUserData())
  }

  return (
    <Button
      onClick={logoutHandler}
      styleType='secondary'
      type='button'
      className={classNames(styles.padding, styles.gap)}
      BeforeValue={SignOutIcon}>
      Выйти
    </Button>
  )
}
