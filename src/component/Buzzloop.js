import React, { Component } from 'react'
import { Hottopic } from '../Tools/DataUrl'
var timer
class Buzzloop extends Component {
        constructor(){
            super()
            this.state = {
                list:[]
            }
        }


    componentDidMount(){
        Hottopic().then(res=>{
            this.setState({
                list:res.data.hot
            })
        })
    }
    componentWillUnmount () {
        clearInterval(timer);
    }
    
    render() {
        const { list } = this.state
        return (
            <div>
            <div className="Buzzloop_">
            <div className="Buzzloop_content">
                {
                    list.map((item,index)=>{
                       return    <div className="nihao" key={item.actId}  >
                                <img src= {item.sharePicUrl}  alt="图片"/>
                                <p>{item.text[0]}</p>
                                <h3><span>{item.title}</span></h3>
                            </div>
                    })
                }
            </div>
            </div>
        </div>
        )
    }
}

export default Buzzloop
