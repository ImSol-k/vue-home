import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {
        return {
            apiBaseUrl: "http://localhost:9090",
            //apiBaseUrl: "http://54.180.79.237:9000",
            token: "",
            nowOrderList: []
        };
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setNowPayment(state, nowOrderList) {
            state.nowOrderList = nowOrderList;
        },
    },
    plugins: [
        createPersistedState({
            paths: ['token']
        })
    ]
});