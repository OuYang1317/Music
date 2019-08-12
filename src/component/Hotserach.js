/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'
import { SearchBar, WhiteSpace, List} from 'antd-mobile'
import { Hotser, Serach} from '../Tools/DataUrl'
import {Dpaly} from '../Tools/dianjibofang'
import { connect } from 'dva'
const Item = List.Item;
const Brief = Item.Brief;
var timer;
// 搜索 标签
const tap = (name, Point) => {
    var a = document.getElementsByClassName('Contentlist')
    Point.props.dispatch({type:'Musicdata/Show',payload:{none:"block",dis:'none'}})
    Serach(name).then(res => {
        Point.setState({
            sralist:res.data.result.songs
        })
        Point.props.dispatch({type:'Musicdata/SaveSreach',payload:res.data.result.songs})
        a[0].style.display = Point.props.Sreachflag.dis
        a[1].style.display = Point.props.Sreachflag.none
    })
    
}
class Hotserach extends Component {
    constructor() {
        super()
        this.state = {
            Hotlist: [],
            sralist: [],
        }
    }
    componentDidMount() {
        var a = document.getElementsByClassName('Contentlist')
        Hotser().then(res => {
            this.setState({
                Hotlist: res.data.result.hots
            })
        })
            a[0].style.display = this.props.Sreachflag.dis
            a[1].style.display = this.props.Sreachflag.none
            this.setState({
                sralist:this.props.Sreachdata
            })
    }
    // 热搜标签 点击搜索
    sera(keyword) {
        tap(keyword, this)
    }
    // 点击获取播放地址
    paly(index) {
        const _this = this
        Dpaly(index,timer,_this);
    }
    render() {
        const { Hotlist ,sralist} = this.state
        return (
            <div>
                <div className="Search">
                    <SearchBar placeholder="最新热搜许嵩、周杰伦" onSubmit={value => tap(value, this)} />
                    <WhiteSpace />
                </div>
                <div className="tuijian Contentlist">
                    <ul>
                        {
                            Hotlist.map((item, index) => (
                                <li key={index} onClick={this.sera.bind(this, item.first)}>{item.first}</li>))
                        }
                    </ul>
                </div>
                <div className="SearchContent Contentlist">
                    <List>
                        {
                            sralist.map(item => (
                                <Item key={item.id} onClick={this.paly.bind(this, item.id)}>{item.name} <Brief>{item.album.name}<b>--{item.artists[0].name}</b></Brief></Item>
                            ))
                        }
                    </List>
                </div>
            </div>
        )
    }
}
export default connect(state => state.Musicdata)(Hotserach)