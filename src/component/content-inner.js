/* eslint-disable react-hooks/rules-of-hooks */
import React,{ Component } from 'react'
import { Grid } from 'antd-mobile'
import {NewSong} from '../Tools/DataUrl'
import { connect  } from 'dva'
import { Dpaly } from '../Tools/dianjibofang'
var timer ;
 class content_inner extends Component {
                constructor(){
                    super()
                    this.state ={
                        data:[]
                    }
                }
        componentDidMount(){
            NewSong(8).then(res=>{
                this.setState({
                    data:res.data.data.slice(91)
                })
            })
        }
        componentWillUnmount () {
            clearInterval(timer);
        }
        tap(index){
            const _this = this
            Dpaly(index,timer,_this)
        }
    render() {
        const { data } = this.state
        return (
            <div className="newsongs">
            <Grid data={data}
                columnNum={3}
                renderItem={dataitem => (
                    <div style={{ padding: '12.5px',}}  onClick = { this.tap.bind(this,dataitem.id) }   >
                    <img src={dataitem.album.blurPicUrl} style={{ width: '75px', height: '75px' }} alt="" />
                    <div style={{ color: '#888', fontSize: '10px', marginTop: '12px' }}>
                        <span>{dataitem.name}</span>
                    </div>
                    </div>
                )}
                itemStyle={{borderRadius:'5px',margin:'5px',height:'130px',lineHeight:'1', backgroundColor:'rgba(255, 255, 255,.8)',boxShadow:'0px 0px 4px -2px #000'}}
                hasLine={false}
                />
         </div>
        )
    }
}

export default  connect(state=>state.Musicdata)(content_inner)