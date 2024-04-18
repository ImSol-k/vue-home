<template>
    <div>
        <!-- 헤더 -->
        <AppHeaderManager />

        <!-- 결제 정보 입력 폼 -->
        <div class="pay-container">
            <div class="pay-content">
                <form id="pay-orderForm">
                    <!-- 배송지 정보 -->
                    <div class="pay-section">
                        <label for="shipping_info">배송지</label>
                        <div class="pay-change-info" @click="resetShipping">배송지 변경</div>
                        <input type="text" id="shipping_info" name="shipping_info" placeholder="배송지 정보 입력"
                            v-model="this.$store.state.authUser.address">
                        <select id="shipping_info_select" name="shipping_info_select" v-model="shippingOption">
                            <option value="default">배송시 요청사항을 선택해주세요</option>
                            <option value="front_door">부재시 문 앞에 놓아주세요</option>
                            <option value="security">부재시 경비실에 맡겨주세요</option>
                            <option value="contact">배송전에 미리 연락주세요</option>
                            <option value="custom">직접입력</option>
                        </select>
                    </div>

                    <!-- 수령인 정보 -->
                    <div class="pay-section">
                        <label for="customer_info"><strong>수령인</strong></label>
                        <div class="pay-change-info" @click="resetCustomerInfo">수령인 정보 변경</div>
                        <input type="text" id="customer_info" name="customer_info" placeholder="수령인 정보 입력"
                            v-model="this.$store.state.authUser.name">
                    </div>
                    <!-- 주문 상품 목록 -->
                    <div class="pay-product-list section">
                        <label for="products"><strong>주문 상품</strong></label>
                        <ul id="products">
                            <li v-for="(product, index) in this.$store.state.nowOrderList" :key="index">
                                <img :src="product.image" :alt="product.name">
                                <div class="pay-name">상품명: {{ product.product }}</div>
                                <div class="pay-price">가격: {{ Number(product.price).toLocaleString('ko-KR') }}원</div>
                                
                                <div class="pay-color">색상: {{ product.color }}</div>
                                <div class="pay-count">수량: {{ product.count }}</div> <!-- 상품 수량 표시 -->
                            </li>
                        </ul>
                    </div>

                    <!-- 결제 수단 -->
                    <label for="payment_method"><strong>결제 수단</strong></label>
                    <br><br>

                    <div class="pay-payment-methods">
                        <label v-for="(method, index) in paymentMethods" :key="index" :for="'pay-' + method"
                            @click="selectPaymentMethod(method)" :class="{ active: method === selectedPaymentMethod }">
                            <img :src="paymentMethodImages[method]" :alt="method">
                            <div>{{ method }}</div>
                        </label>
                    </div>
                </form>
            </div>

            <!-- 결제 정보 사이드바 -->
            <div class="pay-sidebar">
                <div class="pay-sidebar-content">
                    <h3>총 결제 금액</h3>
                    <br>
                    <p>상품 금액: {{ Number(this.$store.state.totalPrice).toLocaleString('ko-KR') }}원</p>
                    
                    <br>
                    <p>배송비: {{ shippingFee }}</p>
                    <br>
                    <hr>
                    <br>
                    <p>총 금액: {{ Number(this.$store.state.totalPrice).toLocaleString('ko-KR') }}원</p>
                    
                    <br><br>
                    <div class="pay-agreement">
                        <input type="checkbox" id="pay-agree" name="agree" v-model="agreed">
                        <label for="pay-agree">위 내용에 모두 동의합니다.</label><br>
                        <p style="font-size: 14px;">상세 내용은 <a href="#">여기</a>를 클릭하여 확인하세요.</p>
                    </div>

                    <button class="pay-btn" @click="completePayment">결제 완료</button>
                </div>
            </div>
        </div>

        <!-- 푸터 -->
        <AppFooter />
    </div>
</template>

<script>
import axios from 'axios';
import "@/assets/css/user/pay.css";
import AppHeaderManager from '@/components/AppHeaderManager.vue';
import AppFooter from '@/components/AppFooter.vue';
import { mapState, mapMutations } from 'vuex'; 

export default {
    name: "PayView",
    components: {
        AppHeaderManager,
        AppFooter
    },
    data() {
        return {
            shippingInfo: {}, // 초기값 설정
            shippingOption: "default",
            customerInfo: "", // 초기값 설정
            userNo: 1,
            products: [ this.$store.state.nowOrderList ],
            paymentMethods: ["신용 카드", "무통장 입금", "핸드폰", "카카오페이", "페이코"],
            paymentMethodImages: {
                "신용 카드": "https://image.ohou.se/i/bucketplace-v2-development/pg/168311599350498640.png?w=108&h=108&c=c",
                "무통장 입금": "https://image.ohou.se/i/bucketplace-v2-development/pg/168311600677152970.png?w=108&h=108&c=c",
                "핸드폰": "https://image.ohou.se/i/bucketplace-v2-development/pg/168311602265893776.png?w=108&h=108&c=c",
                "카카오페이": "https://image.ohou.se/i/bucketplace-v2-development/pg/168311600097145245.png?w=108&h=108&c=c",
                "페이코": "https://image.ohou.se/i/bucketplace-v2-development/pg/168311601701037520.png?w=108&h=108&c=c"
            },
            agreed: false,
            selectedPaymentMethod: null
          
        };
    },
    computed: {
        ...mapState(['nowOrderList']), 

        shippingFee() {
            return "무료";
        },
        
    },
    methods: {
        ...mapMutations(['setNowPayment']), // mapMutations 사용법 수정

        resetShipping() {
            this.shippingInfo = "";
        },
        resetCustomerInfo() {
            this.customerInfo = "";
        },
        selectPaymentMethod(method) {
            console.log("선택된 결제 수단:", method);
            this.selectedPaymentMethod = method;
        },
        completePayment() {
            if (this.agreed) {
                let tmp ={
                    userNo: this.userNo,
                    orderList:  this.$store.state.nowOrderList
                }
                console.log(tmp);
                axios({
                    method: 'post',
                    url: `${this.$store.state.apiBaseUrl}/home/pay/createOrder`,
                    headers: { "Content-Type": "application/json; charset=utf-8" },
                    data: tmp,
                    responseType: 'json'

                }).then(response => {
                    if(response)
                    console.log("결제 정보 전송 성공:", response.data);
                    this.createOrder = response.data.apiData;

                    alert("주문이 완료되었습니다.");

                    this.$router.push("/payend/"+this.createOrder);

                }).catch(error => {
                    console.log(error);
                });
            } else {
                alert("결제에 동의해주세요!");
            }
        },
        

    },
    created() {
        const userNoFromSession = sessionStorage.getItem('userNo');
        if (userNoFromSession) {
            this.userNo = parseInt(userNoFromSession);
        } else {
            // 로그인되지 않은 사용자에 대한 처리
        }
    

        // nowOrderList에서 데이터를 가져와 shippingInfo와 customerInfo에 할당
        if (this.$store.state.nowOrderList !== null) {
            const order = this.$store.state.nowOrderList;
            this.shippingInfo = order.shippingInfo;
            this.customerInfo = order.customerInfo;
        }
    }
};
</script>