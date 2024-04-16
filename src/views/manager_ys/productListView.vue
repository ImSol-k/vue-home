<template>
    <div class="wrap">
        <AppHeader />

        <div class="content">
            <div class="side">
                <ul>
                    <li @click="toggleCategories">
                        <strong>상품 관리</strong>
                        <span v-if="showCategories"> △ </span>
                        <span v-else> ▽</span> <!-- 화살표 아이콘 -->
                    </li>
                    <ul v-show="showCategories"> <!-- 카테고리 리스트 -->
                        <li class="cate-li"><strong>전체 상품 보기</strong></li>
                        <li class="cate-li">
                            <ul>
                                <li @click="toggleCategories00">
                                    <strong>침대</strong>
                                    <span v-if="showCategories00"> △ </span>
                                    <span v-else> ▽</span> <!-- 화살표 아이콘 -->
                                </li>
                                <ul v-show="showCategories00"> <!-- 카테고리 리스트 -->
                                    <li class="cate-li"><a href="">침대</a></li>
                                    <li class="cate-li"><a href="">매트리스</a></li>
                                    <li class="cate-li"><a href="">침대 프레임</a></li>
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
                                    <li class="cate-li"><a href="">일반 쇼파</a></li>
                                    <li class="cate-li"><a href="">좌식 쇼파</a></li>
                                    <li class="cate-li"><a href="">1인용 쇼파</a></li>
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
                                    <li class="cate-li"><a href="">식탁</a></li>
                                    <li class="cate-li"><a href="">사이드 테이블</a></li>
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
                                    <li class="cate-li"><a href="">옷장</a></li>
                                    <li class="cate-li"><a href="">행거</a></li>
                                    <li class="cate-li"><a href="">붙박이장</a></li>
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
                        <li class="cate-li"><a href="">주문 통계</a></li>
                        <li class="cate-li"><a href="">주문 현황</a></li>
                    </ul>
                </ul>
            </div>
            <div class="main">
                <div class="insert">
                    <button class="insert-button">상품 등록</button>
                    <div class="dropdown">
                        <button class="dropbtn" id="sortButton">최신순</button>
                        <div class="dropdown-content">
                            <a href="#" data-sort="recent">최신순</a>
                            <a href="#" data-sort="review">리뷰순</a>
                            <a href="#" data-sort="rating">별점순</a>
                        </div>
                    </div>
                </div>
                <span class="manage-products">상품 관리 > 전체 상품 보기</span>
                <div class="bed">
                    <h3><br>침대</h3>

                    <div class="product">
                        <img src="../../assets/images/managerY/bed.jpg" alt="상품1">
                        <div class="product-info">
                            <span class="product-name">어쩌구 침대</span>
                            <div class="review">
                                <img src="../../assets/images/homedeco/star.png"><img
                                    src="../../assets/images/homedeco/star.png"><img
                                    src="../../assets/images/homedeco/star.png"><img
                                    src="../../assets/images/homedeco/star.png"><img
                                    src="../../assets/images/homedeco/star2.png">
                            </div>
                            <span class="product-rating">4.5</span>
                            <button class="delete-button">삭제</button>
                        </div>
                    </div>
                    <div class="product">
                        <img src="../../assets/images/managerY/bed.jpg" alt="상품2">
                        <div class="product-info">
                            <span>어쩌구 작은 침대</span>
                            <div class="review">
                                <img src="../../assets/images/homedeco/star.png"><img
                                    src="../../assets/images/homedeco/star.png"><img
                                    src="../../assets/images/homedeco/star.png"><img
                                    src="../../assets/images/homedeco/star.png"><img
                                    src="../../assets/images/homedeco/star2.png">
                            </div>
                            <span class="product-rating">4.5</span>
                            <button class="delete-button">삭제</button>
                        </div>
                    </div>
                </div>

                <br>

                <div class="sofa">
                    <h3><br>소파</h3>
                    <div class="product">
                        <img src="../../assets/images/managerY/sofa.jpg" alt="상품1">
                        <div class="product-info">
                            <span>어쩌구 쇼파</span>
                            <div class="review">
                                <img src="../../assets/images/homedeco/star.png"><img
                                    src="../../assets/images/homedeco/star.png"><img
                                    src="../../assets/images/homedeco/star.png"><img
                                    src="../../assets/images/homedeco/star.png"><img
                                    src="../../assets/images/homedeco/star2.png">
                            </div>
                            <span class="product-rating">4.5</span>
                            <button class="delete-button">삭제</button>
                        </div>
                    </div>
                    <div class="product">
                        <img src="../../assets/images/managerY/sofa.jpg" alt="상품2">
                        <div class="product-info">
                            <span>어쩌구 쇼파 야호</span>
                            <div class="review">
                                <img src="../../assets/images/homedeco/star.png"><img
                                    src="../../assets/images/homedeco/star.png"><img
                                    src="../../assets/images/homedeco/star.png"><img
                                    src="../../assets/images/homedeco/star.png"><img
                                    src="../../assets/images/homedeco/star2.png">
                            </div>
                            <span class="product-rating">4.5</span>
                            <button class="delete-button">삭제</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AppFooter />

    </div>
</template>


<script>
import "@/assets/css/managerY/productLIst.css"
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    name: "ProductListView",
    components: {
        AppHeader,
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
        };
    },
    mounted() {
        document.getElementById('sortButton').innerText = '최신순';

        var dropdownItems = document.querySelectorAll('.dropdown-content a');
        dropdownItems.forEach(function (item) {
            item.addEventListener('click', function () {
                var sortType = this.getAttribute('data-sort');
                document.getElementById('sortButton').innerText = this.innerText;
                if (sortType === 'recent') {
                    // 최신순 처리
                } else if (sortType === 'review') {
                    // 리뷰순 처리
                } else if (sortType === 'rating') {
                    // 별점순 처리
                }
            });
        });
    },
    methods: {
        changeSort(sortType) {
            document.getElementById('sortButton').innerText = sortType;
            // 여기에 해당 정렬 처리 로직 추가
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
        }

    },
};
</script>
