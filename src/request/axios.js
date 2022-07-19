import HttpRequest from '@/libs/request/HttpRequest'
import config from '@/config'
export default new HttpRequest(config.getBaseUrl())
