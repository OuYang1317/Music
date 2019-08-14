import React, { Component } from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import Buzzloop from '../component/Buzzloop'
import { Userbuffer } from '../Tools/DataUrl'
const ConData = new Date()
const index = ConData.getMonth()
const arr = ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'];
export default class hockeymusic extends Component {
        constructor(){
            super()
            this.state={
                nickname:''
            }
        }
    componentDidMount(){
        Userbuffer( JSON.parse( localStorage.getItem('id'))).then(res=>{
            this.setState({
                nickname:res.data.profile.nickname
            })
        })
    }
    render() {
        const { nickname } = this.state
        return (
            <div>
                <div className="Hockey_header">
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                    <Card.Header
                        title="云热评上墙"
                        extra={<b>{arr[index]}</b>}
                    />
                    <Card.Body>
                        <div className='hockeyCard'><b>{nickname}快来上热评</b><span>{ConData.getDate()}</span></div>
                    </Card.Body>
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
                </div>
                <div>
                    <Buzzloop />
                </div>
            </div>
        )
    }
}
