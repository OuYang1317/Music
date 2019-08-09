import { get } from '../sever/aixos'
// 搜索接口
export const  Serach = (name) =>{
    return get("/search",{keywords:name})
}
// 默认搜索内容
export const SerachDefalut = ()=>{
    return get('/search/default')
}
// 热搜内容
export const Hotser = () =>{
    return get('/search/hot')
}
// 搜索建议
export const Suggest = (name) =>{
    return get('/search/suggest',{keywords:name,type:"mobile"})
}

// 新歌速递
export const  NewSong = (num) =>{
    return get('/top/song',{type:num})
}
// 日推歌曲 （需要登录）
export const Daysongs = () =>{
    return get('/recommend/songs')
}
// 私人FM (需要登录)
export const MyselfFm = () =>{
    return get('/personal_fm')
}
// 登录
export const Login = (phone,password) =>{
    return get('/login/cellphone',{phone:phone,password:password})
}
// 刷新登录

export const ResetLogin = () =>{
    return get('/login/refresh')
}

// 发送验证码 
export const Captcha = (phone) =>{
    return get('/captcha/sent',{phone:phone})
}
// 验证验证码
export const VerifyCap = (phone,captcha) =>{
    return get('/captcha/verify',{phone:phone,captcha:captcha})
}

// 注册&忘记密码
export const Register = (phone,password,captcha,nickname) =>{
    return get("/register/cellphone",{phone:phone,password:password,captcha:captcha,nickname:nickname})
}
// 检测手机号是否被绑定过了
export const Cellphone = (phone) =>{
    return get("/cellphone/existence/check",{phone:phone})
}
// 登录状态
export const Buffer = () =>{
    return get('/login/status')
}
// 获取用户详情
export const Userbuffer = (id) =>{
    return get('/user/detail',{uid:id})
}
// 获取用户的所有音乐数据
export const Subcount = () =>{
    return get('/user/subcount')
}
// 获取用户歌单
export const Userlistplay = (id) =>{
    return get('/user/playlist',{uid:id})
}
// 获取热们话题
export const Hottopic = (num) =>{
    return get('/hot/topic',{limit:num})
}
// 获取精品歌单
export const Songs = (num) =>{
    return get('/top/playlist/highquality',{limit:num})
}
// 获取歌词
export const Lyric = (id) =>{
    return get('/lyric',{id:id})
}
// 获取轮播图
export const Banner = (id) =>{
    return get('/banner',{type:id})
}
// 歌曲详情
export const Songsdetail =(id) =>{
    return get('/song/detail',{ids:id})
}
// 最新MV
export const Newvideo = () =>{
    return get ( '/mv/first',{limit:10})
}
// 获取视频播放地址
export const VideoUrl = (id) =>{
    return get('/video/url',{id:id})
}
// 视频详情
export const Videodetail = (id) =>{
    return get('/video/detail',{id:id})
}
// 相关视频
export const Allvideo = (id) =>{
    return get('/related/allvideo',{id:id})
}
// 获取歌曲链接
export const Getmusicurl = (id)=>{
    return get('/song/url',{id:id})
}
// 获取歌曲详情
export const Getmusicdetail = (id) =>{
    return get('/song/detail',{ids:id})
}
// 获取专辑内容
export const Getalbum = (id) =>{
    return get ('/album',{id:id})
}