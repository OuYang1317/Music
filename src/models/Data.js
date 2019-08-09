import {NewSong ,Songs ,Newvideo }  from '../Tools/DataUrl'
export default {
    name:'SongData',
    state:{
        Newsong:[],
        Newvideo:[],
        Hotsong:[]
    },
    reducers:{
        Nsongs(state,action){
            return {...state ,...{Newsong:action.payload}}
        },
        Newvideos(state,action){
            console.log(action)
            return {...state ,...{Newvideo:action.payload}}
        },
        Hotsongs(state,action){
            console.log(action)
            return { ...state , ...{Hotsong:action.payload} }
        }
    },
    effects:{
        *loadNewSong({payload},{ call ,put }){
            const result =yield call (NewSong,payload)
            console.log(result)
            yield put({
                type:'Nsongs',
                payload:result.data.data
                })
            },
        *loadNewvideo({payload},{ call ,put }){
            const result = yield call (Newvideo,payload)
            yield put({
                type:'Newvideos',
                payload:result.data.data
                })
            },
        *loadHotsong({payload},{ call ,put }){
            const result = yield call (Songs,payload)
            console.log(result.data.playlists)
            yield put({
                type:'Hotsongs',
                payload:result.data.playlists
                })
            }
        }
    }