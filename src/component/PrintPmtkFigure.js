/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Carousel, WingBlank } from "antd-mobile"
import {Banner} from '../Tools/DataUrl'
 class PrintPmtkFigure extends Component {
      state = {
        data: ['1'],
        imgHeight: 220,
      }

    componentDidMount() {
        // simulate img loading
        Banner("type=2").then(res=>{
          this.setState({
              data :res.data.banners
          })
        })
      }
  render() {
    return (
      <div>
         <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map((val,index) => (
            <a key={index}  href="#"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
              <img src={val.imageUrl} alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      </div>
    )
  }
}

export default PrintPmtkFigure