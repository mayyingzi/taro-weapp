import Taro, {
  Component
} from '@tarojs/taro'

import {
  View,
  Text
} from '@tarojs/components'
import Footer from '../../components/footer'
import LoginModel from '../../components/loginModel/index'



import './index.styl'

class UserIndex extends Component {
  config = {
    navigationBarTitleText: '我的'
  }

  constructor (props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount () {

  }

  render() {
    return (
      <View className='orderIndex'>
        <LoginModel></LoginModel>

        <Text>我的，开发中。。。</Text>
        <Footer curInd={2}></Footer>
      </View>
    )
  }
}

export default UserIndex
