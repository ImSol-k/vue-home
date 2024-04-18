<template>

<div id="ss-wrap">

    <AppHeader @update="catchKeyword" />
    <!-- //header 부분 -->

    <AppNavView />
    <!-- //nav 부분 -->

    <div class="ss-content clearfix">
        
        <SlideView />
        <!-- 슬라이드 나오는부분 -->
        <div class="ss-goods-text clearfix">
            <span>전체 상품</span>
            <div class="ss-dropdown">
                <button class="ss-dropbtn" id="sortButton" type="button" v-on:click="go">더보기</button>
                
            </div>
        </div>
        
        <div class="ss-goodsList clearfix">
            <div class="goods" v-for="(list, i) in goodsList" v-bind:key="i" >
                <img :data-no="`${list.productNo}`" v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${list.mainImg}`" v-on:click="push"><br>
                <span>{{ list.category }}</span><br>
                <span>{{ list.productName }}</span><br>
                <span>별점 : {{ list.star }}</span>&nbsp;
                <span>가격 : {{ Number(list.price).toLocaleString('ko-KR') }} 원</span>
                
            </div>
        </div>
        <Observer @show="loadItem"></Observer>

    </div>
    <!-- //ss-content 부분 -->

    <AppFooter />
    <!-- //footer 부분 -->

</div>
<!-- //wrap -->
</template>
<script setup>
import Observer from '@/components/ObserverView.vue'
</script>

<script>
import '@/assets/css/main/ss-home.css';
import '@/assets/css/main/ss-main.css';
import AppHeader from '@/components/AppHeader.vue';
import AppNavView from '@/components/AppNavView.vue';
import AppFooter from '@/components/AppFooter.vue';
import SlideView from '@/components/SlideView.vue';
import axios from 'axios';

export default {
    name: "MainView",
    components: {
        AppHeader,
        AppNavView,
        AppFooter,
        SlideView,
    },
    data() {
        return {
            goodsList :[],
            page : 0
        }
    },
    methods: {
        catchKeyword(keyword){
            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/home/main`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: { page : this.page, keyword : keyword}, //get방식 파라미터로 값이 전달
                // data: , //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                if(response.data.result == 'success' && response.data.apiData != null){
                    this.goodsList.push(...(response.data.apiData));
                } else {
                    console.log(response.data.message);
                }
            }).catch(error => {
                console.log(error);
            });
            
        },
        loadItem(){
            this.page ++;
            this.catchKeyword();
        },
        // 이미지 눌렀을때 상품으로 이동
        push(event){
            let no =event.target.dataset.no
            console.log(no);
            this.$router.push('/product/'+ no);
        },
        go(){
            this.$router.push('/category');
        }
      
    },
    mounted() {
       
    },
    created (){
        
    }
};
</script>


<style>

</style>
