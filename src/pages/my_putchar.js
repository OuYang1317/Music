import React, { Component } from 'react'
import {List} from 'antd-mobile'
import Img from '../assets/jkik.jpg'
import router from 'umi/router'
const Item = List.Item;
const Brief = Item.Brief;
var timer
 class my_putchar extends Component {
    tap(){
        console.log('aa')
    }
    componentWillUnmount () {
        clearInterval(timer);
    }
    render() {
        return (
            <div>
                <div className="project">
                     <Item  onClick={() => {}}>我的电台（1） </Item>
                </div>
                <div className="project1">
                     <Item  onClick={() => {}}>我的收藏（1） </Item>
                </div>
                <div className="project2">
                     <Item  onClick={() => {}}>本地音乐</Item>
                </div>
                <div className="project3">
                     <Item  onClick={() => {}}>我的下载</Item>
                </div>

                <h2 className="addPage"><span>我的歌单</span> <p onClick={this.tap.bind(this)}>+</p></h2>
                <div>
                    <Item thumb={Img} onClick={() => {router.push({pathname:'/nextPageToken',search:{id:12}})}}>华语 <Brief>12首</Brief> </Item>
                    <Item thumb={Img} onClick={() => {}}>英语 <Brief>1首</Brief> </Item>
                    <Item thumb={Img} onClick={() => {}}>俄语 <Brief>121首</Brief> </Item>
                    <Item thumb={Img} onClick={() => {}}>汉语 <Brief>1232首</Brief> </Item>
                </div> 
                <h2 className="addPage">收藏歌单</h2> 
                <div> 
                    <Item thumb={Img} onClick={() => {}}>中国风 <Brief>112首</Brief> </Item>
                    <Item thumb={Img} onClick={() => {}}>披头士 <Brief>54首</Brief> </Item>
                    <Item thumb={Img} onClick={() => {}}>嘻哈风 <Brief>12首</Brief> </Item>
                    <Item thumb={Img} onClick={() => {}}>重低音 <Brief>4324首</Brief> </Item>
                </div>
            </div>
        )
    }
}
export default my_putchar