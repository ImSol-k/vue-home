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
                        <li class="cate-li"><a href="productLIst.html">전체 상품 보기</a></li>
                        <li class="cate-li"><a href="bedList.html">침대/매트리스</a></li>
                        <li class="cate-li"><a href="일반소파좌식소파의URL">일반소파/좌식소파</a></li>
                        <li class="cate-li"><a href="식탁사이드테이블의URL">식탁/사이드테이블</a></li>
                        <li class="cate-li"><a href="벽선반스탠드선반의URL">벽선반/스탠드선반</a></li>
                    </ul>
                </ul>
                <ul>
                    <li @click="toggleCategories02">
                        <strong>주문 관리</strong>
                        <span v-if="showCategories02"> △ </span>
                        <span v-else> ▽</span>
                    </li>
                    <ul v-show="showCategories02">
                        <li class="cate-li"><a href="productLIst.html">주문 현황</a></li>
                        <li class="cate-li"><a href="bedList.html">카테고리 뭐 있냐</a></li>
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
            showCategories02: false,
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
        toggleCategories02() {
            this.showCategories02 = !this.showCategories02; // 클릭 시 카테고리 리스트를 보이거나 숨김
        }

    },
};
</script>
