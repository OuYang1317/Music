import React, { Component } from 'react'
import { List,NavBar,Icon } from 'antd-mobile'
import { Daysongs}  from '../Tools/DataUrl'
import { Dpaly } from '../Tools/dianjibofang'
import router from 'umi/router';
import { connect } from 'dva'
var Timerr = new Date()
var Daytime = Timerr.getDate()
console.log(Daytime)
const Item = List.Item;
const Brief = Item.Brief;
var timerr
 class Day extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    paly(a){
        var _this = this
        Dpaly(a,timerr,_this)
    }
    cklickback(){
        router.go(-1)
    }
        componentDidMount(){
            Daysongs().then(res=>{
                console.dir(res.data.data.dailySongs)
                
                 this.setState({
                     list:res.data.data.dailySongs
                 })
            })
            
        }
    render() {
        const { list } = this.state
        return (
            <div>
                <div className='SOnglistD'>
                <div className="title">
                    <div className="navblack">
                    <NavBar
                     mode="light"
                     icon={<Icon type="left" />}
                     onLeftClick={this.cklickback.bind(this)}
                    >每日推荐</NavBar>
                    </div>
                     <div className="contnenticon">
                         <div className="zIN">
                                <div className="Divni">
                                    <div className="Divicon">{Daytime}</div>
                                </div>
                         </div>
                        <div className="bgimg12">
                        </div>
                    </div>
                </div>
            <div>
            
                <List>
                   {
                       list.map((item,index) => (
                             <Item key={index} onClick={this.paly.bind(this, item.id)}>{item.name} <Brief><b>{item.artists[0].name}</b></Brief></Item>
                       ))
                   }
               </List>
            </div>
            </div>
       </div>
        )
    }
}
export default connect(state=>state.Musicdata)(Day) 