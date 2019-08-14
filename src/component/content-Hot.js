/* eslint-disable array-callback-return */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable react-hooks/rules-of-hooks */
import Router from 'umi/router'
import React,{ Component } from 'react'
import { Grid } from 'antd-mobile'
import { Songs } from '../Tools/DataUrl'
import { connect } from 'dva'
var timer
 class contentHot extends Component {
        constructor(){
            super()
            this.state ={
                data:[]
            }
        }
    componentDidMount(){
        Songs(9).then(res=>{
            this.setState({
                data:res.data.playlists
            })
        })
       
    }
    tap(index){
        var num = ''
        this.state.data.map((item,i)=>{  if(item.id === index){ num = i}})
        this.props.dispatch({type:'Musicdata/Songimg',payload:{img:this.state.data[num].coverImgUrl}})
        Router.push({pathname:'/nextPageToken',query:{id:index}})
    }
    componentWillUnmount () {
        clearInterval(timer);
    }
    render() {
        const { data } = this.state
        return (
            <div className="newsongs">
            <Grid data={data}
                columnNum={3}
                renderItem={dataitem => (
                    <div style={{ padding: '12.5px'}}  onClick ={this.tap.bind(this,dataitem.id)} >
                    <img src={dataitem.coverImgUrl} style={{ width: '75px', height: '75px' }} alt="" />
                    <div style={{ color: '#888', fontSize: '11px', marginTop: '12px' }}>
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
export default connect(state=>state.Data)(contentHot)