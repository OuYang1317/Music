import React from 'react'
import router from 'umi/router'
function Login_Home() {
    const tap = () =>{
        router.push('longin_regin/loging.js')
    }
    return (
        <div className="bgImg">
            <button onClick={()=>tap()}>跳转</button>
        </div>
    )
}

export default Login_Home
