import { Getmusicurl, Getmusicdetail } from '../Tools/DataUrl'
import { Toast } from 'antd-mobile'
export const Dpaly =(index,timer,_this) => { 
    clearInterval(timer)
    Getmusicurl(index).then(res => {
    //    console.log(res.data.data[0].url)            歌曲音乐地址
        if (res.data.data[0].url == null) {
            Toast.fail('因版权要求，该资源已下架', 2);
            return
        }
        _this.props.dispatch({ type: 'Musicdata/palymusic', payload: { url: res.data.data[0].url,id:index}})
        Getmusicdetail(index).then(res => {
            _this.props.dispatch({
                type: 'Musicdata/changes', payload: {
                    songname: res.data.songs[0].name,
                    songer: res.data.songs[0].ar[0].name,
                    songimg: res.data.songs[0].al.picUrl
                }
            })
        })
    })
    _this.props.dispatch({type:'Musicdata/autoPal',payload:true})
    _this.props.dispatch({type:'Musicdata/palyBuffer',payload:true})
 }

