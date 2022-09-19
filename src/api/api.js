import axios from 'axios';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  console.log('发送请求了')
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  return Promise.reject(error);
});


// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  return Promise.reject(error);
});

// 所有的接口定义
const prefix = '/cle-subsidy';
// 暂存接口
export function temporaryStorage(req) {
  return axios.post(`${prefix}/base/temporaryStorage`, req);
}
// 查询暂存接口
export function queryTemporaryStorage(req) {
  return axios.get(`${prefix}/base/queryTemporaryStorage`, {params: req});
}
