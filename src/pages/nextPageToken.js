import { NavBar, Icon } from 'antd-mobile';
import Router from 'umi/router'
import { parse } from 'qs'
import SongList from '../component/SongList'
import React from 'react'
function nextPageToken(props) {
    const queryData = parse(props.location.query,{
        ignoreQueryPrefix:true 
    })
    return (
        <div>
          <div className="xiangqing">
                 <div className="listNav">
            <NavBar mode="light"
                    leftContent="返回"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>Router.go(-1)}>
                    歌单详情
            </NavBar>
            </div>
            <div>
                <SongList  id= {queryData.id} />
            </div>
            </div>  
        </div>
    )
}

export default nextPageToken




