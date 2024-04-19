<template>
    <div class="wrap">
        <AppHeaderManager />

        <div class="content">
            <div class="side">
                <ul>
                    <li @click="toggleCategories">
                        <strong><router-link to="/manager/productlist">상품관리</router-link></strong>
                        <span v-if="showCategories"> △ </span>
                        <span v-else> ▽</span> <!-- 화살표 아이콘 -->
                    </li>
                    <ul v-show="showCategories"> <!-- 카테고리 리스트 -->
                        <li class="cate-li"><strong @click="getList('recent')">전체 상품 보기</strong></li>
                        <li class="cate-li">
                            <ul>
                                <li @click="toggleCategories00">
                                    <strong>침대</strong>
                                    <span v-if="showCategories00"> △ </span>
                                    <span v-else> ▽</span> <!-- 화살표 아이콘 -->
                                </li>
                                <ul v-show="showCategories00"> <!-- 카테고리 리스트 -->
                                    <li class="cate-li" v-on:click.prevent="showProductList('bed')"><a href="">침대</a>
                                    </li>
                                    <li class="cate-li" v-on:click.prevent="showProductList('mattress')"><a
                                            href="">매트리스</a></li>
                                    <li class="cate-li" v-on:click.prevent="showProductList('frame')"><a href="">침대
                                            프레임</a></li>
                                </ul>
                            </ul>
                        </li>
                        <li class="cate-li">
                            <ul>
                                <li @click="toggleCategories02">
                                    <strong>쇼파</strong>
                                    <span v-if="showCategories02"> △ </span>
                                    <span v-else> ▽</span> <!-- 화살표 아이콘 -->
                                </li>
                                <ul v-show="showCategories02"> <!-- 카테고리 리스트 -->
                                    <li class="cate-li" v-on:click.prevent="showProductList('normal-sofa')"><a
                                            href="">일반 쇼파</a></li>
                                    <li class="cate-li" v-on:click.prevent="showProductList('lounge-sofa')"><a
                                            href="">좌식 쇼파</a></li>
                                    <li class="cate-li" v-on:click.prevent="showProductList('single-sofa')"><a
                                            href="">1인용 쇼파</a></li>
                                </ul>
                            </ul>
                        </li>
                        <li class="cate-li">
                            <ul>
                                <li @click="toggleCategories03">
                                    <strong>테이블</strong>
                                    <span v-if="showCategories03"> △ </span>
                                    <span v-else> ▽</span> <!-- 화살표 아이콘 -->
                                </li>
                                <ul v-show="showCategories03"> <!-- 카테고리 리스트 -->
                                    <li class="cate-li" v-on:click.prevent="showProductList('dining-table')"><a
                                            href="">식탁</a></li>
                                    <li class="cate-li" v-on:click.prevent="showProductList('side-table')"><a
                                            href="">사이드 테이블</a></li>
                                </ul>
                            </ul>
                        </li>
                        <li class="cate-li">
                            <ul>
                                <li @click="toggleCategories04">
                                    <strong>옷장</strong>
                                    <span v-if="showCategories04"> △ </span>
                                    <span v-else> ▽</span> <!-- 화살표 아이콘 -->
                                </li>
                                <ul v-show="showCategories04"> <!-- 카테고리 리스트 -->
                                    <li class="cate-li" v-on:click.prevent="showProductList('closet')"><a href="">옷장</a>
                                    </li>
                                    <li class="cate-li" v-on:click.prevent="showProductList('hanger')"><a href="">행거</a>
                                    </li>
                                    <li class="cate-li" v-on:click.prevent="showProductList('built-in')"><a
                                            href="">붙박이장</a></li>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                    <li @click="toggleCategories05">
                        <strong>주문 관리</strong>
                        <span v-if="showCategories05"> △ </span>
                        <span v-else> ▽</span>
                    </li>
                    <ul v-show="showCategories05">
                        <li class="cate-li"><router-link to="/manager/chart">주문통계</router-link></li>
						<li class="cate-li"><router-link to="/manager/state">주문현황</router-link></li>
                    </ul>
                </ul>
            </div>
            <div class="main">
                <div class="insert">
                    <router-link to="/manager/productinsert">
                        <button class="insert-button">상품 등록</button>
                    </router-link>
                    <div class="dropdown">
                        <button class="dropbtn" id="sortButton">최신순</button>
                        <div class="dropdown-content">
                            <a href="#" @click="changeSort('recent')">최신순</a>
                            <a href="#" @click="changeSort('review')">리뷰순</a>
                            <a href="#" @click="changeSort('rating')">별점순</a>
                        </div>
                    </div>
                </div>
                <span class="manage-products">상품 관리</span>
                <div class="bed">
                    <h3><br>전체 상품</h3>
                    <div class="product" v-bind:key="i" v-for="(productVo, i) in productList">
                        <img class="main-img"
                            v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${productVo.main_img}`" alt="">
                        <div class="product-info">
                            <span class="product-name">{{ productVo.product_name }}</span>
                            <div class="review-manager">
                                <span v-for="(star, i) in 5" :key="i" class="star">
                                    <img v-if="productVo.avg_star > i" src="@/assets/images/homedeco/star.png" alt="">
                                    <img v-else src="@/assets/images/homedeco/star2.png" alt="">
                                </span>
                            </div>
                            <span class="product-rating">{{ productVo.avg_star }}</span>
                            <form v-on:submit.prevent="remove(productVo.product_no)" action="" method="">
                                <button class="delete-button">삭제</button>
                            </form>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
        </div>

        <AppFooter />

    </div>
</template>


<script>
import "@/assets/css/managerY/productLIst.css"
import AppHeaderManager from '@/components/AppHeaderManager.vue';
import AppFooter from '@/components/AppFooter.vue';
import axios from 'axios';

export default {
    name: "ProductListView",
    components: {
        AppHeaderManager,
        AppFooter
    },
    data() {
        return {
            showCategories: false,
            showCategories00: false,
            showCategories02: false,
            showCategories03: false,
            showCategories04: false,
            showCategories05: false,
            productList: [],
            productVo: {
                product_no: '',
                title: '',
                price: '',
                category: '',
                main_img: '',
                avg_star: ''
            },

        };
    },
    mounted() {
        document.getElementById('sortButton').innerText = '최신순';

        var dropdownItems = document.querySelectorAll('.dropdown-content a');
        dropdownItems.forEach(function (item) {
            item.addEventListener('click', function () {
                //var sortType = this.getAttribute('data-sort');
                document.getElementById('sortButton').innerText = this.innerText;
                
            });
        });
    },
    methods: {
        changeSort(sortType) {
            document.getElementById('sortButton').innerText = sortType;
            this.getList(sortType);
        },
        toggleCategories() {
            this.showCategories = !this.showCategories; // 클릭 시 카테고리 리스트를 보이거나 숨김
        },
        toggleCategories00() {
            this.showCategories00 = !this.showCategories00; // 클릭 시 카테고리 리스트를 보이거나 숨김
        },
        toggleCategories02() {
            this.showCategories02 = !this.showCategories02; // 클릭 시 카테고리 리스트를 보이거나 숨김
        },
        toggleCategories03() {
            this.showCategories03 = !this.showCategories03; // 클릭 시 카테고리 리스트를 보이거나 숨김
        },
        toggleCategories04() {
            this.showCategories04 = !this.showCategories04; // 클릭 시 카테고리 리스트를 보이거나 숨김
        },
        toggleCategories05() {
            this.showCategories05 = !this.showCategories05; // 클릭 시 카테고리 리스트를 보이거나 숨김
        },
        getList(sortType = 'recent') {
            console.log("데이터 가져오기");

            axios({
                method: 'get',
                url: `${this.$store.state.apiBaseUrl}/home/manager/list`,
                headers: { "Content-Type": "application/json; charset=utf-8" },
                params: { sortType: sortType },
                responseType: 'json'
            }).then(response => {
                console.log(response.data.apiData);
                this.productList = response.data.apiData;
            }).catch(error => {
                console.log(error);
            });
        },
        remove(product_no) {
            axios({
                method: 'delete',  //put,post,delete
                url: `${this.$store.state.apiBaseUrl}/home/manager/delete/` + product_no,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                this.productList = this.productList.filter(item => item.product_no !== product_no);
            }).catch(error => {
                console.log(error);
            });
        },
        showProductList(category) {
            console.log("리스트: " + category);
            axios({
                method: 'post',  //put,post,delete
                url: `${this.$store.state.apiBaseUrl}/home/manager/categorylist`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: { category: category },
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                this.productList = response.data.apiData;
            }).catch(error => {
                console.log(error);
            });
        },
    },
    created() {
        this.getList('recent'); // 기본값으로 최신순을 설정
    }
};
</script>
