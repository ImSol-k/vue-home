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
        <div class="rollingbanner">
            <div class="title" >HOT  </div>
            <ul class="nav2-hit" >
                <li class="current"><router-link to="/" class="prev" >1.a</router-link></li>
                <li class="next"><router-link to="/" class="current">2.s</router-link></li>
                <li><router-link to="/" >3.f</router-link></li>
                <li><router-link to="/" >4.e</router-link></li>
                <li><router-link to="/" >5.g</router-link></li>
                <li><router-link to="/" >6.h</router-link></li>
                <li><router-link to="/" >7.k</router-link></li>
                <li><router-link to="/" >8.g</router-link></li>
                <li><router-link to="/" >9.getf</router-link></li>
                <li class="next"><router-link to="/" >10.f</router-link></li>
            </ul>
        </div>

        
    </div>
    <!-- nav0 -->
</nav>
<!-- //nav 부분 -->

</template>

<script>
import '@/assets/css/main/ss-home.css';
import '@/assets/css/main/ss-main.css';
import axios from 'axios';




export default {
    name : 'AppNavView',
    components : {},
    data (){
        return{
            show : false, // 서브메뉴용 체크
            hitList : '',
            category : ''
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
        getHitList(){
            if(this.$store.state.hitList == null){
                axios({
                    method: 'get', // put, post, delete 
                    url: `${this.$store.state.apiBaseUrl}/home/main/hits`,
                    headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                    // params: , //get방식 파라미터로 값이 전달
                    // data: , //put, post, delete 방식 자동으로 JSON으로 변환 전달
                    responseType: 'json' //수신타입
                }).then(response => {
                    console.log(response.data.apiData);
                    this.$store.commit('setHitList',response.data.apiData);
                    this.list = this.$store.state.hitList;
                }).catch(error => {
                    console.log(error);
                });
            }
        }


    },
    created(){
        this.getHitList();
    }
}
</script>

<style>

</style>