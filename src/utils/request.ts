import axios from 'axios'

const instance = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: '/',
  timeout: 30000,
  // withCredentials: true,
})

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    const params = config.params || {}
    console.log('config', config)

    params.timestramp = new Date().getTime()

    return config
  },
  error => Promise.reject(error),
)

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    console.log('响应拦截', res)
    // if (res.status === 200)
    //   return Promise.reject('服务异常啊啊啊')

    const status = Number(res.status) || 200

    if (status === 401 && res.config.url?.includes('userlogin')) {
      console.log('401111111111')
      return
    }

    if (status === 403) {
      console.log('4033333333333')
      return
    }

    return res
  },
  (error) => {
    console.log('响应拦截里的error函数', error)
    return Promise.reject(error)
  },
)
export default instance
