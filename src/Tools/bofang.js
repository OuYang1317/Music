import  { Getmusicdetail } from '../Tools/DataUrl'
export  const Bofang = (_this) =>{
    var Songbgimg = document.getElementsByClassName('songbg')[0]
    var a = _this.props.Musicurl[_this.props.Musicurl.length - 1]
    var index = _this.props.Musicurl.indexOf(a)
    _this.props.Musicurl.splice(index, 1)
    _this.props.dispatch({ type: 'Musicdata/ChangeNum', payload: a })
    Getmusicdetail(_this.props.Musicurl[_this.props.Musicurl.length - 1].id).then(res => {
        _this.props.dispatch({
            type: 'Musicdata/changes', payload: {
                songname: res.data.songs[0].name,
                songer: res.data.songs[0].ar[0].name,
                songimg: res.data.songs[0].al.picUrl
                
            }
        })
        Songbgimg.style.backgroundImage = "url("+res.data.songs[0].al.picUrl+")"
    })
}

export const Down = (_this)=>{
    var Songbgimg = document.getElementsByClassName('songbg')[0]
    var a = _this.props.Musicurl[0]
    _this.props.Musicurl.splice(0, 1)
    _this.props.dispatch({ type: 'Musicdata/palymusic', payload: a })
    Getmusicdetail(a.id).then(res => {
        _this.props.dispatch({
            type: 'Musicdata/changes', payload: {
                songname: res.data.songs[0].name,
                songer: res.data.songs[0].ar[0].name,
                songimg: res.data.songs[0].al.picUrl
            }
        })
        Songbgimg.style.backgroundImage = "url("+res.data.songs[0].al.picUrl+")"
    })
}