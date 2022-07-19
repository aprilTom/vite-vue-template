import axios from 'axios'
// import { set } from 'lodash-es'
import { v4 as uuid } from 'uuid'
import useAppStore from '@/store/app'
import { errorCode } from '@/constant'

const appStore = useAppStore()

const instance = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: '/',
  timeout: 30000,
  withCredentials: true,
})

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    console.log('请求拦截')
    const params = config.params || {}
    const headers = config.headers || {}

    params._afst = (new Date()).getTime()
    headers['access-toke'] = appStore.access_token
    headers['tenant-id'] = appStore.tenantId
    headers['a-request-id'] = uuid().replace(/-/g, '')
    return config
  },
  error => Promise.reject(error),
)

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    const status = Number(res.status) || 200
    const message = res.data.msg || errorCode[status] || errorCode.default
    console.log('interceptors.response', res, message)
    return res
  },
  error => Promise.reject(error),
)
export default instance
