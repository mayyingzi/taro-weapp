import Taro, {
  Component
} from '@tarojs/taro'
import {
  View,
  Text,
  Button
} from '@tarojs/components'

// ui
import {
  AtButton
} from 'taro-ui';

import './index.styl'


class LoginModle extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {

  }

  render() {
    return (
      <View className='loginModel'>
        <view className='main'>
          <View className='mask'></View>
          <View className='center'>
            <View className='box'>
              <View className='tit'>登录提醒</View>
              <View className='tips'>微信授权后才可进行下一步操作，</View>
              <View className='tips'>请前端设置</View>
            </View>
            <Button className='goSet'>去设置</Button>
          </View>
        </view>
      </View>
    )
  }
}

export default LoginModle
