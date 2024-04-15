import axios from 'axios';
axios.defaults.timeout = 60000;

//请求拦截
axios.interceptors.request.use(config => {
  // config.headers['appKey'] = "xxxxxxxx";设置header

  return config
}, error => {
  Promise.reject(error)
})

//返回数据拦截器  使用axios拦截器来处理公共返回信息
axios.interceptors.response.use(
  res => {
 
    //请求成功对应响应数据做处理
    //该返回的数据则是axios.then(res)中接受的数据
    // && res.data.success

    //单独判断获取ip的接口
    if (
      res.config.url.includes('xxxxx')) {
      return res;
    }

    if (res.config.url.includes('xxxxxxx')) {
      if (res.status == 'xxxxx') {
        return res;
      } else if (res.config.url.includes("xxxxx")) {}
      return res;
    } else {
      return res;
    }
  },
  err => {
    //在请求错误时要做的事儿
    //该返回数据则是axios.catch(err)中接收的数据
  }
);
export default axios;