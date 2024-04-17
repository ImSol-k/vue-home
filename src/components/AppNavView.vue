<template>

<nav class="clearfix">
    <div class="nav0">
        <div class="nav1">
            <!-- https://bomango.tistory.com/52 -->
            <ul class="nav1-main" v-on:mouseleave="mouseleave" >
                <li>
                    <router-link to="/category" v-on:mouseover="mouseover">침대</router-link>
                    <ul class="nav1-sub" v-show="show">
                        <li><a>침대</a></li>
                        <li><a>매트리스</a></li>
                        <li><a>침대프레임</a></li>
                    </ul>
                </li>
                <li>
                    <router-link to="/category"  v-on:mouseover="mouseover">쇼파</router-link>
                    <ul class="nav1-sub" v-show="show">
                        <li><a>일반쇼파</a></li>
                        <li><a>좌식쇼파</a></li>
                        <li><a>1인용 쇼파</a></li>
                    </ul>
                </li>
                <li>
                    <router-link to="/category"  v-on:mouseover="mouseover" >테이블</router-link>
                    <ul class="nav1-sub" v-show="show">
                        <li><a>식탁</a></li>
                        <li><a>사이드 테이블</a></li>
                    </ul>
                </li>
                <li>
                    <router-link to="/category" v-on:mouseover="mouseover" >옷장</router-link>
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

</template>

<script>
import '@/assets/css/main/ss-home.css';
import '@/assets/css/main/ss-main.css';

export default {
    name : 'AppNavView',
    components : {},
    data (){
        return{
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


    },
    created(){

    }
}
</script>

<style>

</style>