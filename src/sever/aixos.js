import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import {Geturl} from './config'
const Inertsever = axios.create({
    timeout:5000,
    baseURL:Geturl
})
Inertsever.interceptors.request.use(
    function(config){
        nprogress.start()
        return config
    },
    function(error){
        return Promise.reject(error)
    }
)
Inertsever.interceptors.response.use(
    function(response) {
        nprogress.done()
      return response;
    },
    function(error) {
       console.dir(error);
      // 401未授权 跳转登录页
      // eslint-disable-next-line eqeqeq
      return Promise.reject(error);
    }
  );
export const get = (url,params) =>{
    return Inertsever.get(url,{
            params
        }
    )
}
export const post = (url ,data) => Inertsever.post(url,data)