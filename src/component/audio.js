/* eslint-disable eqeqeq */
import React, { Component } from 'react'
import { connect } from 'dva'
import { Getmusicdetail } from '../Tools/DataUrl'
var timerr;
class audio extends Component {
    componentDidMount() {
        clearInterval(timerr)
        var audio = document.getElementById('audio')
        timerr = setInterval(() => {
            if (Math.ceil(audio.currentTime) == Math.floor(audio.duration)) {
                var a = this.props.Musicurl[this.props.Musicurl.length - 1]
                var index = this.props.Musicurl.indexOf(a)
                this.props.Musicurl.splice(index, 1)
                this.props.dispatch({ type: 'Musicdata/ChangeNum', payload: a })
                Getmusicdetail(this.props.Musicurl[this.props.Musicurl.length - 1].id).then(res => {
                    this.props.dispatch({
                        type: 'Musicdata/changes', payload: {
                            songname: res.data.songs[0].name,
                            songer: res.data.songs[0].ar[0].name,
                            songimg: res.data.songs[0].al.picUrl
                        }
                    })
                })
            }
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(timerr);
    }
    render() {
        const { Musicurl ,Autobuffer} = this.props
        return (
            <div>
                <audio src={Musicurl[Musicurl.length-1].url}  autoPlay={Autobuffer}  id="audio"></audio>
            </div>
        )
    }
}
export default connect(state => state.Musicdata)(audio)