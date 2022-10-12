import Vue from 'vue';
import Vuex from 'vuex';
import counter from "./modules/counter"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        
        value: 0
    },
    getters: {
       
        getValue(state){
            return state.value;
        }
    },
    mutations : {
        // updateCounter(state,value){
        //     state.counter+=value
        // }
       
        setValue(state,payload){
            state.value = payload;
        }
    },
    actions: {
       
        setValueData({commit},payload){
            commit('setValue',payload);
        }
    },
    modules : {
        counter
    }
})