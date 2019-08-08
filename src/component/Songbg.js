import React from 'react'
import img from '../assets/jkik.jpg'
import router from 'umi/router'
import { NavBar, Icon,Slider, WingBlank, WhiteSpace} from 'antd-mobile';
function Songbg() {
    const log =(title,vla)=>{
        console.log(title,vla)
    }
    const cklickback = () =>{
        router.go(-1)
    }
    return (
        <div>
            <div className="songbg"></div>
                <div className="Songsnav">
                <NavBar
                     mode="light"
                     icon={<Icon type="left" />}
                     onLeftClick={()=>cklickback()}
                    >Angel With A Shotgun</NavBar>
                </div>
                <div className="record">
                    <div className="songsImg">
                        <img src={img} alt=""/>
                    </div>
                </div>
                <div className="Songsfooter">
                    <div className="Songs_footernavbar">
                          
                            <div className="Song_footernav_progress_bar">
                            <WhiteSpace size="lg" />
                                    <WingBlank size="lg">
                                    <Slider
                                        style={{ marginLeft: 30, marginRight: 30 }}
                                        defaultValue={0}
                                        min={0}
                                        max={30}
                                        step={1}
                                        onChange={(value)=>log('change',value)}
                                    />
                                    </WingBlank>
                            </div>
                            <div className="Song_footer_core_button">
                                <div className="UpSongs">
                                    上一曲
                                </div>
                                <div className="PalySongs">
                                        开始
                                    </div>
                                    <div className="DownSongs">
                                    下一曲
                                    </div>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Songbg
