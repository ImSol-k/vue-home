import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {
        return {
            //url베이스
            //apiBaseUrl: "http://localhost:9090",
            apiBaseUrl: "http://54.180.79.237:9090",
            token: "",//토큰
            userNo: "",  //로그인한 유저번호
            nowOrderList: "",//장바구니리스트
            productColor: [],    //상품옵션 색상
            authUser: {},
            category: "",
            cartProductTotalcount: "",
            cartCount: "",
            hitList: "",
            totalPrice: ""
        };
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUserNo(state, userNo) {
            state.userNo = userNo;
        },
        setNowPayment(state, nowOrderList) {
            state.nowOrderList = nowOrderList;
        },
        setColor(state, productColor) {
            state.productColor = productColor;
        },
        setAuthUser(state, authUser){
            state.authUser = authUser;
        },
        setCategory(state, category){
            state.category = category;
        },
        setCartCount(state, cartCount){
            state.cartCount = cartCount;
        },
        setHitList(state,hitList){
            state.hitList = hitList
        },
        setTotalPrice(state,totalPrice){
            state.totalPrice = totalPrice
        }
    },
    plugins: [
        createPersistedState({
            paths: ['token','authUser', 'nowOrderList', 'totalPrice']
        })
    ]
});