/* eslint-disable react/no-direct-mutation-state */
import router from 'umi/router'
import { NavBar, Icon, Slider, WingBlank, WhiteSpace } from 'antd-mobile';
import React, { Component } from 'react'
import { connect } from 'dva'
import { Bofang ,Down} from '../Tools/bofang'
const cklickback = () => {
    router.go(-1)
}
var timer
class Songpage extends Component {
    constructor() {
        super()
        this.state = {
            t: 0
        }
    }
    componentWillUnmount() {
        clearInterval(timer);
    }
    componentDidMount() {
        clearInterval(timer)
        var audio = document.getElementById("audio");
        var pal = document.getElementsByClassName('PalySongs')[0]
        var cc = document.getElementsByClassName('am-slider-handle')[0]
        var Record = document.getElementsByClassName('record')[0]
        var Songbgimg = document.getElementsByClassName('songbg')[0]
        Songbgimg.style.backgroundImage = "url(" + this.props.songimg + ")"
        this.setState({
            max: audio.duration
        })
        if (this.props.flag) {
            pal.innerText = '停止'
            timer = setInterval(() => {
                this.state.t += 1
                cc.style.left = (audio.currentTime / audio.duration) * 100 + "%"
                Record.style.transform = "translate(-50%,-50%) rotateZ(" + this.state.t + "deg)"
            }, 50)
        } else {
            pal.innerText = '开始'
            clearInterval(timer)
        }
    }
    tap() {
        var _this = this
        Bofang(_this)
    }
    Down(){
        var _this = this
        Down(_this)
    }
    paly() {
        var audio = document.getElementById("audio");
        var pal = document.getElementsByClassName('PalySongs')[0]
        var cc = document.getElementsByClassName('am-slider-handle')[0]
        var Record = document.getElementsByClassName('record')[0]
        if (audio.played.length === 1 && audio.paused === false) {
            clearInterval(timer)
            pal.innerText = '开始'
            audio.pause();
            this.props.dispatch({ type: 'Musicdata/palyBuffer', payload: false })
        } else {
            pal.innerText = '停止'
            timer = setInterval(() => {
                this.state.t += 1
                cc.style.left = (audio.currentTime / audio.duration) * 100 + "%"
                Record.style.transform = "translate(-50%,-50%) rotateZ(" + this.state.t + "deg)"
            }, 50)
            audio.play();
            this.props.dispatch({ type: 'Musicdata/palyBuffer', payload: true })
            this.props.dispatch({ type: 'Musicdata/autoPal', payload: true })
        }
    }
    render() {
        return (
            <div>
                <div className="songbg"></div>
                <div className="Songsnav">
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => cklickback()}
                    >{this.props.songname}</NavBar>
                </div>
                <div className="record">
                    <div className="songsImg">
                        <img src={this.props.songimg} alt="" />
                    </div>
                </div>
                <div className="Songsfooter">
                    <div className="Songs_footernavbar">
                        <div className="Song_footernav_progress_bar">
                            <WhiteSpace size="lg" />
                            <WingBlank size="lg">
                                <Slider style={{ marginLeft: 30, marginRight: 30 }} defaultValue={0}
                                    value={0}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            </WingBlank>
                        </div>
                        <div className="Song_footer_core_button">
                            <div className="UpSongs" onClick={this.tap.bind(this)} >上一曲</div>
                            <div className="PalySongs" onClick={this.paly.bind(this)}>停止</div>
                            <div className="DownSongs" onClick={this.Down.bind(this)} >下一曲</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(state => state.Musicdata)(Songpage) 