import Songpage from '../component/Songpage'
import React, { Component } from 'react'
var timer
export default class Songs extends Component {
    componentWillUnmount () {
        clearInterval(timer);
    }
    render() {
        return (
            <div className="Bgimg">
            <Songpage />
        </div>
        )
    }
}
