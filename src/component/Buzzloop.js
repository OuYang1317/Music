import Img from '../assets/jkik.jpg'
import React, { Component } from 'react'
import { Hottopic } from '../Tools/DataUrl'
var timer
class Buzzloop extends Component {
    componentDidMount(){
        Hottopic().then(res=>{
            console.log(res)
        })
    }
    componentWillUnmount () {
        clearInterval(timer);
    }
    render() {
        return (
            <div>
            <div className="Buzzloop_">
            <div className="Buzzloop_content">
                <div className="nihao">
                    <img src= {Img}  alt="图片"/>
                    <p>好棒棒 好棒棒 好棒棒 好棒棒好棒棒</p>
                    <h3><span>我说的</span>  <span>赞:{123}</span></h3>
                </div>
                <div className="nihao">
                    <img src= {Img}  alt="图片"/>
                    <p>好棒棒 好棒棒 好，棒棒 好棒棒棒</p>
                    <h3><span>我说的</span>  <span>赞:{123}</span></h3>
                </div>
                <div className="nihao">
                    <img src= {Img}  alt="图片"/>
                    <p>好棒棒 好棒棒 好棒棒 好棒棒好棒棒</p>
                    <h3><span>我说的</span>  <span>赞:{123}</span></h3>
                </div>
                <div className="nihao">
                    <img src= {Img}  alt="图片"/>
                    <p>好棒棒 好棒棒 好棒棒 好棒棒好棒棒</p>
                    <h3><span>我说的</span>  <span>赞:{123}</span></h3>
                </div>
                <div className="nihao">
                    <img src= {Img}  alt="图片"/>
                    <p>好棒棒 好棒棒 好棒棒 好棒棒好棒棒</p>
                    <h3><span>我说的</span>  <span>赞:{123}</span></h3>
                </div>
                <div className="nihao">
                    <img src= {Img}  alt="图片"/>
                    <p>好棒棒 好棒棒 好棒棒 好棒棒好棒棒</p>
                    <h3><span>我说的</span>  <span>赞:{123}</span></h3>
                </div>
                <div className="nihao">
                    <img src= {Img}  alt="图片"/>
                    <p>好棒棒 好棒棒 好棒棒 好棒棒好棒棒</p>
                    <h3><span>我说的</span>  <span>赞:{123}</span></h3>
                </div>
                <div className="nihao">
                    <img src= {Img}  alt="图片"/>
                    <p>好棒棒 好棒棒 好棒棒 好棒棒好棒棒</p>
                    <h3><span>我说的</span>  <span>赞:{123}</span></h3>
                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default Buzzloop
