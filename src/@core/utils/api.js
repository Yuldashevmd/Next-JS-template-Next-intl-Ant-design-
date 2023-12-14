import axios from 'axios'
import { toast } from 'react-toastify'
import { getCookie } from '../service/helper'

export const api = axios.create({ baseURL: 'https://example.uz/' })

// Interceptor for all api request
api.interceptors.request.use(
  function (config) {
    const token = getCookie('access_token')
    config.headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...config.headers
    }

    return config
  },
  function (error) {
    toast.error(error.message, {
      position: 'bottom-right',
      hideProgressBar: false
    })

    return Promise.reject(error)
  }
)

// Interceptor for all api response
api.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (!error.response) {
      error['response'] = {
        data: {
          errors: [
            {
              message: 'Проверьте подключение к Интернету или Сервер не отвечает'
            }
          ]
        }
      }

      return Promise.reject(error)
    }
    if (error.response.status === 400) {
      return toast.warn(error.response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: false
      })
    }
    if (error.response.status === 422) {
      return toast.warn(error.response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: false
      })
    }
    if (error.response.status === 401) {
      return toast.error(error.response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: false
      })
    }

    return toast.error(error.response.data.message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: false
    })
  }
)
