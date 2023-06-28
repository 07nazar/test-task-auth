import { createSlice } from '@reduxjs/toolkit'
import { fetchAllUsers, fetchProfile } from 'src/entities/user/api/user-api'

import { type IUser } from '../interfaces'

interface IUserInitialState {
  userDto: IUser | null
  isLoading: boolean
  isError: boolean
  users: IUser[] | null
}

const initialState: IUserInitialState = {
  userDto: null,
  isLoading: false,
  isError: false,
  users: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserData: state => {
      state.users = null
      state.userDto = null
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.userDto = action.payload
        state.isLoading = false
        state.isError = false
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.users = action.payload
        state.isLoading = false
        state.isError = false
      })
  },
})

export const { clearUserData } = userSlice.actions
