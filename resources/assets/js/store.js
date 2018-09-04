import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        Laravel,
        test: 'test',
        menu: {
            state: false,
        }

    },
    getters: {
        Laravel(state){
            return state.Laravel;
        },
        state(state){
            return state;
        },
    },
    mutations: {

    },

    actions: {

    }
});
