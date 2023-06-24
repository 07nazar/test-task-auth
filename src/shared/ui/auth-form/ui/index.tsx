import { type FC, Fragment, type HTMLProps } from 'react'
import { Title } from 'src/shared/ui/title/ui'
import { Button } from 'src/shared/ui/button'
import { Formik } from 'formik'
import { Input } from 'src/shared/ui/input'
import { type InputGroupDataProps } from 'src/features/auth/login/model'
import { type MySvgProps } from 'src/shared/icons/types/svg-type'
import styles from './auth-form.module.scss'

interface AuthFormProps extends HTMLProps<HTMLFormElement> {
  initialValues: Record<string, string>
  validationSchema: any
  titleValue: string
  submitForm: (data: Record<string, string>) => void
  inputGroup: InputGroupDataProps[]
  button: {
    type: 'button' | 'submit'
    beforeValue?: FC<MySvgProps>
    afterValue?: FC<MySvgProps>
    value: string
    isDisable?: boolean
  }
}

export const AuthForm: FC<AuthFormProps> = props => {
  const {
    titleValue,
    button,
    validationSchema,
    inputGroup,
    submitForm,
    initialValues,
  } = props

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}>
      {({
        handleSubmit,
        values,
        touched,
        handleBlur,
        handleChange,
        errors,
      }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <Title titleType='title'>{titleValue}</Title>
          <div className={styles.input_group}>
            {inputGroup.map(input => (
              <Fragment key={input.inputId}>
                <Input
                  onBlur={handleBlur}
                  error={!!errors[input.inputId] && !!touched[input.inputId]}
                  value={values[input.inputId]}
                  onChange={handleChange}
                  type={input.type}
                  BeforeElement={input.beforeElement}
                  AfterElement={input.afterElement}
                  inputId={input.inputId}
                  placeholder={input.placeholder}
                />

                {errors[input.inputId] && touched[input.inputId] && (
                  <div style={{ color: 'red' }}>{errors[input.inputId]}</div>
                )}
              </Fragment>
            ))}

            <Button
              type={button.type}
              styleType='primary'
              BeforeValue={button.beforeValue}
              AfterValue={button.afterValue}
              disabled={!!Object.keys(errors).length}>
              {button.value}
            </Button>
          </div>
        </form>
      )}
    </Formik>
  )
}
