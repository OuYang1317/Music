/* eslint-disable react-hooks/rules-of-hooks */
import React,{ Component } from 'react'
import { Grid } from 'antd-mobile'
import { connect } from 'dva'
import {Newvideo} from '../Tools/DataUrl'
 class adultsexvideo extends Component {
            constructor(){
                super()
                this.state = {
                    date:[]
                }
            }
        componentDidMount(){
            Newvideo(10).then(res=>{
                this.setState({
                    date:res.data.data
                })
            })
        }
        tap(index){
            console.log(index)
        }
    render() {
        const { date } = this.state
        return (
            <div className="videoimg">
            <Grid data={date}
               columnNum={2}
               renderItem={dataItem=> (
                   <div onClick ={this.tap.bind(this,dataItem.id)}>
                   <img src={dataItem.cover} style={{ width: '10rem', height: '6.875rem' }} alt="" />
                   <div style={{ color: '#888', fontSize: '12px', marginTop: '10px' }}>
                       <span>{dataItem.name}</span>
                   </div>
                   </div>
               )}
               itemStyle={{borderRadius:'5px',margin:'5px',height:'170px',lineHeight:'1', backgroundColor:'rgba(255, 255, 255,.8)',boxShadow:'0px 0px 4px -2px #000'}}
               hasLine={false}
               /> 
            </div>
        )
    }
}
export default   connect(state=>state.Data)(adultsexvideo)