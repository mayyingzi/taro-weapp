# taro-min
taro min


### 安装
安装 Taro 开发工具 @tarojs/cli

使用 npm 或者 yarn 全局安装

```
npm install -g @tarojs/cli
// 或
yarn global add @tarojs/cli
```
下载代码
```
git clone [仓库路径]
# 安装依赖
npm i
或者
yarn install
```

### 使用

文件目录如下：
```
├── dist                   编译结果目录
├── config                 配置目录
|   ├── dev.js             开发时配置
|   ├── evenConfig.js      存放常量的地方(api、一些配置项)
|   ├── index.js           默认配置
|   └── prod.js            打包时配置
├── src                    源码目录
|   ├── actions            redux里的actions
|   ├── constant           常量存放
|   ├── asset              图片等静态资源
|   ├── components         组件文件目录
|   ├── reducers           redux里的reducers
|   ├── store              redux里的store
|   ├── utils              存放工具类函数
|   ├── pages              页面文件目录
|   |   ├── index          index页面目录
|   |   |   ├── index.js   index页面逻辑
|   |   |   └── index.css  index页面样式
|   ├── app.css            项目总通用样式
|   └── app.js             项目入口文件
└── package.json
```
进入项目目录开始开发，可以选择小程序预览模式，或者h5预览模式，若使用微信小程序预览模式，则需要自行下载并打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，选择预览项目根目录。

**微信小程序编译预览模式:**


```
# npm script
npm run dev:weapp
# 或 仅限全局安装
taro build --type weapp --watch
```

**H5编译预览模式:**
```
# npm script
npm run dev:h5
# 或 仅限全局安装
taro build --type h5 --watch
```

**配置当前环境，打包常量**
```
设置script 参数(alpha、bata、release，分别对应内测、公测、正式常量) :--host=
具体执行指令：使用内测环境变量
# npm run dev:weapp --host=alpha
```


### 开发前注意
若使用 微信小程序预览模式 ，则需下载并使用[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)添加项目进行预览，此时需要注意微信开发者工具的项目设置
* 需要设置关闭ES6转ES5功能，开启可能报错
* 需要设置关闭上传代码时样式自动补全，开启可能报错
* 需要设置关闭代码压缩上传，开启可能报错
* 遇到 taro-ui 使用过程中，点击事件获取参数有问题，多半是版本问题，升级 taro(1.2.x以上) & taro/cli

