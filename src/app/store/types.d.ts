import { type store } from 'src/app/store'

declare global {
  type RootState = ReturnType<typeof store.getState>
  type SliceNames = keyof RootState
  type AppDispatch = typeof store.dispatch
}
