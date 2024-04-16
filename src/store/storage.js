import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {
        return {
            //apiBaseUrl: "http://localhost:9000",
            apiBaseUrl: "http://54.180.79.237:9000",
            token: ""
        };
    },
    mutations: {
        setToken(state, payload){
            state.token = payload;
        },

    },
    plugins: [
        createPersistedState({
            paths: ['token']
        })
    ]
});