import React, { Component } from 'react'
import { SearchBar, WhiteSpace, List, Toast, } from 'antd-mobile'
import { Hotser, Serach, Getmusicurl, Getmusicdetail } from '../Tools/DataUrl'
import { connect } from 'dva'
const Item = List.Item;
const Brief = Item.Brief;
var timer;
// 搜索 标签
const tap = (name, Point) => {
    Serach(name).then(res => {
        Point.setState({
            sralist: res.data.result.songs
        })
    })
    var a = document.getElementsByClassName('Contentlist')
    a[0].style.display = 'none'
    a[1].style.display = 'block'
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
        Hotser().then(res => {
            this.setState({
                Hotlist: res.data.result.hots
            })
        })
    this.props.dispatch({type:'MusicData/ChangeNum',payload:this.props.Musicurl.length-1})
    }
    // 热搜标签 点击搜索
    sera(keyword) {
        tap(keyword, this)
    }
    // 点击获取播放地址
    paly(index) {
        clearInterval(timer)
        Getmusicurl(index).then(res => {
        //    console.log(res.data.data[0].url)            歌曲音乐地址
            if (res.data.data[0].url == null) {
                Toast.fail('因版权要求，该资源已下架', 2);
                return
            }
            this.props.dispatch({ type: 'Musicdata/palymusic', payload: { url: res.data.data[0].url}})
            Getmusicdetail(index).then(res => {
                this.props.dispatch({
                    type: 'Musicdata/changes', payload: {
                        songname: res.data.songs[0].name,
                        songer: res.data.songs[0].ar[0].name,
                        songimg: res.data.songs[0].al.picUrl
                    }
                })
            })
        })
        this.props.dispatch({type:'MusicData/ChangeNum',payload:this.props.Musicurl.length-1})
    }
    render() {
        const { Hotlist, sralist } = this.state
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