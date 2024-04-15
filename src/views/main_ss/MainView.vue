<template>

<div id="wrap">

    <AppHeader/>
    <!-- //header 부분 -->

    <nav class="clearfix">
        <div class="nav0">
            <div class="nav1">
                <!-- https://bomango.tistory.com/52 -->
                <ul class="nav1-main" v-on:mouseleave="mouseleave" >
                    <li>
                        <router-link to="/" v-on:mouseover="mouseover" >침대</router-link>
                        <ul class="nav1-sub" v-show="show">
                            <li><a>서브1</a></li>
                            <li><a>서브2</a></li>
                            <li><a>서브3</a></li>
                            <li><a>서브4</a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/" v-on:mouseover="mouseover" >쇼파</router-link>
                        <ul class="nav1-sub" v-show="show">
                            <li><a>서브1</a></li>
                            <li><a>서브2</a></li>
                            <li><a>서브3</a></li>
                            <li><a>서브4</a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/" v-on:mouseover="mouseover" >책상</router-link>
                        <ul class="nav1-sub" v-show="show">
                            <li><a>서브1</a></li>
                            <li><a>서브2</a></li>
                            <li><a>서브3</a></li>
                            <li><a>서브4</a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/" v-on:mouseover="mouseover" >옷장</router-link>
                        <ul class="nav1-sub" v-show="show">
                            <li><a>서브1</a></li>
                            <li><a>서브2</a></li>
                            <li><a>서브3</a></li>
                            <li><a>서브4</a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/" v-on:mouseover="mouseover" >기타</router-link>
                        <ul class="nav1-sub" v-show="show">
                            <li><a>서브1</a></li>
                            <li><a>서브2</a></li>
                            <li><a>서브3</a></li>
                            <li><a>서브4</a></li>
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
        <div class="goods-text clearfix">
            <span>전체 상품</span>
            <button type="button" v-on:click="hits">별점순</button>
            <button type="button" v-on:click="review">리뷰순</button>
        </div>

        <div class="goodsList">
            <div>
                <img src="">
            </div>
        </div>    


    </div>
    <!-- //content-slide 부분 -->

    <footer>
        <div class="footer">
            <ul>
                <li>집꾸며조</li>
                <li>CopyRight</li>
                <li>고객센터</li>
                <li>02-1111-1111</li>
            </ul>
        </div>
    </footer>
    <!-- //footer 부분 -->

</div>
<!-- //wrap -->
</template>


<script>
import '@/assets/css/main/ss-home.css';
import '@/assets/css/main/ss-main.css';
import AppHeader from '@/components/AppHeader.vue';
import SlideView from '@/components/SlideView.vue';

export default {
    name: "MainView",
    components: {
        AppHeader,
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
            ]
        };
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
        }
    },
    created (){

    }
};
</script>


<style></style>
