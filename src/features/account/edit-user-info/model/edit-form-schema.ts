import * as yup from 'yup'

export const editFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(1, 'To Short!')
    .max(20, 'To Long!')
    .required('Name is required'),
  account_slug: yup
    .string()
    .min(3, 'To Short!')
    .max(25, 'To Long!')
    .required('Slug is required'),
  bio: yup.string().max(300, 'To Long!'),
})
