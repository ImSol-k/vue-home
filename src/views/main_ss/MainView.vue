<template>

<div id="ss-wrap">

    <AppHeader/>
    <!-- //header 부분 -->

    <nav class="clearfix">
        <div class="nav0">
            <div class="nav1">
                <!-- https://bomango.tistory.com/52 -->
                <ul class="nav1-main" v-on:mouseleave="mouseleave" >
                    <li>
                        <router-link to="/" v-on:mouseover="mouseover">침대</router-link>
                        <ul class="nav1-sub" v-show="show">
                            <li><a>침대</a></li>
                            <li><a>매트리스</a></li>
                            <li><a>침대프레임</a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/" v-on:mouseover="mouseover" >쇼파</router-link>
                        <ul class="nav1-sub" v-show="show">
                            <li><a>일반쇼파</a></li>
                            <li><a>좌식쇼파</a></li>
                            <li><a>1인용 쇼파</a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/" v-on:mouseover="mouseover" >테이블</router-link>
                        <ul class="nav1-sub" v-show="show">
                            <li><a>식탁</a></li>
                            <li><a>사이드 테이블</a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/" v-on:mouseover="mouseover" >옷장</router-link>
                        <ul class="nav1-sub" v-show="show">
                            <li><a>옷장</a></li>
                            <li><a>행거</a></li>
                            <li><a>붙박이장</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- nav1 -->
            <!-- https://apost.dev/1121/#google_vignette -->
            <div class="rollingbanner">
                <div class="title">1</div>
                <ul class="nav2-hit">
                    <li><router-link to="/" class="prev" >{{ hitList[0] }}</router-link></li>
                    <li><router-link to="/" class="current">{{ hitList[1] }}</router-link></li>
                    <li><router-link to="/" >{{ hitList[2] }}</router-link></li>
                    <li><router-link to="/" >{{ hitList[3] }}</router-link></li>
                    <li><router-link to="/" >{{ hitList[4] }}</router-link></li>
                    <li><router-link to="/" >{{ hitList[5] }}</router-link></li>
                    <li><router-link to="/" >{{ hitList[6] }}</router-link></li>
                    <li><router-link to="/" >{{ hitList[7] }}</router-link></li>
                    <li><router-link to="/" >{{ hitList[8] }}</router-link></li>
                    <li><router-link to="/" >{{ hitList[9] }}</router-link></li>
                    <li><router-link to="/" class="next">{{ hitList[10] }}</router-link></li>
                </ul>
            </div>

            
        </div>
        <!-- nav0 -->
    </nav>
    <!-- //nav 부분 -->

    <div class="ss-content clearfix">
        
        <SlideView />
        <!-- 슬라이드 나오는부분 -->
        <div class="ss-goods-text clearfix">
            <span>전체 상품</span>
            <div class="ss-dropdown">
                <button class="ss-dropbtn" id="sortButton">최신순</button>
                <div class="ss-dropdown-content">
                    <a href="#" data-sort="recent">최신순</a>
                    <a href="#" data-sort="review">리뷰순</a>
                    <a href="#" data-sort="rating">별점순</a>
                </div>
            </div>
        </div>
        <!-- https://cntechsystems.tistory.com/58 -->
        <div class="ss-goodsList" >
            <div class="ss-goods" v-for="(list, i) in goodsList" v-bind:key="i">
                <img v-bind:src="`${ list.main_img }`"><br>
                <span>{{ list.category }}</span><br>
                <span>{{ list.name }}</span><br>
                <span>별점 : {{ list.star }}</span>&nbsp;
                <span>가격 : {{ list.price }}</span>                
            </div>
        </div>    


    </div>
    <!-- //content-slide 부분 -->

    <AppFooter />
    <!-- //footer 부분 -->

</div>
<!-- //wrap -->
</template>


<script>
import '@/assets/css/main/ss-home.css';
import '@/assets/css/main/ss-main.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import SlideView from '@/components/SlideView.vue';

export default {
    name: "MainView",
    components: {
        AppHeader,
        AppFooter,
        SlideView
    },
    data() {
        return {
            
            show : false, // 서브메뉴용 체크
            hitList : [
                '쇼파' ,
                '침대',
                '쇼파' ,
                '침대' ,
                '쇼파' ,
                '침대' ,
                '쇼파',
                '침대' ,
                '쇼파' ,
                '침대' 
            ],
            goodsList :[ 
                    {
                        main_img : require('../../assets/images/main/mainlist/img1.jpg'), 
                        category :'쇼파',
                        name : 'ㅁㄴㅇ쇼파',
                        star : '4',
                        price :'20000'
                    },
                    {
                        main_img : require('../../assets/images/main/mainlist/img1.jpg'), 
                        category :'침대',
                        name : 'ㅁㄴㅇ침대',
                        star : '4',
                        price :'20000'
                    },
                    {
                        main_img : require('../../assets/images/main/mainlist/img1.jpg'), 
                        category :'카테고리',
                        name : '이름',
                        star : '4',
                        price :'20000'
                    },
                    {
                        main_img : require('../../assets/images/main/mainlist/img1.jpg'),
                        category :'카테고리',
                        name : '이름',
                        star : '4',
                        price :'20000'
                    },
                    {
                        main_img : require('../../assets/images/main/mainlist/img1.jpg'),
                        category :'카테고리',
                        name : '이름',
                        star : '4',
                        price :'20000'
                    },
                    {
                        main_img : require('../../assets/images/main/mainlist/img1.jpg'),
                        category :'카테고리',
                        name : '이름',
                        star : '4',
                        price :'20000'
                    },
                    {
                        main_img : require('../../assets/images/main/mainlist/img1.jpg'),
                        category :'카테고리',
                        name : '이름',
                        star : '4',
                        price :'20000'
                    },
                    {
                        main_img : require('../../assets/images/main/mainlist/img1.jpg'),
                        category :'카테고리',
                        name : '이름',
                        star : '4',
                        price :'20000'
                    }

            ]
        }
    },
    methods: {
        mouseover(){ // 마우스 올리면 서브메뉴 보여줌
            this.show = true;
        },
        mouseleave(){ // 마우스 떼면 서브메뉴 사라짐
            this.show = false;
        },
        hits(){ // 별점순 눌렀을때
            console.log('hits');
        },
        review(){ // 리뷰순 눌렀을때 
            console.log('review');
        },
        getList(){
            console.log('getlist');
        },
         
    },
    mounted (){
    },
    
    created (){

    }
};
</script>


<style></style>
