import { type FC } from 'react'
import { Button } from 'src/shared/ui/button'
import { Paragraph } from 'src/shared/ui/paragraph'
import classNames from 'classnames'
import styles from './footer.module.scss'

// TODO   Переробити на посилання
export const Footer: FC = () => (
  <footer className='bg-white'>
    <div className={classNames('container', styles.footer)}>
      <Button styleType='secondary' className={styles.button}>
        <Paragraph className={styles.paragraph}>Уже есть аккаунт?</Paragraph>
        Войти
      </Button>
    </div>
  </footer>
)
