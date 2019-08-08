/* eslint-disable react/no-direct-mutation-state */
import img from '../assets/jkik.jpg'
import router from 'umi/router'
import { NavBar, Icon,Slider, WingBlank, WhiteSpace} from 'antd-mobile';
import React, { Component } from 'react'
import { connect }  from 'dva'
    const log =(index) =>{
        console.log(index)
    }
    const cklickback = () =>{
        router.go(-1)
    }
    var timer
class Songpage extends Component {
        constructor(){
            super()
            this.state={
                    step:0,
                    max:0,
                    value:0,
                    t:1,
            }
        }
        componentDidMount(){
            clearInterval(timer)
            var audio = document.getElementById("audio");
            var pal = document.getElementsByClassName('PalySongs')[0]
            var cc = document.getElementsByClassName('am-slider-handle')[0]
            var Record = document.getElementsByClassName('record')[0]
            this.setState({
                    max:audio.duration
            })
            if (this.props.flag) {
                pal.innerText = '停止'
            timer = setInterval(()=>{
                this.state.t+=1
                cc.style.left = (audio.currentTime/audio.duration)*100+"%"
                Record.style.transform = "translate(-50%,-50%) rotateZ("+ this.state.t+"deg)"
            },50)
            }else{
                pal.innerText = '开始'
                clearInterval(timer)
            }
    }
    componentWillUnmount () {
        clearInterval(timer);
    }
    paly(){
        var audio = document.getElementById("audio");
        var pal = document.getElementsByClassName('PalySongs')[0]
        var cc = document.getElementsByClassName('am-slider-handle')[0]
        var Record = document.getElementsByClassName('record')[0]
        if (audio.played.length === 1 && audio.paused === false) {
            pal.innerText = '开始'
            audio.pause();
            this.props.dispatch({type:'Songpaly/palyBuffer',payload:false})
            clearInterval(timer)
        } else {
            pal.innerText = '停止'
            timer = setInterval(()=>{
                this.state.t+=1
                cc.style.left = (audio.currentTime/audio.duration)*100+"%"
                Record.style.transform = "translate(-50%,-50%) rotateZ("+ this.state.t+"deg)"
            },50)
            audio.play();
            this.props.dispatch({type:'Songpaly/palyBuffer',payload:true})
        }
    }
    render() {
        const {step} = this.state
        return (
            <div>
            <div className="songbg"></div>
                <div className="Songsnav">
                <NavBar
                     mode="light"
                     icon={<Icon type="left" />}
                     onLeftClick={()=>cklickback()}
                    >Angel With A Shotgun</NavBar>
                </div>
                <div className="record">
                    <div className="songsImg">
                        <img src={img} alt=""/>
                    </div>
                </div>
                <div className="Songsfooter">
                    <div className="Songs_footernavbar">
                            <div className="Song_footernav_progress_bar">
                            <WhiteSpace size="lg" />
                                    <WingBlank size="lg">
                                    <Slider
                                        style={{ marginLeft: 30, marginRight: 30 }}
                                        defaultValue={step}
                                        value={step}
                                        min={0}
                                        max={100}
                                        step={1}
                                        onChange={(value)=>log(value)}
                                    />
                                    </WingBlank>
                            </div>
                            <div className="Song_footer_core_button">
                                <div className="UpSongs">
                                    上一曲
                                </div>
                                <div className="PalySongs" onClick={this.paly.bind(this)}  >
                                        停止
                                    </div>
                                    <div className="DownSongs">
                                    下一曲
                                    </div>
                            </div>
                    </div>
                </div>
        </div>
        )
    }
}
export default connect(state=>state.Songpaly)(Songpage) 