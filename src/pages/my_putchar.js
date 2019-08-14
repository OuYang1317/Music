/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import {List} from 'antd-mobile'
import router from 'umi/router'
import { Userlistplay} from '../Tools/DataUrl'
import { connect } from 'dva'
const Item = List.Item;
var timer
 class my_putchar extends Component {
        constructor(){
            super()
            this.state={
                mylist:[],
                userlist:[],
            }
        }
    tap(){
        console.log('aa')
    }
    Diji(index){
        var num = ''
        this.state.mylist.map((item,i)=>{  if(item.id === index){ num = i}})
        this.props.dispatch({type:'Musicdata/Songimg',payload:{img:this.state.mylist[num].coverImgUrl}})
        router.push({pathname:'/nextPageToken',query:{id:index}})
    }
    addPag(index){
        var num = ''
        this.state.userlist.map((item,i)=>{  if(item.id === index){ num = i}})
        this.props.dispatch({type:'Musicdata/Songimg',payload:{img:this.state.userlist[num].coverImgUrl}})
        router.push({pathname:'/nextPageToken',query:{id:index}})
    }
    componentDidMount(){
        const id = JSON.parse(localStorage.getItem('id')) 
        Userlistplay(id).then(res=>{
            res.data.playlist.map(item=>{
                if(item.userId === id){
                    this.setState({
                        mylist:[...this.state.mylist,item]
                    })
                }else{
                    this.setState({
                        userlist:[...this.state.userlist,item]
                    })
                }
            })
        })    
    }
    componentWillUnmount () {
        clearInterval(timer);
    }
    render() {
        const { mylist , userlist } = this.state
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
                    {
                        mylist.map((item,index)=>{
                          return  <Item key={index} thumb={item.coverImgUrl} onClick={this.Diji.bind(this,item.id)}>{item.name}</Item>
                        })
                    }
                </div> 
                <h2 className="addPage">收藏歌单</h2> 
                <div> 
                    {
                        userlist.map((item,index)=>{
                            return <Item key={index} thumb={item.coverImgUrl} onClick={this.addPag.bind(this,item.id)}>{item.name}</Item>
                        })
                    }
                    
                  
                </div>
            </div>
        )
    }
}
export default connect(state => state.Musicdata)(my_putchar)