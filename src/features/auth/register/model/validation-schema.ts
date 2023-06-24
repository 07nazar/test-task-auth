import * as yup from 'yup'

export const registerSchema = yup.object().shape({
  name: yup.string().min(3, 'To short!').max(20, 'To long!').required(),
  email: yup
    .string()
    .email()
    .min(1, 'To Short!')
    .max(30, 'To Long!')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'To Short!')
    .max(30, 'To Long!')
    .required('Password is required'),
})

export type TypeLoginSchema = yup.InferType<typeof registerSchema>
