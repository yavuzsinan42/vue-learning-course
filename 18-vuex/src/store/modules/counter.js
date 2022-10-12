const state = {
    counter: 0,
}

const getters = { 
    getDoubleCounter(state){
        return state.counter*2;
    },
    stringCounter(state){
        return state.counter + ".kez tıklandı";
    },
}
const mutations = {
    increaseCounter(state){
        state.counter++
    },
    decreaseCounter(state){
        state.counter--
    },
}
const actions = {
    increment({commit}){
        commit('increaseCounter')
    },
    decrement({commit}){
        commit('decreaseCounter')
    },
    incAsync({commit}, payload){
        setTimeout(()=>{
            commit('increaseCounter')
        },payload.time)
    },
    decAsync({commit}){
        setTimeout(()=>{
            commit('decreaseCounter')
        },2000)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}