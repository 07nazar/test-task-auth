import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from 'src/shared/api/axios-instance'
import { type LoginResponse } from 'src/entities/session/api/types'
import { type AxiosError } from 'axios'

export const login = createAsyncThunk(
  'session/loginThunk',
  async ({ email, password }: Record<string, string>, { rejectWithValue }) => {
    try {
      if (email === '' || password === '') {
        throw Error('Не заповнені дані')
      }

      return await axiosInstance
        .post<LoginResponse>('auth/login', {
          email,
          password,
        })
        .then(res => res.data)
    } catch (error) {
      const errorObject = error as AxiosError
      return rejectWithValue(errorObject.message)
    }
  }
)

export const registration = createAsyncThunk(
  'session/registrationThunk',
  async (
    { name, email, password }: Record<string, string>,
    { rejectWithValue }
  ) => {
    try {
      if (name === undefined || email === undefined || password === undefined) {
        throw Error('Не заповнені дані')
      }
      return await axiosInstance
        .post<LoginResponse>('auth/registration', {
          name,
          email,
          password,
        })
        .then(res => res.data)
    } catch (error) {
      const errorObject = error as AxiosError
      return rejectWithValue(errorObject.message)
    }
  }
)

export const logout = createAsyncThunk(
  'session/logoutThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post<{ ok: boolean }>('auth/logout')

      return response.data.ok
    } catch (error) {
      const errorObject = error as AxiosError
      return rejectWithValue(errorObject.message)
    }
  }
)
