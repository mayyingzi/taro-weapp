/**
 * @field 接口请求错误处理
 * @author zhuxy(3205009763@qq.com)
*/
import Taro from '@tarojs/taro'

const errorHandlers = {
    // 登录处理
    '106'() {
        // TODO:登陆处理
    },
    default(msg, code) {
        console.log(`unknown error:${msg}`);
        Taro.showToast({
            title: msg || code || '网络请求异常',
            icon: 'none',
            mask: true,
        })
    }

};



export default errorHandlers;
