import request from '@/utils/request'

interface DemoReq {
  addr: string
}
export const getDemo = (params: DemoReq) => {
  return request<number[]>({
    url: '/localAfs/admin/user/info',
    params,
  })
}
