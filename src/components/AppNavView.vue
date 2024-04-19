<template>

<nav class="clearfix">
    <div class="nav0">
        <div class="nav1">
            <!-- https://bomango.tistory.com/52 -->
            <ul class="nav1-main" v-on:mouseleave="mouseleave" >
                <li>
                    <router-link to="/category" v-on:mouseover="mouseover">침대</router-link>
                    <ul class="nav1-sub" v-show="show">
                        <li v-on:click.prevent="showProductList('bed')"><a>침대</a></li>
                        <li v-on:click.prevent="showProductList('mattress')"><a>매트리스</a></li>
                        <li v-on:click.prevent="showProductList('frame')"><a>침대프레임</a></li>
                    </ul>
                </li>
                <li>
                    <router-link to="/category"  v-on:mouseover="mouseover">쇼파</router-link>
                    <ul class="nav1-sub" v-show="show">
                        <li v-on:click.prevent="showProductList('normal-sofa')"><a>일반쇼파</a></li>
                        <li v-on:click.prevent="showProductList('lounge-sofa')"><a>좌식쇼파</a></li>
                        <li v-on:click.prevent="showProductList('single-sofa')"><a>1인용 쇼파</a></li>
                    </ul>
                </li>
                <li>
                    <router-link to="/category"  v-on:mouseover="mouseover" >테이블</router-link>
                    <ul class="nav1-sub" v-show="show">
                        <li v-on:click.prevent="showProductList('dining-table')"><a>식탁</a></li>
                        <li v-on:click.prevent="showProductList('side-table')"><a>사이드 테이블</a></li>
                    </ul>
                </li>
                <li>
                    <router-link to="/category" v-on:mouseover="mouseover">옷장</router-link>
                    <ul class="nav1-sub" v-show="show">
                        <li v-on:click.prevent="showProductList('closet')"><a>옷장</a></li>
                        <li v-on:click.prevent="showProductList('hanger')"><a>행거</a></li>
                        <li v-on:click.prevent="showProductList('built-in')"><a>붙박이장</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- nav1 -->
        
        <!-- https://apost.dev/1121/#google_vignette -->
        <!-- <div class="rollingbanner">
            <div class="title" >&nbsp;</div>
            <ul class="nav2-hit">
                <li  class="current"><router-link to="/"></router-link></li>
                <li class="next"><router-link to="/">2.의자</router-link></li>
                <li><router-link to="/">3.쇼파</router-link></li>
                <li><router-link to="/">4.1인쇼파</router-link></li>
                <li><router-link to="/">5.좌식쇼파</router-link></li>
                <li><router-link to="/">6.붙박이장</router-link></li>
                <li><router-link to="/">7.행거</router-link></li>
                <li><router-link to="/">8.식탁</router-link></li>
                <li><router-link to="/">9.침대프레임</router-link></li>
                <li class="prev"><router-link to="/">10.매트리스</router-link></li>
            </ul>
        </div> -->

        
    </div>
    <!-- nav0 -->
</nav>
<!-- //nav 부분 -->

</template>

<script>
import '@/assets/css/main/ss-home.css';
import '@/assets/css/main/ss-main.css';
// import axios from 'axios';

export default {
    name : 'AppNavView',
    components : {},
    data (){
        return{
            show : false, // 서브메뉴용 체크
            category : '',
            hit1 : '',
            hit2 : '',
            hit3 : '',
            hit4 : '',
            hit5 : '',
            hit6 : '',
            hit7 : '',
            hit8 : '',
            hit9 : '',
            hit10 : ''
        }
    },
    methods : {
        mouseover(){ // 마우스 올리면 서브메뉴 보여줌
            this.show = true;
        },
        mouseleave(){ // 마우스 떼면 서브메뉴 사라짐
            this.show = false;
        },
        showProductList(category){ 
            this.$store.commit('setCategory',category);
            if(this.$route.path != '/category'){
                this.$router.push('/category');
            } else {
                this.$emit('list',category);
            }   
        },
        // getHitList(){
        //     if(this.$store.state.hitList == ""){
        //         axios({
        //             method: 'get', // put, post, delete 
        //             url: `${this.$store.state.apiBaseUrl}/home/main/hits`,
        //             headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
        //             // params: , //get방식 파라미터로 값이 전달
        //             // data: , //put, post, delete 방식 자동으로 JSON으로 변환 전달
        //             responseType: 'json' //수신타입
        //         }).then(response => {
        //             let list = response.data.apiData;
        //             this.$store.commit('setHitList',response.data.apiData);
        //             this.hit1 = list[0];
        //             this.hit2 = list[1];
        //             this.hit3 = list[2];
        //             this.hit4 = list[3];
        //             this.hit5 = list[4];
        //             this.hit6 = list[5];
        //             this.hit7 = list[6];
        //             this.hit8 = list[7];
        //             this.hit9 = list[8];
        //             this.hit10 = list[9];

        //         }).catch(error => {
        //             console.log(error);
        //         });
        //     } else {
        //         // console.log(this.hitList);
        //     }z
        // },zzzz
        // rollingCallback(){
        //     //.prev 클래스 삭제
        //     document.querySelector('.rollingbanner .prev').classList.remove('prev');

        //     //.current -> .prev
        //     let current = document.querySelector('.rollingbanner .current');
        //     current.classList.remove('current');
        //     current.classList.add('prev');

        //     //.next -> .current
        //     let next = document.querySelector('.rollingbanner .next');
        //     //다음 목록 요소가 널인지 체크
        //     if(next.nextElementSibling == null){
        //         document.querySelector('.rollingbanner ul li:first-child').classList.add('next');
        //     }else{
        //         //목록 처음 요소를 다음 요소로 선택
        //         next.nextElementSibling.classList.add('next');
        //     }
        //     next.classList.remove('next');
        //     next.classList.add('current');
        // }
    },
    created(){
        // // this.getHitList();
        // document.addEventListener('DOMContentLoaded', ()=>{
        //     let interval = window.setInterval(this.rollingCallback, 3000);
        //     document.querySelector('.rollingbanner').addEventListener('mouseover',function(){
        //         window.clearInterval(interval);
        //     })
        //     document.querySelector('.rollingbanner').addEventListener('mouseout',function(){
        //         interval = window.setInterval(this.rollingCallback, 3000);
        //     })
        // })
    }
}
</script>

<style>

</style>