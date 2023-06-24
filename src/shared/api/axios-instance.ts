import axios from 'axios'
import Cookies from 'js-cookie'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  config => {
    const token = Cookies.get('accessToken')
    if (token && config.headers) {
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  async error => await Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config
    if (error.response.status === 401) {
      return await Promise.reject(error)
    }

    if (error.response.status === 401 && originalRequest._retry === false) {
      originalRequest._retry = true

      return await axiosInstance.post('/auth/refresh').then(async res => {
        if (res.status === 201) {
          const token = Cookies.get('accessToken')
          if (token !== undefined) {
            axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
          }
        }
        return await axiosInstance(originalRequest)
      })
    }

    return await Promise.reject(error)
  }
)
