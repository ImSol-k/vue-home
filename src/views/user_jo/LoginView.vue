<template>
    <div class="login-container">

        <div class="login-logo">
            <img src="../../assets/images/homedeco/homelogo.png" alt="집꾸며조">
            <div class="login-brand-text"></div>
        </div>

        <form id="loginForm" @submit.prevent="login">
            <div class="login-form-group">
                <label for="id">아이디</label>
                <input v-model="loginVo.id" type="text" id="username" name="username" placeholder="아이디를 입력하세요" required>
            </div>
            <div class="login-form-group">
                <label for="password">비밀번호</label>
                <input v-model="loginVo.password" type="password" id="password" name="password"
                    placeholder="비밀번호를 입력하세요" required>
            </div>
            <button type="submit" class="login-btn">로그인</button>
            <!-- 실패 메시지를 표시할 곳 -->
            <div v-if="loginFailed" class="login-failed-message">로그인에 실패했습니다. 다시 시도해주세요.</div>
        </form>



    </div>
</template>




<script>
import "@/assets/css/user/login.css";
import axios from 'axios';

export default {
    name: "LoginView",
    components: {
    },
    data() {
        return {
            loginVo: {
                id: "",
                password: ""
            },
            loginFailed: false, // 로그인 실패 여부를 나타내는 변수,
            user_no: '',
            cartCount: ''
        };
    },
    methods: {
        login() {
            console.log("로그인");

            axios({
                method: 'post', // put, post, delete
                url: `${this.$store.state.apiBaseUrl}/home/login`,
                headers: { //전송타입 + 토큰
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": "Bearer " + this.$store.state.token
                },
                data: this.loginVo,

                responseType: 'json' //수신타입
            }).then(response => {
                if (response.data.result == "success") {

                    // 로그인 성공 시 처리
                    console.log(response); //수신데이타
                    console.log(response.data); //수신데이타 User

                    //로그인 사용자 정보
                    let authUser = response.data.apiData;

                    //token 응답문서의 해더에 있음 
                    //"Authorization, Bearer  + token"
                    const token = response.headers.authorization.split(" ")[1]

                    //vuex저장
                    this.$store.commit("setAuthUser", authUser);
                    this.$store.commit("setToken", token);

                    console.log(authUser);
                    console.log(token);
                    console.log("토큰 값:", this.$store.state.token);

                    // 로그인 성공 시 메인 화면으로 이동
                    this.cart(authUser.userNo);
                    this.$router.push("/");
                } else {
                    // 로그인 실패 처리
                    this.loginFailed = true;
                }
            }).catch(error => {
                // 로그인 실패 시 처리
                console.error('로그인 실패:', error);
                this.loginFailed = true;

                // 입력값 초기화 확인
                console.log("로그인 실패. 입력값 초기화:", this.loginVo.id, this.loginVo.password);

                // 입력값 초기화
                this.loginVo.id = "";
                this.loginVo.password = "";

            });

            console.log("로그인 시도:", this.loginVo.id, this.loginVo.password);
        },
        cart(userNo) {
            axios({
                method: 'get',  //put,post,delete
                url: `${this.$store.state.apiBaseUrl}/home/cartcount`,
                headers: { "Content-Type": "application/json; charset=utf-8", "Authorization": "Bearer " + this.$store.state.token }, //전송타입
                params: { user_no: userNo },
                responseType: 'json' //수신타입
            }).then(response => {
                console.log("============================");
                console.log(response.data.apiData); //수신데이타
                this.cartCount = response.data.apiData;
                this.$store.commit("setCartCount", response.data.apiData);
            }).catch(error => {
                console.log(error);
            });
        }
    },
};
</script>
