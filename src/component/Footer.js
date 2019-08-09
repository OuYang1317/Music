import router  from 'umi/router'
import Audio from '../component/audio'
import React, { Component } from 'react'
import {connect} from 'dva'
const clicl = () =>{
        router.push('/Songs')
    }
class Footer extends Component {
        tap(){
            var audio = document.getElementById("audio");
            var paly = document.getElementsByClassName('button_img')[0];
            if (audio.played.length === 1 && audio.paused === false) {
                audio.pause();
                paly.style.backgroundPosition='2px 4px'
                this.props.dispatch({type:'Musicdata/palyBuffer',payload:false})
            } else {
                audio.play();
                paly.style.backgroundPosition='-120px 4px'
                this.props.dispatch({type:'Musicdata/palyBuffer',payload:true})
            }
        }
    componentDidMount(){
        var paly = document.getElementsByClassName('button_img')[0];
           setInterval(()=>{
            if(this.props.flag){
            paly.style.backgroundPosition='-120px 4px'
            }else{
            paly.style.backgroundPosition='2px 4px'
            }
           },1000)
            
        }
        
    render() {
        return (
            <div className="Footer">
           <Audio />
            <div className="symbolSize" onClick={()=>clicl()}>
                <img  src= {this.props.songimg}  alt='nihao' />
            </div>
            <div className="TitleScreen" onClick={()=>clicl()}>
                <p>{this.props.songname}</p>
                <p>{this.props.songer}</p>
            </div>
            <div className="button_" onClick={this.tap.bind(this)}>
                    <div className='button_img'>
                    </div>
            </div>
            </div>
        )
    }
}
export default  connect(state=>state.Musicdata)(Footer)