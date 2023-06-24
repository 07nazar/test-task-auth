import { type FC } from 'react'

import { CameraIcon } from 'src/shared/icons/ui/camera-icon'

import styles from './upload-avatar.module.scss'

export const UploadAvatar: FC = () => (
  <label htmlFor='upload-file'>
    <input id='upload-file' type='file' style={{ display: 'none' }} />
    <div className={styles.uploadAvatar}>
      <CameraIcon width='50' height='50' fill='white' />
    </div>
  </label>
)
