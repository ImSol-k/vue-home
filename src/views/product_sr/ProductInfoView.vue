<template>
    <div class="wrap">
        <AppHeader />

        <div class="infoContentA">
            <img src="@/assets/images/product/test.png" alt="">

            <form v-on:submit.prevent="cartUpdate" action="">

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
                            <option v-for="(color, i) in productColor.length" :key="i" :value="productColor[i]">
                                {{ productColor[i] }}</option>
                        </select>
                        <div class="miniCart" v-for="(productCart, i) in productCarts" :key="i">
                            <div class="cartproductName">
                                <span>{{ productVo.name }}({{ productCarts[i].color }})</span>
                                <span class="deleteCart" v-on:click="cartRemove(i)">×</span>
                            </div>
                            <div class="countBtn">
                                <button v-on:click.prevent="countClick(i, 'minus')">-</button>
                                <span>{{ productCarts[i].count }}</span>
                                <button v-on:click.prevent="countClick(i, 'plus')">+</button>
                            </div>
                        </div><!-- miniCart -->
                        <div class="CartPrice">
                            <span>주문금액</span>
                            <span>{{ showPriceTotal }}</span>
                            <span>원</span>
                        </div>
                        <div class="infoCartPayBtn btnColor">
                            <button type="submit">장바구니</button>
                            <button type="button" v-on:click.prevent="nowPayment">바로구매</button>
                        </div>
                    </div>
                </div><!-- productInfo -->
            </form>
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

            <form v-on:submit.prevent="cartUpdate" action="">
                <div class="infoSideCart">
                    <div class="sideCartSelect">
                        <select name="" id="" v-on:change="cartAdd">
                            <option disabled selected>색상을 선택해주세요</option>
                            <option v-for="(color, i) in productColor.length" :key="i" :value="productColor[i]">
                                {{ productColor[i] }}</option>
                        </select>
                    </div>

                    <div class="miniCart sideCart" v-for="(productCart, i) in productCarts" :key="i">
                        <div class="cartproductName">
                            <span>{{ productVo.name }}({{ productCarts[i].color }})</span>
                            <span class="deleteCart">×</span>
                        </div>
                        <div class="countBtn">
                            <button v-on:click.prevent="countClick('minus')">-</button>
                            <span>{{ productCarts[i].count }}</span>
                            <button v-on:click.prevent="countClick('plus')">+</button>
                        </div>
                    </div><!-- miniCart -->

                    <div class="sideCartPrice">
                        <span>주문금액</span>
                        <span>{{ showPriceTotal }}</span>
                        <span>원</span>
                    </div>
                    <div class="sideCartBtn btnColor">
                        <button type="submit">장바구니</button>
                        <button type="button" v-on:click.prevent="nowPayment">바로구매</button>
                    </div>
                </div>
            </form>

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
import axios from 'axios';

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
                color: "",
                mainImg: ""
            },
            productCarts: [],
            productColor: ["white", "black", "wood"],
            showPrice: "",
            priceTotal: 0,
            showPriceTotal: 0,
            reviewVo: {
                product: "",
                star: "",
                content: "",
                file: ""
            }
        };
    },
    methods: {
        //상품선택 *****************************************
        showProduct() {
            console.log("상품정보: " + this.productVo.name);
            this.showPrice = Number(this.productVo.price).toLocaleString('ko-KR');
            axios({
                method: 'post',
                url: `${this.$store.state.apiBaseUrl}/home/cart/getproduct`, 
                headers: { "Content-Type": "application/json; charset=utf-8" },
                param: this.$store.state.productNo,
                responseType: 'json'
            }).then(response => {
                console.log(response); //수신데이터

            }).catch(error => {
                console.log(error);
            });
        },
        cartAdd(event) {
            console.log("색상선택: " + event.target.value);

            let cart = {
                product: this.productVo.name,
                count: 1,
                color: event.target.value,
                user: 'aa'
            }
            let colorChack = this.productCarts.some(cart => cart.color === event.target.value);
            if (!colorChack || this.productCarts.length == 0) {
                this.priceTotal += this.productVo.price;
                this.showPriceTotal = Number(this.priceTotal).toLocaleString('ko-KR');

                this.productCarts.push(cart);
            } else {
                alert("추가된 상품입니다.");
            }
        },
        countClick(num, type) {  //카운트
            console.log(type + " 클릭: " + num);

            if (type == "plus") {
                this.productCarts[num].count++;
                this.priceTotal += this.productVo.price;
            } else if (type == "minus" && this.productCarts[num].count > 0) {
                this.productCarts[num].count--;
                this.priceTotal -= this.productVo.price;
            }
            this.showPriceTotal = Number(this.priceTotal).toLocaleString('ko-KR');
        },
        cartRemove(i) {
            console.log("카트삭제");
            this.productCarts.splice(i, 1);
        },
        //장바구니 ******************************************
        cartUpdate() {
            console.log("장바구니 추가");

            axios({
                method: 'post',
                url: `${this.$store.state.apiBaseUrl}/home/cart/add`, //SpringBoot주소
                headers: { "Content-Type": "application/json; charset=utf-8" },
                data: this.productCarts,
                responseType: 'json'
            }).then(response => {
                console.log(response); //수신데이터
                if (response.data.result == "success") {
                    alert(response.data.apiData + "개 상품이 추가되었습니다.");
                } else {
                    alert("선택하신 상품이 없습니다");
                }
            }).catch(error => {
                console.log(error);
            });
        },
        // 바로구매 **************************************************
        nowPayment() {
            console.log("바로구매");
            this.$store.commit("setNowPayment", this.productCarts);
            console.log(this.$store.state.nowOrderList);
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
            //if(유저가 구매한 )

        }
    },
    created() {
        this.showProduct();
    }
};
</script>


<style></style>
