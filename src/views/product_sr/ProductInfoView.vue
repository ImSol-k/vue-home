<template>
    <div class="wrap" id="top">
        <AppHeader />

        <div class="infoContentA">
            <img v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${productVo.mainImg}`" alt="">

            <form v-on:submit.prevent="cartUpdate" action="">

                <div class="productInfo">
                    <p>{{ productVo.category }}</p>
                    <h1 class="productName">{{ productVo.productName }}</h1>
                    <div class="productStar">
                        <a href="">
                            <span v-for="(star, i) in 5" :key="i">
                                <img v-if="starTotal > i" src="@/assets/images/homedeco/star.png" alt="">
                                <img v-else src="@/assets/images/homedeco/star2.png" alt="">
                            </span>
                            <span>{{ reviewList.length }}개 리뷰</span>
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
                                <span>{{ productVo.productName }}({{ productCarts[i].color }})</span>
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
                <li><a href="#infoContent">상품정보</a></li>
                <li><a href="#userReviewList">리뷰</a></li>
                <li><a href="">문의</a></li>
                <li><a href="">배송/환불</a></li>
            </ul>
        </div>
        <div class="infoContent" id="infoContent">
            <div class="contentLeft">

                <div class="infoImgs" v-for="(img, i) in productVo.imgList" :key="i">
                    <img v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${img}`" alt="">
                </div>
                <div class="reviewContent" id="userReviewList">
                    <div class="InfoReview">
                        <p>리뷰 <span>{{ reviewList.length }}</span></p>
                        <button v-on:click.prevent="openModal">리뷰작성</button>
                    </div>
                    <div class="starAverage">
                        <div class="starTotal" v-if="starTotal > 0">
                            <span class="starFor" v-for="(star, i) in 5" :key="i">
                                <img v-if="starTotal > i" src="@/assets/images/homedeco/star.png" alt="">
                                <img v-else src="@/assets/images/homedeco/star2.png" alt="">
                            </span>
                            <span>{{ starTotal }}</span>
                        </div>
                        <div v-else>작성된 리뷰가 없습니다</div>
                    </div>
                    <div class="userReviewList"><!-- 리뷰 리스트시작 -->
                        <div class="userReview" v-for="(review, i) in showList.length" :key="i">
                            <p>{{ showList[i].id }}</p>
                            <div class="userStar">
                                <span v-for="(star, s) in 5" :key="s">
                                    <img v-if="showList[i].star > s" src="@/assets/images/homedeco/star.png" alt="">
                                    <img v-else src="@/assets/images/homedeco/star2.png" alt="">
                                </span>
                                <span class="reviewDate">{{ showList[i].regDate }}</span>
                                <span class="userReviewManager" v-if="showList[i].userNo == this.$store.state.authUser.userNo">
                                    <button type=""
                                        v-on:click.prevent="reviewDelete(showList[i].reviewNo, i)">삭제</button>
                                    <button>수정</button>
                                </span>
                            </div>
                            <div class="reviewIncontent">
                                <img v-if="showList[i].imgName != null"
                                    v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${showList[i].imgName}`" alt="">
                                <p>{{ showList[i].content }}</p>
                            </div>
                        </div><!-- userReview -->
                        <div class="reviewPage" v-if="reviewList.length > 0">
                            <span v-for="(review, i) in Math.ceil(this.reviewList.length / 5)" :key="i"
                                v-on:click="showReview(i)">{{ i + 1 }}</span>
                        </div>
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
                            <span>{{ productVo.productName }}({{ productCarts[i].color }})</span>
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
                    <img v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${productVo.mainImg}`" alt="">
                    <p>{{ productVo.productName }}</p>
                </div>
                <p>별점평가</p>
                <div class="starInsert">
                    <div class="starClick">
                        <button v-on:click.prevent="reviewStar(i)" v-for="(star, i) in 5" :key="i">
                            <img v-if="i <= reviewVo.star" src="@/assets/images/homedeco/star.png" alt="">
                            <img v-else src="@/assets/images/homedeco/star2.png" alt="">
                        </button>
                    </div>
                </div>
                <p>상품평</p>
                <div>
                    <textarea class="reviewText" v-model="reviewVo.content" cols="10" rows="8"
                        placeholder="리뷰를 작성해 주세요"></textarea>
                    <input type="file" name="" id="" v-on:change="selectFile">
                </div>
                <button type="submit">완료</button>
            </div>
        </div>
    </form>

    <a class="topMove" href="#top"><img src="@/assets/images/homedeco/top.png" alt=""></a>
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

            //상품정보 관련
            productVo: {
                productNo: this.$route.params.no,
                price: "",
                count: 0,
                category: "",
                color: "",
                mainImg: "",
                imgList: []
            },
            productCarts: [],
            productColor: [],
            showPrice: "",
            priceTotal: 0,
            showPriceTotal: 0,

            //리뷰관련
            starTotal: 0,
            reviewImg: "",
            reviewVo: {
                star: 0,
                content: "",
                userNo: this.$store.state.authUser.userNo
            },
            reviewList: [],
            showList: [],
            reviewPage: 0,
            tempCart: []
        };
    },
    methods: {
        //상품선택 *****************************************
        showProduct() {
            console.log("상품정보: " + this.productVo.name + ">" + this.$route.params.no);
            //상품정보 불러오기
            axios({
                method: 'post',
                url: `${this.$store.state.apiBaseUrl}/home/info/product/${this.$route.params.no}`,
                headers: { "Content-Type": "application/json; charset=utf-8" },
                responseType: 'json'
            }).then(response => {
                console.log(response); //수신데이터i
                this.productVo = response.data.apiData;
                this.showPrice = Number(this.productVo.price).toLocaleString('ko-KR');
                console.log(this.productVo.imgList.length);
            }).catch(error => {
                console.log(error);
            });

            //옵션색
            axios({
                method: 'post',
                url: `${this.$store.state.apiBaseUrl}/home/info/color`,
                headers: { "Content-Type": "application/json; charset=utf-8" },
                responseType: 'json'
            }).then(response => {
                console.log(response); //수신데이터
                this.productColor = response.data.apiData;
            }).catch(error => {
                console.log(error);
            });
        },
        showReview(page) {
            console.log("리뷰리스트");
            axios({
                method: 'post',
                url: `${this.$store.state.apiBaseUrl}/home/info/review/${this.$route.params.no}`,
                headers: { "Content-Type": "application/json; charset=utf-8" },
                responseType: 'json'
            }).then(response => {
                console.log(response); //수신데이터
                if (response.data.result == "success") {
                    this.reviewList = response.data.apiData;
                    // this.reviewList = response.data.apiData.slice(0, 5);
                    let sum = 0;
                    for (let i = 0; i < this.reviewList.length; i++) {
                        sum += this.reviewList[i].star;
                    }
                    this.starTotal = sum / this.reviewList.length;
                    this.starTotal = this.starTotal.toFixed(1);

                    this.reviewPage = Math.ceil(this.reviewList.length / 5);
                    console.log(page * 5);
                    this.showList = this.reviewList.slice(page * 5, (page + 1) * 5, this.reviewList.length);
                }
            }).catch(error => {
                console.log(error);
            });
        },
        cartAdd(event) {
            console.log("색상선택: " + event.target.value);

            let cart = {
                product: this.productVo.productName,
                productNo: this.$route.params.no,
                count: 1,
                color: event.target.value,
                userNo: this.$store.state.authUser.userNo,
                price: this.productVo.price
            }
            this.tempCart.push(cart);
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
            console.log(this.productCarts);
            if (this.$store.state.token != null) {
                axios({
                    method: 'post',
                    url: `${this.$store.state.apiBaseUrl}/home/info/add`, //SpringBoot주소
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
            } else {
                alert("로그인후 이용가능");
            }
        },
        // 바로구매 **************************************************
        nowPayment() {
            console.log("바로구매");
            if (this.$store.state.nowOrderList != 0) {
                this.$store.commit("setNowPayment", this.tempCart);
                this.$store.commit("setTotalPrice", this.priceTotal);
                this.$router.push("/pay");
            } else {
                alert("상품을 선택해 주세요");
            }

        },
        //리뷰관련 메소드 ********************************************
        reviewStar(star) {
            console.log("별점클릭" + star)
            this.reviewVo.star = star;
        },
        openModal() { //구매내역 확인
            console.log("리뷰작성");

            axios({
                method: 'get',
                url: `${this.$store.state.apiBaseUrl}/home/info/isPurchase/${this.$store.state.authUser.userNo}`, //SpringBoot주소
                headers: { "Content-Type": "application/json; charset=utf-8" },
                params: { productNo: this.$route.params.no },
                responseType: 'json'
            }).then(response => {
                console.log(response.data);
                if (response.data.result == "success") {
                    this.showModal = true;
                } else {
                    alert("구매후 작성가능");
                }
            }).catch(error => {
                console.log(error);
            });
        },
        closeModal() {
            console.log("리뷰작성창 닫기");
            this.showModal = false;
            this.reviewVo.content = "";
            this.reviewVo.star = 0;
        },
        selectFile(event) {
            this.reviewImg = event.target.files[0];
            console.log(this.reviewImg);
        },
        reviewAdd() { //리뷰작성
            console.log("리뷰추가");
            console.log(this.reviewVo);

            if (this.$store.state.token != null) {
                const formData = new FormData();
                formData.append('file', this.reviewImg);
                formData.append('star', this.reviewVo.star+1);
                formData.append('content', this.reviewVo.content);
                formData.append('userNo', this.reviewVo.userNo);
                formData.append('productNo', this.$route.params.no);

                axios({
                    method: 'post',
                    url: `${this.$store.state.apiBaseUrl}/home/info/review`,
                    headers: { "Content-Type": "multipart/form-data" },
                    data: formData,
                    responseType: 'json',
                }).then(response => {
                    console.log(response); //수신데이터
                    if (response.data.result == "success") {
                        this.reviewList.push(response.data.apiData);
                        alert("리뷰작성 완료");
                    } else {
                        alert("리뷰작성 실패");
                    }

                    this.closeModal();
                }).catch(error => {
                    console.log(error);
                });
            } else {
                alert("로그인후 작성 가능");
            }
        },
        reviewDelete(no, i) {   //리뷰삭제
            console.log("리뷰삭제" + no);
            axios({
                method: 'delete',
                url: `${this.$store.state.apiBaseUrl}/home/info/delete`, //SpringBoot주소
                headers: { "Content-Type": "application/json; charset=utf-8" },
                params: { no: no },
                responseType: 'json'
            }).then(response => {
                console.log(response);
                if (response.data.result == "success") {
                    alert("삭제되었습니다");
                    this.reviewList.slice(i, 1);
                }
            }).catch(error => {
                console.log(error);
            });
        }

    },
    created() {
        this.showProduct();
        this.showReview(0);
    }
};
</script>


<style></style>
