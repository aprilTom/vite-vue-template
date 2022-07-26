export const errorCode: Record<string, any> = {
  '000': '操作太频繁，请勿重复请求',
  '401': '当前操作没有权限',
  '403': '当前操作没有权限',
  '404': '资源不存在',
  '426': '用户名不存在或密码错误',
  '428': '验证码错误,请重新输入',
  '429': '请求过频繁',
  '40001': '您的账号已在其他设备登录,您已被强制退出',
  'default': '连接网络失败,请稍后再试',
  'SYS_CODE': {
    SUCCESS: '0000',
    FAIL: '9999',
    USER_KICK_OUT: '40001',
  },
}
