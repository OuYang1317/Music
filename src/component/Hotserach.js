import React, { Component } from 'react'
import { SearchBar, WhiteSpace,List } from 'antd-mobile'
import { Hotser,Serach}  from '../Tools/DataUrl'
const Item = List.Item;
const Brief = Item.Brief;

const tap =(name,Point)=>{
    Serach(name).then(res=>{
            Point.setState({
                sralist:res.data.result.songs
            })

    })
        var a = document.getElementsByClassName('Contentlist')
        a[0].style.display = 'none'
        a[1].style.display = 'block'
}
export default class Hotserach extends Component {
        constructor(){
            super()
                this.state = {
                    Hotlist:[],
                    sralist:[],
                }
            }
    componentDidMount(){
        Hotser().then(res=>{
                this.setState({
                    Hotlist:res.data.result.hots
                })
        })
    }
    sera(keyword){
        tap(keyword,this)
    }
    paly(index){
        console.log(index)
    }
    render() {
        const { Hotlist , sralist } =  this.state
        return (
            <div>
                    <div className="Search">
                        <SearchBar placeholder="最新热搜许嵩、周杰伦" onSubmit={value=>tap(value,this)}/>
                        <WhiteSpace />
                    </div>
                <div className="tuijian Contentlist">
                    <ul>
                        {
                            Hotlist.map((item,index)=>(
                                 <li key={index} onClick={this.sera.bind(this,item.first)}>{item.first}</li>))
                        }
                    </ul>
                </div>
            <div className="SearchContent Contentlist">
                <List>
                    {
                        sralist.map(item=>(
                            <Item key= {item.id} extra={item.artists.name} onClick={this.paly.bind(this,item.id)}>{item.name} <Brief>{item.album.name}  </Brief></Item>
                        ))
                    }
                </List>
            </div>
        </div>
        )
    }
}
