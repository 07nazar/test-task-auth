import { type FC } from 'react'
import { Header } from 'src/widgets/header'
import { matchPath, Outlet, useLocation } from 'react-router-dom'
import { Footer } from 'src/widgets/footer'
import classNames from 'classnames'

import styles from './router-layout.module.scss'

export const RouterLayout: FC = () => {
  const { pathname } = useLocation()
  const routesWithoutNavBar = ['auth/*']

  const isMatch = routesWithoutNavBar.some(path => matchPath(path, pathname))

  return (
    <div className={styles.layout}>
      <Header />
      <main className={classNames('container', styles.main)}>
        <Outlet />
      </main>
      {isMatch && <Footer />}
    </div>
  )
}
