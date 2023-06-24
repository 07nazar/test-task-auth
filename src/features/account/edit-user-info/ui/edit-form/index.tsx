import { type FC, type FormHTMLAttributes, Fragment } from 'react'
import { Title } from 'src/shared/ui/title/ui'
import { Input } from 'src/shared/ui/input'
import styles from 'src/features/account/edit-user-info/ui/edit-form/edit-form.module.scss'
import { Button } from 'src/shared/ui/button'
import classNames from 'classnames'
import { useMatchMedia } from 'src/shared/lib/hooks/use-media-match'
import { useSliceSelector } from 'src/shared/lib/hooks/use-app-selector'
import { Formik } from 'formik'
import { editFormSchema } from '../../model/edit-form-schema'
import { editInputs } from '../../model/edit-inputs'
import { submitForm } from '../../model/submit-edit-form'

interface EditFormProps extends FormHTMLAttributes<HTMLFormElement> {
  closeMenu: (isOpen: boolean) => void
  formClassName?: string
}

export const EditForm: FC<EditFormProps> = props => {
  const { closeMenu, formClassName = '' } = props
  const { isTablet, isMobile } = useMatchMedia()
  const { userDto } = useSliceSelector('user', state => state)

  if (!userDto) {
    return null
  }

  const initialValues: Record<string, string> = {
    name: userDto.name,
    account_slug: userDto.slug,
    bio: userDto.bio,
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={editFormSchema}
      onSubmit={data => {
        submitForm(data)
        closeMenu(false)
      }}>
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        touched,
        values,
      }) => (
        <form
          onSubmit={handleSubmit}
          className={classNames(styles.editForm, formClassName)}>
          <Title titleType='title'>Редактировать профиль</Title>

          {editInputs.map(input => (
            <Fragment key={input.inputId}>
              <Input
                name={input.inputId}
                inputId={input.inputId}
                className={classNames(styles.input)}
                type={input.type}
                placeholder={input.placeholder}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors[input.inputId] && touched[input.inputId]}
                value={values[input.inputId]}
              />
              {errors[input.inputId] && touched[input.inputId] && (
                <p className='red-error'>{errors[input.inputId]}</p>
              )}
            </Fragment>
          ))}

          <textarea
            className={classNames(styles.textarea, {
              [styles.textareaMobile]: isMobile || isTablet,
            })}
            name='bio'
            onChange={handleChange}
            value={values.bio}
            onBlur={handleBlur}
          />
          {errors.bio && touched.bio && (
            <p className='red-error'>{errors.bio}</p>
          )}

          <div className={classNames(styles.buttonGroup)}>
            <Button
              onClick={() => {
                closeMenu(false)
              }}
              className={classNames(styles.button)}
              styleType='secondary'>
              Отмена
            </Button>
            <Button
              type='submit'
              className={classNames(styles.button)}
              styleType='primary'>
              Сохранить
            </Button>
          </div>
        </form>
      )}
    </Formik>
  )
}
