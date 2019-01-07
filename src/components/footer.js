import Taro, {
  Component
} from '@tarojs/taro'
// ui
import {
  AtTabBar
} from 'taro-ui'
import { View } from '@tarojs/components';

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tabCur: 0,
    }
  }
  // tab点击
  tabClick (value) {
    this.setState({
      tabCur: value
    })
  }

  render () {
    return(
      <View className='footerMain'>
        <AtTabBar
          fixed
          tabList={[
            { title: '待办事项', iconType: 'bullet-list', text: 'new' },
            { title: '拍照', iconType: 'camera' },
            { title: '文件夹', iconType: 'folder', text: '100', max: '99' }
          ]}
          onClick={this.tabClick.bind(this)}
          current={this.state.tabCur}
        />
      </View>
    )
  }
}

export default Footer
