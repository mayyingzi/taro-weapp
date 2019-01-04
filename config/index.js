const envConfig = require('./evnConfig')

const config = {
  projectName: 'taro-min',
  date: '2019-1-4',
  // 设计稿尺寸
  designWidth: 750,
  // 不同尺寸的换算规则
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  // 设置源码存放位置
  sourceRoot: 'src',
  // 代码编译后的生产目录
  outputRoot: 'dist',
  // 设置各个端通用的编辑过程配置，babel、js/css等
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread'
      ]
    }
  },
  // 全局变量，直接引用，一般，接口配置常量
  defineConstants: {
    TESTO: '测试常量'
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        pxtransform: {
          enable: true,
          config: {

          }
        },
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    }
  }
}

module.exports = function (merge) {
  console.log(process.env.NODE_ENV)
  const defineConstants = {
    VERSION: envConfig.version,
    // 默认内测环境 --host=alpha
    HOST: envConfig[process.env.npm_config_host || 'alpha']
  }
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'), {
      defineConstants
    })
  }
  return merge({}, config, require('./prod'), {
    defineConstants
  })
}
