import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from 'src/shared/api/axios-instance'
import { type AxiosError } from 'axios'
import { type IUser } from 'src/entities/user/interfaces'

export const fetchProfile = createAsyncThunk(
  'user/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<IUser>(`user/profile`)
      return response.data
    } catch (error) {
      const errorObject = error as AxiosError
      return rejectWithValue(errorObject.message)
    }
  }
)
