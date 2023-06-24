import { configureStore } from '@reduxjs/toolkit'
import { sessionSlice } from 'src/entities/session'
import { userSlice } from 'src/entities/user'

export const store = configureStore({
  reducer: {
    [sessionSlice.name]: sessionSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
})
