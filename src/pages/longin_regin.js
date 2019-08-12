import React, { Component } from 'react'
import { Button ,Icon,Toast,NavBar} from 'antd-mobile'
import { connect } from 'dva'
import router from 'umi/router'
var timer
const Tellogin=()=>{
    router.push('/Tellogin')
}
const Emilogin=()=>{
    Toast.fail('暂不支持邮箱登录', 1);
}
class longin_regin extends Component {
    Balck(){
        router.push('/')
    }
    componentDidMount(){
        this.mounted = true;
    }
    
componentWillUnmount(){
    this.mounted = false
    clearInterval(timer)
}
    render() {
        return (
            <div className="Login">
                
                <div className='buJu'>
                    <div>
                        <div>
                        <NavBar
                        mode="light"
                        icon={<Icon type="left" size='lg'/>}
                        onLeftClick={() => router.push('/')}
                        ></NavBar>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className="tellogin">
                        <Button type='warning' onClick={()=>Tellogin()} >手 机 号 登 录</Button>
                        <Button type='warning' onClick={()=>Emilogin()} >邮 箱 登 录</Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(state=>state.Musicdata)(longin_regin) 