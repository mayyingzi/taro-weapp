import Taro, {
  Component
} from '@tarojs/taro'

import { View, Text } from '@tarojs/components'
import Footer from '../../components/footer'

import {Login} from '../../utils/common'


import './index.styl'

class OrderIndex extends Component {
  config = {
    navigationBarTitleText: '订单'
  }

  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount () {
    Login()
  }





  render () {
    return (
      <View className='orderIndex'>
        <Text>订单页，开发中。。。</Text>
        <Footer curInd={1}></Footer>

      </View>
    )
  }
}

export default OrderIndex
