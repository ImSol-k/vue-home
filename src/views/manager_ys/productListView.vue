<template>
    <div class="wrap">
        <div class="header">
            <h1>header</h1>
        </div>
        <div class="content">
            <div class="side">
                <ul>
                    <li><strong>상품 관리</strong></li>
                    <li><a href="productLIst.html">전체 상품 보기</a></li>
                    <li><a href="bedList.html">침대/매트리스</a></li>
                    <li><a href="일반소파좌식소파의URL">일반소파/좌식소파</a></li>
                    <li><a href="식탁사이드테이블의URL">식탁/사이드테이블</a></li>
                    <li><a href="벽선반스탠드선반의URL">벽선반/스탠드선반</a></li>
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
                <span>상품 관리 > 전체 상품 보기</span>
                <div class="bed">
                    <h3>침대</h3>
                    <div class="product">
                        <img src="bed.jpg" alt="상품1">
                        <div class="product-info">
                            <span class="product-name">어쩌구 침대</span>
                            <div class="review">
                                <img src="star.png"><img src="star.png"><img src="star.png"><img src="star.png"><img
                                    src="star2.png">
                            </div>
                            <span class="product-rating">4.5</span>
                            <button class="delete-button">삭제</button>
                        </div>
                    </div>
                    <div class="product">
                        <img src="bed.jpg" alt="상품2">
                        <div class="product-info">
                            <span>어쩌구 작은 침대</span>
                            <div class="review">
                                <img src="star.png"><img src="star.png"><img src="star.png"><img src="star.png"><img
                                    src="star2.png">
                            </div>
                            <span class="product-rating">4.5</span>
                            <button class="delete-button">삭제</button>
                        </div>
                    </div>
                </div>

                <br>

                <div class="sofa">
                    <h3>소파</h3>
                    <div class="product">
                        <img src="sofa.jpg" alt="상품1">
                        <div class="product-info">
                            <span>어쩌구 쇼파</span>
                            <div class="review">
                                <img src="star.png"><img src="star.png"><img src="star.png"><img src="star.png"><img
                                    src="star2.png">
                            </div>
                            <span class="product-rating">4.5</span>
                            <button class="delete-button">삭제</button>
                        </div>
                    </div>
                    <div class="product">
                        <img src="sofa.jpg" alt="상품2">
                        <div class="product-info">
                            <span>어쩌구 쇼파 야호</span>
                            <div class="review">
                                <img src="star.png"><img src="star.png"><img src="star.png"><img src="star.png"><img
                                    src="star2.png">
                            </div>
                            <span class="product-rating">4.5</span>
                            <button class="delete-button">삭제</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import "@/assets/css/managerY/productLIst.css"
window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sortButton').innerText = '최신순';
});

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
export default {
    name: "productListView",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>./ProductListView.vue