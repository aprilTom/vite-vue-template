import type { AxiosRequestConfig } from 'axios'
import axiosInstance from './request'

interface BasicResponse<T> {
  code: string
  data: T
  message: string
}

const request = <T>(config: AxiosRequestConfig): Promise<BasicResponse<T>> => {
  return new Promise((resolve, reject) => {
    axiosInstance(config)
      .then(res => resolve(res as unknown as BasicResponse<T>))
      .catch(err => reject(err))
  })
}

export default request
