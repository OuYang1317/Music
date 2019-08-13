import { List } from 'antd-mobile'
import React, { Component } from 'react'
import { connect } from 'dva'
import { Getsonglist}  from '../Tools/DataUrl'
import { Dpaly } from '../Tools/dianjibofang'
const Item = List.Item;
const Brief = Item.Brief;
var timer
 class SongList extends Component {
        constructor(){
            super()
            this.state={
                list:[]
            }
        }
        paly(index){
            const _this = this
            Dpaly(index,timer,_this)
        }
    componentDidMount(){
        console.log(this.props.GetSongimg)
        
        Getsonglist(this.props.id).then(res=>{
            this.setState({
                list:res.data.playlist.tracks
            })
        })
        var itmediv = document.getElementsByClassName('item')[0]
        var itembox = document.getElementsByClassName('imagebox')[0]
        itmediv.style.backgroundImage="url("+this.props.GetSongimg.img+')'
        itembox.style.backgroundImage= "url("+this.props.GetSongimg.img+')'
    }
    render() {
        const { list } = this.state
        return (
            <div className="songglist">
                 <List>
                        {
                            list.map((item,index) => (
                                 <Item key={index} onClick={this.paly.bind(this, item.id)}>{item.name} <Brief><b>{item.ar[0].name}</b></Brief></Item>
                            ))
                        }
                    </List>
            </div>
        )
    }
}
export default connect(state => state.Musicdata)(SongList)