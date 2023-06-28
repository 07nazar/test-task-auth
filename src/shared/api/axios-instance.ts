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
    const config = error?.config

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true

      const response = await axios.get<{ accessToken: string }>(
        'http://localhost:3433/auth/refresh',
        {
          withCredentials: true,
        }
      )

      if (response.data.accessToken) {
        Cookies.set('accessToken', response.data.accessToken)
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${response.data.accessToken}`,
        }
      }

      return await axiosInstance(config)
    }
    return await Promise.reject(error)
  }
)
