import React, { Component } from 'react'
import { NavBar,Button ,Icon,Toast,InputItem} from 'antd-mobile'
import router from 'umi/router'
import { Login} from '../Tools/DataUrl';
const Loginbtn = (a,b) =>{
    console.log(a,b)
    Login(a,b).then((res)=>{
        console.log(res)
        console.log(res.headers)
        localStorage.setItem('id', JSON.stringify(res.data.account.id))
        // router.push('/my_putchar')
    }).catch(err=>{
        if(err.response.data.code !== "200"){
            Toast.fail(err.response.data.msg, 2);
        }
    })
}
export default class Tellogin extends Component {
    Balck(){
        router.go(-1)
    }
    render() {
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
                    <div className='phonetel'>
                    <InputItem type="text" placeholder="请输入手机号"ref="tel">手机号码</InputItem>
                    <div>
                    <InputItem type="password" placeholder="请输入手机号"ref="psd">密码</InputItem>
                    </div>
                        
                    </div>
                    <div className='LoginBtn'>
                        <Button type='warning' inline size='lg'onClick={()=>Loginbtn(this.refs.tel.state.value,this.refs.psd.state.value)} >登录</Button>
                    </div>
                </div>
            </div>
        )
    }
}
