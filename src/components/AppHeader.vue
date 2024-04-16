<template>

<header>
    <div class="ss-header0">
        <div class="ss-header1">
            <!-- 누르면 둘다 홈으로 -->
            <img src="../assets/images/homedeco/homelogo.png">
            <span><router-link to="/">집꾸며조</router-link></span>
        </div>
        <!-- //header1 -->

        <div class="ss-header2">
            <!-- 검색 키워드 사용 -->
            <!-- v-on:keyup.enter="submit" -->
            <img src="../assets/images/homedeco/find.png">
            <input type="text" name="keyword" value="" placeholder="상품명으로 검색하세요.">
        </div>
        <!-- //header2 -->

        <div class="ss-header3">
            <!-- 누르면 장바구니 페이지로 -->
            <!-- vuex에 카트가 생기면 빨간불 -->
            
            <img src="../assets/images/homedeco/cart.png">
            <img id="ss-red" src="../assets/images/homedeco/red.jpg">
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

export default {
    name : 'AppHeader',
    components : {

    },
    data (){
        return {

        }
    },
    methods : {

    },
    created (){

    }
}

</script>

<style>

</style>