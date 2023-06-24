import { store } from 'src/app/store'
import { Provider } from 'react-redux'
import { type ComponentType } from 'react'

export const withStore = (WrappedComponent: ComponentType) => () =>
  (
    <Provider store={store}>
      <WrappedComponent />
    </Provider>
  )
