<template>
    <div class="wrap">
        <AppHeader/>

        <div class="infoContentA">
            <img src="@/assets/images/product/test.png" alt="">

            <div class="productInfo">
                <h1 class="productName">상품명 (상품코드 블라블라)</h1>
                <div class="productStar">
                    <a href="">
                        <img src="@/assets/images/homedeco/star.png" alt="">
                        <img src="@/assets/images/homedeco/star.png" alt="">
                        <img src="@/assets/images/homedeco/star.png" alt="">
                        <img src="@/assets/images/homedeco/star.png" alt="">
                        <img src="@/assets/images/homedeco/star.png" alt="">
                        <span>2개 리뷰</span>
                    </a>
                </div>
                <div class="productPrice">
                    <span>32,000</span>
                    <span>원</span>
                </div>
                <div class="productContent">
                    <select name="" id="">
                        <option disabled selected>옵션을 선택해주세요</option>
                        <option value="">상품1</option>
                        <option value="">상품2</option>
                    </select>
                    <div class="miniCart">
                        <div class="cartproductName">
                            <span>선택된 상품</span>
                            <span class="deleteCart">×</span>
                        </div>
                        <div class="countBtn">
                            <button>-</button>
                            <span>0</span>
                            <button>+</button>
                        </div>
                    </div><!-- miniCart -->
                    <div class="CartPrice">
                        <span>주문금액</span>
                        <span>32,000</span>
                        <span>원</span>
                    </div>
                    <div class="infoCartPayBtn btnColor">
                        <button type="button">장바구니</button>
                        <button type="button">바로구매</button>
                    </div>
                </div>
            </div><!-- productInfo -->
        </div><!-- info-content-a -->
        <div class="infoCategory">
            <ul>
                <li><a href="">상품정보</a></li>
                <li><a href="">리뷰</a></li>
                <li><a href="">문의</a></li>
                <li><a href="">배송/환불</a></li>
            </ul>
        </div>
        <div class="infoContent">
            <div class="contentLeft">

                <div class="infoImgs">
                    <img src="@/assets/images/product/infoTest1.jpg" alt="">
                </div>
                <div class="reviewContent">
                    <div class="InfoReview">
                        <p>리뷰 <span>2</span></p>
                        <button v-on:click.prevent="openModal">리뷰작성</button>
                    </div>
                    <div class="starAverage">
                        <div class="starTotal">
                            <img src="@/assets/images/homedeco/star.png" alt="">
                            <img src="@/assets/images/homedeco/star.png" alt="">
                            <img src="@/assets/images/homedeco/star.png" alt="">
                            <img src="@/assets/images/homedeco/star.png" alt="">
                            <img src="@/assets/images/homedeco/star.png" alt="">
                            <span>5.0</span>
                        </div>
                        <div class="star">
                            <p>5점 <span>2</span>개</p>
                            <p>4점 <span>0</span>개</p>
                            <p>3점 <span>0</span>개</p>
                            <p>2점 <span>0</span>개</p>
                            <p>1점 <span>0</span>개</p>
                        </div>
                    </div>
                    <div class="userReviewList"><!-- 리뷰 리스트시작 -->
                        <div class="userReview">
                            <p>userId</p>
                            <div class="userStar">
                                <img src="@/assets/images/homedeco/star.png" alt="">
                                <img src="@/assets/images/homedeco/star.png" alt="">
                                <img src="@/assets/images/homedeco/star.png" alt="">
                                <img src="@/assets/images/homedeco/star.png" alt="">
                                <img src="@/assets/images/homedeco/star.png" alt="">
                                <span>2024.04.13</span>
                                <button>삭제</button>
                                <button>수정</button>
                            </div>
                            <div class="reviewIncontent">
                                <img src="@/assets/images/product/test.png" alt="">
                                <p>리뷰내용 이랬다저랬다~~~</p>
                            </div>
                        </div><!-- userReview -->
                        <div class="userReview">
                            <p>userId</p>
                            <div class="userStar">
                                <img src="@/assets/images/homedeco/star.png" alt="">
                                <img src="@/assets/images/homedeco/star.png" alt="">
                                <img src="@/assets/images/homedeco/star.png" alt="">
                                <img src="@/assets/images/homedeco/star.png" alt="">
                                <img src="@/assets/images/homedeco/star.png" alt="">
                                <span>2024.04.13</span>
                            </div>
                            <div class="reviewIncontent">
                                <!-- <img src="../assets/images/reete.png" alt=""> -->
                                <p>리뷰내용 이랬다저랬다~~~</p>
                            </div>
                        </div><!-- userReview -->
                    </div><!-- userReviewList -->
                </div><!-- reviewContent -->
            </div>

            <div class="infoSideCart">
                <div class="sideCartSelect">
                    <select name="" id="">
                        <option disabled selected>옵션을 선택해주세요</option>
                        <option value="">상품1</option>
                        <option value="">상품2</option>
                    </select>
                </div>

                <div class="miniCart sideCart">
                    <div class="cartproductName">
                        <span>선택된 상품</span>
                        <span class="deleteCart">×</span>
                    </div>
                    <div class="countBtn">
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                    </div>
                </div><!-- miniCart -->

                <div class="sideCartPrice">
                    <span>주문금액</span>
                    <span>32,000</span>
                    <span>원</span>
                </div>
                <div class="sideCartBtn btnColor">
                    <button>장바구니</button>
                    <button>바로구매</button>
                </div>
            </div>
        </div><!-- infoContent -->

        <AppFooter/>

    </div><!-- wrap -->

    
    <div class="reviewWriteModal" v-show="showModal">
        <div class="reviewWriteContent">
            <span v-on:click.prevent="closeModal">×</span>
            <h1>리뷰작성</h1>
            <p>상품</p>
            <div class="reviewProduct">
                <img src="@/assets/images/product/test.png" alt="">
                <p>상품명(상세제품명~~)</p>
            </div>
            <p>별점평가</p>
            <div class="starInsert">
                <div class="starClick">
                    <button><img src="@/assets/images/homedeco/star2.png" alt=""></button>
                    <button><img src="@/assets/images/homedeco/star2.png" alt=""></button>
                    <button><img src="@/assets/images/homedeco/star2.png" alt=""></button>
                    <button><img src="@/assets/images/homedeco/star2.png" alt=""></button>
                    <button><img src="@/assets/images/homedeco/star2.png" alt=""></button>
                </div>
            </div>
            <p>상품평</p>
            <div>
                <textarea class="reviewText" name="" id="" cols="10" rows="8" placeholder="리뷰를 작성해 주세요"></textarea>
                <input type="file" name="" id="">
            </div>
            <button>완료</button>
        </div>
    </div>
</template>


<script>
import '@/assets/css/product/product.css'
import '@/assets/css/product/cart.css'
import '@/assets/css/product/infomain.css'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
    name: "ProductInfoView",
    components: { AppHeader, AppFooter },
    data() {
        return {
            showModal : false //리뷰 작성창
        };
    },
    methods: {

        openModal(){
            console.log("리뷰작성");
            this.showModal = true;
        },
        closeModal(){
            console.log("리뷰작성창 닫기");
            this.showModal = false;
        }
    },
};
</script>


<style></style>
