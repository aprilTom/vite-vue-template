import axios from '@/utils/request'

export const getUserInfo = (params?: Record<string, any>) => {
  return axios({
    url: '/admin/user/info',
    params,
  })
}

export const getDemo = (params?: Record<string, any>) => {
  return axios({
    url: '/admin/user/info',
    params,
  })
}
