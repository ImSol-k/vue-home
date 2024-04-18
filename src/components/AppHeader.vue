<template>

    <header>
        <div class="ss-header0">
            <div class="ss-header1">
                <!-- 누르면 둘다 홈으로 -->
                <img src="../assets/images/homedeco/logo.png">
                <span><router-link to="/">집꾸며조</router-link></span>
            </div>
            <!-- //header1 -->

            <div class="ss-header2">
                <!-- 검색 키워드 사용 -->
                <img src="../assets/images/homedeco/find.png" v-on:click="search">
                <input type="text" name="keyword" v-model="keyword" placeholder="카테고리로 검색하세요.">
            </div>
            <!-- //header2 -->

            <div class="ss-header3">
                <!-- 로그인하기전 -->
                <ul v-if="this.$store.state.token === null">
                    <li><router-link to="/login">로그인</router-link></li>
                    <li><a>회원가입</a></li>
                    <li><a>고객센터</a></li>
                </ul>
                <ul v-if="this.$store.state.token != null && this.$store.state.authUser != null">
                    <router-link to="/cart"><img src="../assets/images/homedeco/cart.png"></router-link>
                    <em v-if="this.$store.state.userNo !== null && cartCount !== null" id="headerCartCount">{{ cartCount
                        }}</em>
                    <li><router-link to="/mypage">ㅁㅁㅁ님</router-link></li>
                    <li><a v-on:click="logOut">로그아웃</a></li>
                </ul>
                <ul v-if="this.$store.state.userNo === 0">
                    <li><router-link to="/manager/productlist">관리자</router-link></li>
                    <li><a v-on:click="logOut">로그아웃</a></li>
                    <li><router-link to="/manager/productlist">관리페이지</router-link></li>
                </ul>
            </div>
            <!-- //header3 -->
        </div>
        <!-- header0 -->
    </header>
    <!-- //header 부분 -->

</template>

<script>
import '@/assets/css/main/ss-home.css';
import axios from 'axios';

export default {
    name: 'AppHeader',
    components: {

    },
    data() {
        return {
            userNo: this.$store.state.userNo,
            keyword: '',
            cartCount: ''
        }
    },
    methods: {
        search() {
            this.$emit('update', this.keyword);
            this.$router.push('/category');
            this.keyword = '';
        },
        logOut() {
            this.$store.commit('setAuthUser', null);
            this.$store.commit('setToken', null);
            this.$store.commit('setNowPayment', null);
            this.$router.push('/');
        },
        cart() {
            axios({
                method: 'get',  //put,post,delete
                url: `${this.$store.state.apiBaseUrl}/home/cartcount`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                data: this.user_no,
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                this.cartCount = response.data.apiData
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created() {
        this.cart();
    }
}

</script>

<style></style>