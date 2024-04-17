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
            <input type="text" name="keyword" v-model="keyword" placeholder="상품명으로 검색하세요.">
        </div>
        <!-- //header2 -->

        <div class="ss-header3">
            <!-- 누르면 장바구니 페이지로 -->
            <!-- vuex에 카트가 생기면 빨간불 -->
            
            <img src="../assets/images/homedeco/cart.png">
            <img id="ss-red" src="../assets/images/homedeco/red.png">
            <!-- 로그인하기전 -->
            <ul>
                <li><a>로그인</a></li>
                <li><a>회원가입</a></li>
                <li><a>고객센터</a></li>
            </ul>

            <!-- 로그인하고나서 -->
            <!-- <ul>   
                <li><a>ㅁㅁㅁ님</a></li>
                <li><a>로그아웃</a></li>
                <li><a>마이페이지</a></li>
            </ul> -->
            <!-- 관리자가 로그인했을때 -->
            <!-- <ul>   
                <li><a>관리자</a></li>
                <li><a>로그아웃</a></li>
                <li><a>관리페이지</a></li>
            </ul> -->
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
    name : 'AppHeader',
    components : {

    },
    data (){
        return {
            keyword : ""
        }
    },
    methods : {
        search(){
            this.$emit('update',this.keyword);
        },
        setColor(){
            console.log('setColor');
            if(this.$store.state.productColor == null){
                axios({
                    method: 'get', // put, post, delete 
                    url: `${this.$store.state.apiBaseUrl}/home/getColor`,
                    headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                    // params: { page : this.page, keyword : keyword}, //get방식 파라미터로 값이 전달
                    // data: , //put, post, delete 방식 자동으로 JSON으로 변환 전달
                    responseType: 'json' //수신타입
                }).then(response => {
                    console.log(response);

                }).catch(error => {
                    console.log(error);
                });
            } else {
                console.log('컬러있음');
            }
        }
    },
    created (){
        this.setColor();
    }
}

</script>

<style>

</style>