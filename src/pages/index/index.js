import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
// UI
import {AtButton, AtFloatLayout, AtSegmentedControl, AtIcon, AtTabBar} from 'taro-ui'

import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import Http from '../../utils/network/http'



import './index.styl'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor (props) {
    super(props)
    this.state = {
      floatTit: '这是个标题',
      floatOpen: false,
      curSeg: 0,
      tabCur: 0,
      segmentArr: ['标签页1', '标签页2', '标签页3']
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  async componentDidMount () {
    // dom渲染完成
    // console.log(this.refs.myinput)
    // console.log(process.env.TARO_ENV)
    // console.log(TESTO)
    // console.log(HOST)
    const res = await Http.get('/query', {
      name: '名称'
    })
    console.log(res)
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  handleClose () {
    this.setState({
      floatOpen: false
    })
  }
  toggleFloat (e) {
    e.stopPropagation()
    this.setState({
      floatOpen: true
    })
  }
  segmentClick (value) {
    this.setState({
      curSeg: value
    })
  }
  // tab点击
  tabClick (value) {
    this.setState({
      tabCur: value
    })
  }
  render () {
    return (
      <View className='indexPage'>
        <AtIcon value='home' size='30' color='#F00'></AtIcon>
        <AtIcon value='user' size='30' color='#F00'></AtIcon>
        <AtIcon value='shopping-cart' size='30' color='#F00'></AtIcon>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
        <AtButton onClick={this.toggleFloat.bind(this)}>显示浮动层</AtButton>
        <AtFloatLayout isOpened={this.state.floatOpen} title={this.state.floatTit} onClose={this.handleClose}>
          这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
          随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
        </AtFloatLayout>
        <AtSegmentedControl
          className='tabMin'
          values={this.state.segmentArr}
          onClick={this.segmentClick.bind(this)}
          current={this.state.curSeg}
        />
        {
        this.state.curSeg === 0
          ? <View className='tab-content'>1</View>
          : null
        }
        {
          this.state.curSeg === 1
          ? <View className='tab-content'>2</View>
          : null
        }
        {
          this.state.curSeg === 2
          ? <View className='tab-content'>3</View>
          : null
        }

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

export default Index
