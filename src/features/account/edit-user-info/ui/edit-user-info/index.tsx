import { type FC, useState } from 'react'
import { Button } from 'src/shared/ui/button'
import { Modal } from 'src/shared/ui/modal'

import { useMatchMedia } from 'src/shared/lib/hooks/use-media-match'
import { Link } from 'react-router-dom'
import { EditForm } from 'src/features/account/edit-user-info/ui/edit-form'
import styles from './edit-user-info.module.scss'

export const EditUserInfo: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const { isTablet, isMobile } = useMatchMedia()
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true)
        }}
        className={styles.editUserInfo}
        styleType='secondary'
        type='button'>
        {isTablet || isMobile ? (
          <Link to='/account/edit/123'>Редактировать</Link>
        ) : (
          <>Редактировать</>
        )}
      </Button>
      {isOpen && !isMobile && !isTablet && (
        <Modal>
          <EditForm closeMenu={setOpen} />
        </Modal>
      )}
    </>
  )
}
