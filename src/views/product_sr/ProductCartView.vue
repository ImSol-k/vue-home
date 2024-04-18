``<template>
    <div class="wrap cartWrap">
        <AppHeader />


        <div class="cartContent" v-if="showCart">
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
                        <span class="deleteCart" v-on:click.prevent="cartDelete(cartList[i].cart, i)">×</span>
                        <p>{{ cartList[i].product }}({{ cartList[i].color }})</p>
                        <span class="listPreice">{{ Number(cartList[i].price).toLocaleString('ko-KR') }}원</span>

                        <div>
                            <div class="cartCountBtn">
                                <button type="button" v-on:click.prevent="updateCart(0, i)">-</button>
                                <span>{{ cartList[i].count }}</span>
                                <button type="button" v-on:click.prevent="updateCart(1, i)">+</button>
                            </div>

                            <p class="cartOnePrice">
                                <span>{{ Number(cartList[i].price * cartList[i].count).toLocaleString('ko-KR')
                                    }}</span>원
                            </p>
                        </div>
                    </div>
                </div><!-- cartObj -->

            </div><!-- cartList -->

            <div class="cartPay">
                <div class="userCartPrice">
                    <p>총 상품금액 <span>{{ Number(totalPrice).toLocaleString('ko-KR') }}</span></p>
                    <p>결제금액 <span>{{ Number(payPrice).toLocaleString('ko-KR') }}</span></p>
                </div>
                <button type="button" v-on:click.prevent="cartPament">{{ itemCount }}개 상품 구매하기</button>
            </div><!-- cartPay -->
        </div>

        <div class="notLogincart" v-else>
            <img src="@/assets/images/homedeco/notlogin.png" alt="">
            <h1>로그인후 이용가능</h1>
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
            itemCount: 0,
            showCart: ""
        };
    },
    methods: {
        showCartList() {
            //결제정보 초기화
            this.$store.state.nowOrderList = null;
            console.log(this.$store.state.userNo + ": 카트 리스트");
            axios({
                method: 'post',
                url: `${this.$store.state.apiBaseUrl}/home/info/usercart`, //SpringBoot주소
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": "Bearer " + this.$store.state.token
                },
                params: { userNo: this.$store.state.userNo },
                responseType: 'json'
            }).then(response => {
                console.log(response);
                if (response.data.result == "success") {
                    this.showCart = true;
                    this.cartList = response.data.apiData;
                    for (let i = 0; i < this.cartList.length; i++) {
                        this.totalPrice += this.cartList[i].count * this.cartList[i].price;
                    }
                } else {
                    this.showCart = false;
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
                    this.itemCount += this.cartList[select].count;
                    this.payPrice += this.cartList[select].count * this.cartList[select].price;
                } else {
                    if (this.cartList[select].count > 0) {
                        this.itemCount -= this.cartList[select].count;
                        this.payPrice -= this.cartList[select].count * this.cartList[select].price;
                        this.totalPrice -= this.totalPrice - this.cartList[select].price;
                    }
                }
            }

        },
        updateCart(symbol, select) {
            console.log("장바구니 업데이트");
            this.cartResult(symbol, select);
            let tempVo = {
                product: this.cartList[select].product,
                count: this.cartList[select].count,
                color: this.cartList[select].color
            };
            console.log(tempVo);
            axios({
                method: 'post',
                url: `${this.$store.state.apiBaseUrl}/home/info/cartupdate`,
                headers: { "Content-Type": "application/json; charset=utf-8" },
                data: tempVo,
                responseType: 'json'
            }).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });
        },
        cartResult(symbol, select) {
            if (symbol == 1) {
                this.cartList[select].count++;
                this.itemCount = this.checkList[select] ? this.itemCount+1 : this.itemCount;
                this.payPrice = this.checkList[select] ? this.payPrice + this.cartList[select].price: this.payPrice;
                this.totalPrice += this.cartList[select].price;
            } else {
                this.cartList[select].count--;
                this.itemCount = this.checkList[select] ? this.itemCount-1 : this.itemCount;
                this.payPrice = this.checkList[select] ? this.payPrice - this.cartList[select].price: this.payPrice;
                this.totalPrice -= this.cartList[select].price;
            }
        },
        cartDelete(no, i) {
            console.log("장바구니 제품 삭제" + no);
            axios({
                method: 'delete',
                url: `${this.$store.state.apiBaseUrl}/home/info/cartdelete`,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": "Bearer " + this.$store.state.token
                },
                params: { no: no },
                responseType: 'json'
            }).then(response => {
                console.log(response.data);
                if (response.data.result == "success") {
                    this.cartList.splice(i, 1);
                }
            }).catch(error => {
                console.log(error);
            });
        },
        cartPament(){
            console.log("상품 구매하기");
            if(this.itemCount < 1){
                alert("구매할 상품을 선택해주세요");
            } else {
                let temp = [];
                for(let i = 0; i < this.cartList.length; i++){
                    if(this.checkList[i]){
                        console.log(this.cartList[i]);
                        temp.push(this.cartList[i]);
                    }
                }
                // console.log(temp);
                this.$store.commit("setNowPayment", temp);
                this.$store.commit("setTotalPrice", this.payPrice);
                this.$router.push("/pay");
            }
        }
    },
    created() {
        this.showCartList();
    }
};
</script>


<style></style>
