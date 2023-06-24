export interface InputGroupDataProps {
  inputId: string
  type: string
  beforeElement?: any
  afterElement?: any
  placeholder: string
}

export const inputGroup: InputGroupDataProps[] = [
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
