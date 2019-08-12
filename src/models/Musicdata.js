export default {
    name:'MusicData',
    state:{
        songname:'Angel With A Shotgun',
        songer:'Nightcore',
        songimg:'https://p2.music.126.net/DO5StRLp9Is10pNreqr6Fg==/7851612533948579.jpg',
        flag:false,
        Musicurl:[{url:"http://m10.music.126.net/20190808194535/2c92539082480a032b5533a2301d0cbf/ymusic/b4f4/c89a/8cf2/b7e32ba0ee08c8856f5c494811d009a8.mp3",id:30051135}],
        songNum:0,
        Sreachdata:[],
        Sreachflag:{none:"none",dis:'block'},
        Autobuffer:false
    },
     
    reducers:{
        changes(state,action){
            return { ...state,...{ songname:action.payload.songname,songer:action.payload.songer,songimg:action.payload.songimg}}
        },
        palyBuffer(state,action){
            return {...state,...{flag:action.payload}}
        },
        palymusic(state,action){
            return {...state,...{Musicurl:[...state.Musicurl,action.payload]}}
        },
        ChangeNum(state,action){
            return {...state,...{Musicurl: [action.payload,...state.Musicurl] }  }
        },
        SaveSreach(state,action){
            return { ...state,...{Sreachdata:action.payload}}
        },
        Show(state,action){
            return { ...state,...{Sreachflag:{none:action.payload.none,dis:action.payload.dis}}}
        },
        autoPal(state,action){
            return { ...state,...{Autobuffer:action.payload} }
        }
    }
}