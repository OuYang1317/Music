/* eslint-disable eqeqeq */
import React, { Component } from 'react'
import { connect } from 'dva'
var timerr;
// "http://m10.music.126.net/20190808155402/353a2b5a9c05c577cd07d4be3f7a5240/ymusic/0fe8/909f/2f93/30f39964b5b1f26dc84576eff9895302.flac"
// "http://m10.music.126.net/20190808194535/2c92539082480a032b5533a2301d0cbf/ymusic/b4f4/c89a/8cf2/b7e32ba0ee08c8856f5c494811d009a8.mp3"
 class audio extends Component {
     componentDidMount(){
        
            clearInterval(timerr) 
            
            var audio = document.getElementById('audio')
           
            timerr = setInterval(()=>{
            console.log( Math.ceil(audio.currentTime) , Math.floor(audio.duration))
            if( Math.ceil(audio.currentTime) ==  Math.floor(audio.duration)  ){
                var a = this.props.Musicurl[this.props.Musicurl.length-1]
                var index = this.props.Musicurl.indexOf(a)
                this.props.Musicurl.splice(index,1)
                this.props.dispatch({type:'Musicdata/ChangeNum',payload:a})
                console.log(this.props)
            }
         },1000)
     }
    render(){
        const {Musicurl} = this.props
        return (
            <div>
                    <audio loop src={Musicurl[Musicurl.length-1].url} autoPlay id="audio"></audio>
            </div>
        )
    }
}
export default connect(state=>state.Musicdata)(audio)