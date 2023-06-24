export interface InputGroupDataProps {
  inputId: string
  type: string
  beforeElement?: any
  afterElement?: any
  placeholder: string
}

export const inputGroup: InputGroupDataProps[] = [
  {
    inputId: 'name',
    type: 'text',
    placeholder: 'Full Name',
  },
  {
    inputId: 'email',
    type: 'email',
    placeholder: 'E-mail',
  },
  {
    inputId: 'password',
    type: 'password',
    placeholder: 'Password',
  },
]
