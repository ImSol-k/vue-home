<template>
    <div class="wrap">
        <AppHeader />

        <div class="infoContentA">
            <img src="@/assets/images/product/test.png" alt="">

            <div class="productInfo">
                <p>{{ productVo.category }}</p>
                <h1 class="productName">{{ productVo.name }}</h1>
                <div class="productStar">
                    <a href="">
                        <span v-for="(star, i) in 5" :key="i">
                            <img v-if="starTotal > i" src="@/assets/images/homedeco/star.png" alt="">
                            <img v-else src="@/assets/images/homedeco/star2.png" alt="">
                        </span>
                        <span>2개 리뷰</span>
                    </a>
                </div>
                <div class="productPrice">
                    <span>{{ showPrice }}</span>
                    <span>원</span>
                </div>
                <div class="productContent">
                    <select name="" id="" v-on:change="cartAdd">
                        <option disabled selected>색상을 선택해주세요</option>
                        <option v-for="(color, i) in productColor.length" :key="i" :value="productColor[i]">{{
                    productColor[i] }}</option>
                    </select>
                    <div class="miniCart" v-for="(productCart, i) in productCarts" :key="i">
                        <div class="cartproductName">
                            <span>{{ productVo.name }}({{ productCarts[i].color }})</span>
                            <span class="deleteCart">×</span>
                        </div>
                        <div class="countBtn">
                            <button v-on:click.prevent="countClick(i, 'minus')">-</button>
                            <span>{{ productCarts[i].count }}</span>
                            <button v-on:click.prevent="countClick(i, 'plus')">+</button>
                        </div>
                    </div><!-- miniCart -->
                    <div class="CartPrice">
                        <span>주문금액</span>
                        <span>{{ priceTotal }}</span>
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
                            <span class="starFor" v-for="(star, i) in 5" :key="i">
                                <img v-if="starTotal > i" src="@/assets/images/homedeco/star.png" alt="">
                                <img v-else src="@/assets/images/homedeco/star2.png" alt="">
                            </span>
                            <span>4.5</span>
                        </div>
                        <div class="star">
                            <p>5점 <span>1</span>개</p>
                            <p>4점 <span>1</span>개</p>
                            <p>3점 <span>0</span>개</p>
                            <p>2점 <span>0</span>개</p>
                            <p>1점 <span>0</span>개</p>
                        </div>
                    </div>
                    <div class="userReviewList"><!-- 리뷰 리스트시작 -->
                        <div class="userReview">
                            <p>userId</p>
                            <div class="userStar">
                                <span v-for="(star, i) in 5" :key="i">
                                    <img v-if="starTotal > i" src="@/assets/images/homedeco/star.png" alt="">
                                    <img v-else src="@/assets/images/homedeco/star2.png" alt="">
                                </span>
                                <span class="reviewDate">2024.04.13</span>
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
                                <span v-for="(star, i) in 5" :key="i">
                                    <img v-if="starTotal > i" src="@/assets/images/homedeco/star.png" alt="">
                                    <img v-else src="@/assets/images/homedeco/star2.png" alt="">
                                </span>
                                <span class="reviewDate">2024.04.13</span>
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
                        <option disabled selected>색상을 선택해주세요</option>
                        <option v-for="(color, i) in productColor.length" :key="i"
                            v-on:click.prevent="cartAdd(productColor[i])">{{ productColor[i] }}</option>
                    </select>
                </div>

                <div class="miniCart sideCart" v-for="(productCart, i) in productCarts" :key="i">
                    <div class="cartproductName">
                        <span>{{ productVo.name }}({{ productCarts[i].color }})</span>
                        <span class="deleteCart">×</span>
                    </div>
                    <div class="countBtn">
                        <button v-on:click.prevent="countClick('minus')">-</button>
                        <span>{{ productVo.count }}</span>
                        <button v-on:click.prevent="countClick('plus')">+</button>
                    </div>
                </div><!-- miniCart -->

                <div class="sideCartPrice">
                    <span>주문금액</span>
                    <span>{{ priceTotal }}</span>
                    <span>원</span>
                </div>
                <div class="sideCartBtn btnColor">
                    <button>장바구니</button>
                    <button>바로구매</button>
                </div>
            </div>
        </div><!-- infoContent -->

        <AppFooter />

    </div><!-- wrap -->

    <form v-on:submit.prevent="reviewAdd" action="">
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
                        <button v-on:click.prevent="reviewStar(i)" v-for="(star, i) in 5" :key="i">
                            <img v-if="i <= starclick" src="@/assets/images/homedeco/star.png" alt="">
                            <img v-else src="@/assets/images/homedeco/star2.png" alt="">
                        </button>
                    </div>
                </div>
                <p>상품평</p>
                <div>
                    <textarea class="reviewText" name="" id="" cols="10" rows="8" placeholder="리뷰를 작성해 주세요"></textarea>
                    <input type="file" name="" id="">
                </div>
                <button type="submit">완료</button>
            </div>
        </div>
    </form>
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
            showModal: false, //리뷰 작성창
            starclick: "",
            starTotal: 4,
            productVo: {
                name: "알리 커피머신",
                price: 20000,
                count: 0,
                category: "가구",
                color: ""
            },
            productCarts: [],
            productColor: ["white", "black", "wood"],
            showPrice: "",
            priceTotal: 0,
            reviewVo: {
                product : "",
                star: "",
                content: "",
                file: ""
            }
        };
    },
    methods: {
        showProduct() {
            console.log("상품정보: " + this.productVo.name);
            this.showPrice = Number(this.productVo.price).toLocaleString('ko-KR');
        },
        cartAdd(event) {
            console.log("색상선택: " + event.target.value);
            this.productVo.count = 1;
            this.productVo.color = event.target.value;

            this.productCarts.push(this.productVo);
            console.log(this.productCarts.length);
            for(let i = 0; i < this.productCarts.length; i++){
                console.log(this.productCarts[i]);
            }

            //총금액 계산
            this.priceTotal = this.productVo.price * this.productVo.count;
            this.priceTotal = Number(this.priceTotal).toLocaleString('ko-KR');
        },
        countClick(num, type) {  //카운트
            console.log(type + "클릭" + "/" + num);
            if (type == "plus") {
                this.productCarts[num].count++;
            } else if (type == "minus" && this.productVo.count > 0) {
                this.productCarts[num].count--;
            }
            this.priceTotal = this.productVo.price * this.productVo.count;
            this.priceTotal = Number(this.priceTotal).toLocaleString('ko-KR');
        },
        //리뷰관련 메소드 ********************************************
        reviewStar(star) {
            console.log("별점클릭" + star)
            this.starclick = star;
        },
        openModal() {
            console.log("리뷰작성");
            this.showModal = true;
        },
        closeModal() {
            console.log("리뷰작성창 닫기");
            this.showModal = false;
        },
        reviewAdd() {
            console.log("리뷰추가");

        }
    },
    created() {
        this.showProduct();
    }
};
</script>


<style></style>
