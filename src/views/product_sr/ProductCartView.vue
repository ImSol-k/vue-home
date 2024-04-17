<template>
    <div class="wrap cartWrap">
        <AppHeader />


        <div class="cartContent">

            <div class="cartList">
                <div class="cartHearder">
                    <label for="selectAll">
                        <input type="checkbox" name="selectcart" id="selectAll" v-on:click="select('all')"
                            v-model="checkList"><span>모두선택</span>
                    </label>
                    <button>선택삭제</button>
                </div><!-- cartHearder -->

                <div class="cartObj" v-for="(cart, i) in cartList" :key="i">
                    <input type="checkbox" name="selectcart" id="cartSelect" v-model="checkList[i]"
                        v-on:click="select(i)">
                    <img src="@/assets/images/product/test.png" alt="">
                    <div class="cartObjHeader">
                        <span class="deleteCart">×</span>
                        <p>{{ cartList[i].product }}({{ cartList[i].color }})</p>
                        <div>
                            <div class="cartCountBtn">
                                <button type="button" v-on:click.prevent="updateCart(0, i)">-</button>
                                <span>{{ cartList[i].count }}</span>
                                <button type="button" v-on:click.prevent="updateCart(1, i)">+</button>
                            </div>
                            <p class="cartOnePrice"><span>{{
                                Number(cartList[i].price * cartList[i].count).toLocaleString('ko-KR') }}</span>원</p>
                        </div>
                    </div>
                </div><!-- cartObj -->

            </div><!-- cartList -->

            <div class="cartPay">
                <div class="userCartPrice">
                    <p>총 상품금액 <span>{{ Number(totalPrice).toLocaleString('ko-KR') }}</span></p>
                    <p>결제금액 <span>{{ Number(payPrice).toLocaleString('ko-KR') }}</span></p>
                </div>
                <button>{{ itemCount }}개 상품 구매하기</button>
            </div><!-- cartPay -->
        </div>

        <AppFooter />
    </div>
</template>


<script>
import '@/assets/css/product/product.css'
import '@/assets/css/product/cart.css'
import '@/assets/css/product/infomain.css'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import axios from 'axios';

export default {
    name: "ProductCartView",
    components: { AppHeader, AppFooter },
    data() {
        return {
            cartList: [],
            totalPrice: 0,
            payPrice: 0,
            checkList: [],
            itemCount: 0
        };
    },
    methods: {
        showCartList() {
            console.log(this.$store.state.userNo + ": 카트 리스트");
            axios({
                method: 'post',
                url: `${this.$store.state.apiBaseUrl}/home/info/usercart`, //SpringBoot주소
                headers: { "Content-Type": "application/json; charset=utf-8" },
                params: { userNo: this.$store.state.userNo },
                responseType: 'json'
            }).then(response => {
                console.log(response);
                this.cartList = response.data.apiData;
                for (let i = 0; i < this.cartList.length; i++) {
                    this.totalPrice += this.cartList[i].count * this.cartList[i].price;
                }

            }).catch(error => {
                console.log(error);
            });
        },
        select(select) {
            if (select == "all") {
                console.log("모두선택");
                if (this.checkList.every(item => item === true)) {
                    this.checkList = this.cartList.map(() => false);
                    this.payPrice = 0;
                } else {
                    this.checkList = this.cartList.map(() => true);
                    this.payPrice = this.totalPrice;
                }
            } else {
                console.log(select + "선택");
                this.checkList[select] = !this.checkList[select];

                if (this.checkList[select]) {
                    this.payPrice += this.cartList[select].price * this.cartList[select].count;
                    this.itemCount += this.cartList[select].count;
                } else {
                    this.payPrice -= this.cartList[select].price * this.cartList[select].count;
                    this.itemCount -= this.cartList[select].count;
                }
            }

        },
        updateCart(symbol, select) {
            console.log("장바구니 업데이트");
            if (symbol == 1) {
                console.log("장바구니 추가");
                this.cartList[select].count++;
                this.totalPrice += this.cartList[select].price;
            } else {
                console.log("장바구니 삭제");
                this.cartList[select].count--;
                this.totalPrice -= this.cartList[select].price;
            }
        }

    },
    created() {
        this.showCartList();
    }
};
</script>


<style></style>
