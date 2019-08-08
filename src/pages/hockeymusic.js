import React, { Component } from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import Buzzloop from '../component/Buzzloop'
const ConData = new Date()
const index = ConData.getMonth()
const arr = ['Jan.','Feb.','Mar.','Apr.','May.','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'];
export default class hockeymusic extends Component {
    render() {
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
                        <div className='hockeyCard'><b>一只懒洋洋_快来上热评</b><span>{ConData.getDate()}</span></div>
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
