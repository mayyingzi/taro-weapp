import Taro, {
  Component
} from '@tarojs/taro'
import {
  View,
  Text,
  Button
} from '@tarojs/components'

import {userInfo} from '../../utils/common'

// ui
import {
  AtButton
} from 'taro-ui';

import './index.styl'


class LoginModle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoginHide: true
    }
  }
  componentDidMount() {

  }

  componentDidShow() {
    const userMsg = userInfo.get()
    this.setState({
      isLoginHide: !!userMsg
    })
    this.props.onSetBack(userMsg)
  }

  onGotUserInfo (e) {
    if(e.detail.userInfo) {
      // 成功授权
      userInfo.save(e.detail.userInfo)
      this.setState({
        isLoginHide: true
      })
      this.props.onSetBack(e.detail.userInfo)
    }

  }


  render() {
    return (
      <View className={`loginModel ${this.state.isLoginHide ? 'inhide' : ''}`}>
        <View className='main'>
          <View className='mask'></View>
          <View className='center'>
            <View className='box'>
              <View className='tit'>登录提醒</View>
              <View className='tips'>微信授权后才可进行下一步操作，</View>
              <View className='tips'>请前端设置</View>
            </View>
            {/* FIXME: 事件需使用on开头 */}
            <Button className='goSet' openType='getUserInfo' lang='zh_CN' onGetuserinfo={this.onGotUserInfo.bind(this)}>去设置</Button>
          </View>
        </View>
      </View>
    )
  }
}

export default LoginModle
