import { NavBar, Icon } from 'antd-mobile';
import React, { Component } from 'react'
import Router from 'umi/router'
import { parse } from 'qs'
import SongList from '../component/SongList'
 class nextPageToken extends Component {
    render() {
        return (
            <div>
          <div className="xiangqing">
            <div>
            <div className="listNav">
                <NavBar mode="light"
                    leftContent="返回"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>Router.go(-1)}>
                    歌单详情
            </NavBar>
            <div className="item">
                <div className="commit">
                    <div className="imagebox"></div>
                </div>
            </div>
            </div>
            <SongList  id = {parse(this.props.location.query,{ignoreQueryPrefix:true}).id} />
            </div>
            </div>  
        </div>
        )
    }
}

export default nextPageToken
