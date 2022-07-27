import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    silent?: Boolean,
    loading?: Boolean,
  }

  export interface AxiosRequestHeaders {
    'access-token': string
    'tenant-id': string
    'a-request-id': string
  }
}
