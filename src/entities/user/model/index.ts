import { createSlice } from '@reduxjs/toolkit'
import { fetchProfile } from 'src/entities/user/api/user-api'

import { type IUser } from '../interfaces'

interface IUserInitialState {
  userDto: IUser | null
  isLoading: boolean
  isError: boolean
}

const initialState: IUserInitialState = {
  userDto: null,
  isLoading: false,
  isError: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.userDto = action.payload
      state.isLoading = false
      state.isError = false
    })
  },
})

// export const { clearSessionData, clearError } = sessionSlice.actions
