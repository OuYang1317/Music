import React, { Component } from 'react'
import { NavBar,Button ,Icon,Toast,InputItem} from 'antd-mobile'
import router from 'umi/router'
import { Login } from '../Tools/DataUrl';
const Loginbtn = (a) =>{
    console.log('aa')
    console.log(a)
}
// 获取验证码
const Getcode = (aa,Point) =>{
    var sum = 60
    console.log(aa)
    Point.setState({
        btnbuffer:true
    })
    var timr = setInterval(function(){
        sum--
        Point.setState({
            btnvalue:sum+'秒'
        })
        if(sum<0){
            clearInterval(timr)
            Point.setState({
                btnbuffer:false,
                btnvalue:"获取验证码",
            })
        }
    },1000)
}
export default class Tellogin extends Component {
            constructor(){
                super()
                this.state={
                    btnbuffer:false,
                    btnvalue:"获取验证码",
                }
            }
    Balck(){
        router.go(-1)
    }
    render() {
        const { btnbuffer,btnvalue} = this.state
        return (
            <div className="TElLogin">
                <div>
                <div>
                <NavBar
                        mode="light"
                        icon={<Icon type="left" size='md' />}
                        onLeftClick={() => router.go(-1)}
                        >手机登录</NavBar>
                </div>
                    <div className='phonetel'  >
                    <InputItem type="phone" placeholder="请输入手机号"ref="tel">手机号码</InputItem>
                    <div className='CodeContent'>
                        <div className='Code'>
                        <InputItem type="text" >验 证 码</InputItem>
                        </div>
                        <div className='GetCode'>
                            <Button type="primary" inline disabled ={btnbuffer} onClick={()=>Getcode(this.refs.tel.state.value,this)}>{btnvalue}</Button>
                        </div>
                    </div>
                        
                    </div>
                    <div className='LoginBtn'>
                        <Button type='warning' inline size='lg'onClick={()=>Loginbtn(this.refs.tel.state.value)} >登录</Button>
                    </div>
                </div>
            </div>
        )
    }
}
