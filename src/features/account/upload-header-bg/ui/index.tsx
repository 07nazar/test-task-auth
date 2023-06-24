import { type FC } from 'react'
import { Button } from 'src/shared/ui/button'
import { UploadSolid } from 'src/shared/icons/ui/upload-solid'
import { PictureIcon } from 'src/shared/icons'

import classNames from 'classnames'
import styles from './upload-header-bg.module.scss'

export const UploadHeaderBg: FC = () => (
  <div className={styles.absoluteUpload}>
    <Button
      className={classNames(styles.gap)}
      styleType='secondary'
      BeforeValue={UploadSolid}
      AfterValue={PictureIcon}>
      <label htmlFor='upload-header-bg' className={styles.pointer}>
        <input id='upload-header-bg' type='file' style={{ display: 'none' }} />
        Загрузить
      </label>
    </Button>
  </div>
)
