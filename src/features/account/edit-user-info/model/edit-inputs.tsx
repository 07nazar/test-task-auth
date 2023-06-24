interface IEditInput {
  inputId: string
  type: string
  placeholder: string
}

export const editInputs: IEditInput[] = [
  {
    inputId: 'name',
    type: 'text',
    placeholder: 'Имя',
  },
  {
    inputId: 'account_slug',
    type: 'text',
    placeholder: 'Адрес профиля',
  },
]
