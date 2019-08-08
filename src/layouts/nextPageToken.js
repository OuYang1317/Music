import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router';
function nextPageToken(props) {
    console.log(props.children)
    return (
        <div>
            <div>
            <NavBar mode="light"
                    leftContent="返回"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>router.go(-1)}>
                    歌单详情
            </NavBar>
            </div>
            <div>
                <h1>歌单内容</h1>
            </div>
        </div>
    )
}

export default nextPageToken
