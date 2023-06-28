import { createSlice } from '@reduxjs/toolkit'
import { login, registration } from 'src/entities/session'
import Cookies from 'js-cookie'
import { logout } from 'src/entities/session/api/auth-async-thunks'

interface SessionSliceState {
  userId: string | null
  isAuthorized: boolean
  error: string | null
}

const initialState: SessionSliceState = {
  userId: null,
  isAuthorized: !!Cookies.get('accessToken'),
  error: null,
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null
    },
    clearSessionData: state => {
      Cookies.remove('accessToken')
      Cookies.remove('refreshToken')
      state.isAuthorized = false
      state.userId = null
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state: SessionSliceState, action) => {
        Cookies.set('accessToken', action.payload.token)
        state.isAuthorized = true
        state.userId = action.payload.id
      })
      .addCase(registration.fulfilled, (state: SessionSliceState, action) => {
        Cookies.set('accessToken', action.payload.token)
        state.isAuthorized = true
        state.error = ''
      })
      .addCase(logout.fulfilled, (state: SessionSliceState) => {
        Cookies.remove('accessToken')
        Cookies.remove('refreshToken')
        state.isAuthorized = false
        state.userId = null
        state.error = null
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.error = ''
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          Cookies.remove('accessToken')
          Cookies.remove('refreshToken')
          state.isAuthorized = false
          state.error = action.payload
        }
      )
  },
})

export const { clearSessionData, clearError } = sessionSlice.actions
