import Taro, {
  Component
} from '@tarojs/taro'

import {
  View,
  Text,
  Image,
  Block
} from '@tarojs/components'

import { AtIcon} from 'taro-ui'

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
      user: {
        avatarUrl: '',
        nickName: '未登录'
      },
      orderItem: [
        {
          desc: '电影票',
          key: 'movie',
          icon: 'star',
        },
        {
          desc: '演出票',
          key: 'perform',
          icon: 'tag',
        },
        {
          desc: '赛事票',
          key: 'match',
          icon: 'credit-card',
        },
        {
          desc: '周边',
          key: 'around',
          icon: 'equalizer',
        },
      ]
    }
  }
  componentWillMount () {

  }

  userBack(data) {
    if(data) {
      this.setState({
        user: data
      })
    }
  }

  render() {
    const  Image= this.state.user.avatarUrl ? (<Image src={this.state.user.avatarUrl}></Image>) : ''
    return (
      <View className='userIndex'>
        <LoginModel onSetBack={this.userBack.bind(this)}></LoginModel>
        <View className='header'>
          <View className='avatar'>
            {Image}
          </View>
          <View className='name'>{this.state.user.nickName}</View>
        </View>
        <View className='orderItem perPart'>
          <View className='tit'>我的订单</View>
          <View className='item'>
            {this.state.orderItem.map((item, index)=> {
              return (
                <View className='per' data-key={item.key}>
                  <AtIcon value={item.icon} size='24' color='#f03d37'></AtIcon>
                  <View className='desc'>{item.desc}</View>
                </View>

              )
            })}
          </View>
        </View>

        <View className='activeItem perPart'>
          <View className='tit'>
            <View className='iflex'>会员专享活动</View>
            <AtIcon value='chevron-right' size='24' color='#f03d37'></AtIcon>
          </View>
          <View className='acBox'>
            <View className='acPer'>
              <Image className='img' src='https://p1.meituan.net/440.0/movie/902a8e428171c190ee91a7d16ba912ca9499738.jpg@388w_388h_1e_1c'></Image>
              <View className='txt'>签到兑奖券，福利拿不停~~~</View>
            </View>
          </View>
        </View>
        <Footer curInd={2}></Footer>
      </View>
    )
  }
}

export default UserIndex
