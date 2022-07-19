import axios from 'axios'
import iViewUi from '_c/iview/index'
import { v4 as uuid } from 'uuid'
import store from '@/store'
import errorCode from '@/const/errorcode/errorCode'
import { router } from '@/router/index'
axios.defaults.timeout = 30000
// 返回其他状态吗
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500 // 默认的
}
let lastNoticeTime = (new Date()).getTime()
let warnKickOut = false
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true
class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = process.env.NODE_ENV === 'development' ? '' : baseUrl
    this.queue = {}
  }

  getInsideConfig() {
    const config = {
      baseURL: process.env.NODE_ENV === 'development' ? '' : this.baseUrl,
      headers: {
        //
      },
    }
    return config
  }

  destroy(url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }

  interceptors(instance, options) {
    const url = options.url
    // 请求拦截
    instance.interceptors.request.use((config) => {
      if (warnKickOut)
        throw new Error('登录状态失效')

      // 添加全局的loading...
      if (config.method && config.method.toLowerCase() === 'get') {
        if (config.params)
          config.params._afst = (new Date()).getTime()

        else
          config.params = { _afst: (new Date()).getTime() }
      }
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      const tenantId = store.getters.tenantId
      if (!tenantId || tenantId === '')
        throw new Error('请从正确页面登录')

      this.queue[url] = true
      const isToken = (config.headers || {}).isToken === false
      const token = store.getters.access_token
      if (token && !isToken)
        config.headers['access-token'] = token// token

      config.headers['tenant-id'] = tenantId// 租户id
      config.headers['a-request-id'] = (uuid()).replace(/-/g, '')// 请求ID
      return config
    }, (error) => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use((res) => {
      this.destroy(url)
      const status = Number(res.status) || 200
      const message = res.data.msg || errorCode[status] || errorCode.default
      if (process.env.NODE_ENV === 'development') {
        // console.log(res)
        // console.log(options)
      }
      if (status === 401 && !url.includes('userlogin')) {
        store.dispatch('CLEAN_SESSION').then(() => {
          iViewUi.Message.error({
            content: '登录已失效请重新登录',
            duration: 2,
          })
          router.push({
            name: 'login',
          })
        })
        return
      }
      if (status === 403) {
        iViewUi.Message.error({
          content: '权限错误，您没有权限访问，请联系管理员',
          duration: 3,
        })
        router.push({
          name: 'sub-403',
        })
        return
      }
      if (!options.silent) {
        store.dispatch('UPDATE_LAST_ACCESS_TIME').then(() => {
        })
      }
      if (!options.responseType) {
        if ((status !== 200 || res.data.code !== errorCode.SYS_CODE.SUCCESS) && !options.silent) {
          if (res.data.code === errorCode.SYS_CODE.USER_KICK_OUT) {
            if (!warnKickOut) {
              iViewUi.Modal.error({
                title: '登录状态失效',
                content: errorCode[errorCode.SYS_CODE.USER_KICK_OUT],
                onOk: () => {
                  store.dispatch('CLEAN_SESSION').then(() => {
                    router.push({
                      name: 'login',
                    })
                    warnKickOut = false
                  })
                },
              })
            }
            return Promise.reject(new Error('登录状态失效'))
          }
          if (((new Date()).getTime() - lastNoticeTime) < 300) {
            console.log('通知间隔小于300ms---不通知')
          }
          else {
            iViewUi.Message.error({
              content: message,
              duration: 5,
            })
            lastNoticeTime = ((new Date()).getTime())
          }
          return Promise.reject(new Error(message))
        }
        if (options.original)
          return res

        return res.data
      }
      else {
        if (status !== 200 && !options.silent) {
          if (((new Date()).getTime() - lastNoticeTime) < 300) {
            console.log('通知间隔小于300ms---不通知')
          }
          else {
            iViewUi.Message.error({
              content: message,
              duration: 5,
            })
            lastNoticeTime = ((new Date()).getTime())
          }
          return Promise.reject(new Error(message))
        }
        return res
      }
    }, (error) => {
      this.destroy(url)
      return Promise.reject(error)
    })
  }

  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options)
    return instance(options)
  }
}

export default HttpRequest
