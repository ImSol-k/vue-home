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
                    <p id="headerCartCount">{{ this.$store.state.cartCount }}</p>
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

export default {
    name: 'AppHeader',
    components: {

    },
    data() {
        return {
            keyword: '',
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
        
    },
    created() {
    }
}

</script>

<style></style>