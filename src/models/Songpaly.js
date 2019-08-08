export default {
    name:'songPaly',
    state:{
        flag:true
    },
    reducers:{
        palyBuffer(state,action){
            return {...state,...{flag:action.payload}}
        }
    }

}