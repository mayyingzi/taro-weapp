/**
 * @field 接口请求 get post等
 * @author zhuxy(3205009763@qq.com)
 */
import Taro from '@tarojs/taro'
import {
  extend
} from 'lodash'
import errorHandle from './errorHandle'


// 后端是否支持json格式
// const contentType = 'application/x-www-form-urlencoded'
const contentType = 'application/json'

export default {
  get(url, data) {
    return this.comHttp({
      url: url,
      method: 'GET',
      data: data
    })
  },
  post(url, data) {
    return this.comHttp({
      url: url,
      method: 'POST',
      data: data
    })
  },

  comHttp(config, errors) {
    if (!config.url) {
      return Promise.reject(new Error('request url cannot be empty'));
    }
    config.url = HOST.api + config.url
    config.method = config.method.toUpperCase()
    const defaultOpt = {
      header: {
        'content-type': contentType,
      },
      // 系统参数
      data: {
        token: '25566333',
        'api_version': VERSION
      }
    }
    config.data = extend({}, defaultOpt.data, config.data)
    config = extend({}, defaultOpt, config)
    return new Promise(async (resolve, reject) => {
      Taro.showNavigationBarLoading()

      try {
        const res = await Taro.request(config)
        switch (res.statusCode) {
          case 200:
            Taro.hideNavigationBarLoading()

            return resolve(res.data.data)
          default:
            errors ? errorHandle.default(res.data) : errors(res.data)
            Taro.hideNavigationBarLoading()

            reject(new Error(res.data.msg))
        }


      } catch (error) {
        Taro.hideNavigationBarLoading()
        errors ? errorHandle.default(error) : errors(error)

        reject(new Error('网络请求异常'))
      }
    })
  }
}
