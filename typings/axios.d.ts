import { AxiosRequestConfig } from 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    silent?: Boolean,
    loading?: Boolean,
  }
}