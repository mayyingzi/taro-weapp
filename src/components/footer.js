import Taro, {
  Component
} from '@tarojs/taro'
// common uitls
import {jumpUrl} from '../utils/common'
// ui
import {
  AtTabBar
} from 'taro-ui'
import { View } from '@tarojs/components';

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tabUrl: [
        '/pages/index/index',
        '/pages/order/index',
        '/pages/user/index'
      ],
    }
  }
  // tab点击
  tabClick (value) {
    // console.log(`当前的索引值：${value}`)
    // console.log(`curInd：${this.props.curInd}`)
    this.props.curInd
    if(value === this.props.curInd) {
      return
    }

    jumpUrl(this.state.tabUrl[value], {
      method: 'redirectTo'
    })

  }

  render () {
    return(
      <View className='footerMain'>
        <AtTabBar
          fixed
          tabList={[
            { title: '首页',iconPrefixClass: 'iconfont', iconType: 'home', text: '' },
            { title: '订单', iconPrefixClass: 'iconfont', iconType: 'order'},
            { title: '我的', iconPrefixClass: 'iconfont', iconType: 'wode'}
          ]}
          onClick={this.tabClick.bind(this)}
          current={this.props.curInd}
        />
      </View>
    )
  }
}

export default Footer
