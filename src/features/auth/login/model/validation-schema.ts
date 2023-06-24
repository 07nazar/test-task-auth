import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .min(1, 'To Short!')
    .max(20, 'To Long!')
    .required('Email name is required'),
  password: yup
    .string()
    .min(6, 'To Short!')
    .max(30, 'To Long!')
    .required('Password name is required'),
})

export type TypeLoginSchema = yup.InferType<typeof loginSchema>
