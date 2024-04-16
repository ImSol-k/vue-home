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
                <input v-model="loginVo.password" type="password" id="password" name="password" placeholder="비밀번호를 입력하세요"
                    required>
            </div>
            <button type="submit" class="login-btn">로그인</button>
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
            }
        };
    },
    methods: {
        login() {
            axios({
                method: 'post', // put, post, delete
                url: `${this.$store.state.apiBaseUrl}/home/login`,
                headers: { //전송타입 + 토큰
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": "Bearer " + this.$store.state.token
                },
                data: this.loginVo,
                responseType: 'json' //수신타입
            }).then(function (response) {
                // 로그인 성공 시 처리
                console.log(response); //수신데이타
                console.log(response.data);

                // 로그인 성공 시 메인 화면으로 이동
                //this.$router.push("/");



            }).catch(function (error) {
                // 로그인 실패 시 처리
                console.error('로그인 실패:', error);

                
            });
            console.log("로그인 시도:", this.loginVo.id, this.loginVo.password);
        }
    },
};
</script>
