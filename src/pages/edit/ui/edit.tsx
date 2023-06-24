import { type FC } from 'react'

import { EditForm } from 'src/features/account/edit-user-info/ui/edit-form'
import { useNavigate } from 'react-router-dom'
import styles from './edit.module.scss'

const Edit: FC = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.edit}>
      <EditForm
        closeMenu={() => {
          navigate(-1)
        }}
        formClassName={styles.editForm}
      />
    </div>
  )
}

export default Edit
