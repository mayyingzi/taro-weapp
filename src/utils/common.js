import Taro, { saveFile } from '@tarojs/taro'

const PAGE_LEVEL_LIMIT = 10
// 处理微信跳转超过10层
const jumpUrl = (url, options = {}) => {
  const pages = Taro.getCurrentPages()
  let method = options.method || 'navigateTo'
  if (url && typeof url === 'string') {
    if (method == 'navigateTo' && pages.length >= PAGE_LEVEL_LIMIT - 3) {
      method = 'redirectTo'
    }

    if (method == 'navigateToByForce') {
      method = 'navigateTo'
    }

    if (method == 'navigateTo' && pages.length == PAGE_LEVEL_LIMIT) {
      method = 'redirectTo'
    }

    Taro[method]({
      url
    })
  }
}

/**
 * 回调参数
 */
let callbackData = (type, data) => {
  let datas = {}
  datas.msg = type
  datas.data = data
  return datas
}

/**
 * 用户手动授权
 */
const ShowModal = (fail, callback) => {
  if (fail.errMsg.split(':')[1] == 'fail auth deny') {
    Taro.showModal({
      title: '提示',
      content: '请允许授权以便为你提供更好的服务',
      showCancel: true,
      success: function (res) {
        if (res.confirm) {
          Taro.openSetting({
            success: (res) => {
              callback(true)
            }
          })
        } else if (res.cancel) {
          callback(false)
        }
      }
    })
  } else {
    callback(false)
  }
}

/**
 * 用户授权
 */
const Authorize = (scope, callback) => {
  Taro.authorize({
    scope
  }).then(
    success => {
      callback(callbackData(true, success))
    },
    fail => {
      ShowModal(fail, (data) => {
        if (data) {
          Authorize(scope, callback)
        } else {
          callback(callbackData(false, fail))
        }
      })
    }
  )
}

/**
 * login 登录
 */
const Login = () => {
  Taro.login().then(
    success => {
      console.log(success)
    },
    fail => {
      console.log(fail)
    }
  )
}

const userInfo = {
  key: 'USERINFOMSG',
  get()  {
    const data = Taro.getStorageSync(this.key)
    return data
  },

  save(data) {
    Taro.setStorageSync(this.key, data)
  }
}

export {
  jumpUrl,
  ShowModal,
  Authorize,
  Login,
  userInfo
}
