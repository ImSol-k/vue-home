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
                            v-model="shippingInfo">
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
                            v-model="customerInfo">
                    </div>

                    <!-- 주문 상품 목록 -->
                    <div class="pay-product-list section">
                        <label for="products"><strong>주문 상품</strong></label>
                        <ul id="products">
                            <li v-for="(product, index) in products" :key="index">
                                <img :src="product.image" :alt="product.name">
                                <div class="pay-name">{{ product.name }}</div>
                                <div class="pay-price">가격: {{ product.price }}원</div>

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
                    <p>상품 금액: {{ totalAmount }}원</p>
                    <br>
                    <p>배송비: {{ shippingFee }}</p>
                    <br>
                    <hr>
                    <br>
                    <p>총 금액: {{ totalPayment }}원</p>
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

export default {
    name: "PayView",
    components: {
        AppHeaderManager,
        AppFooter
    },
    data() {
        return {
            shippingInfo: "서울시 강동구 천호옛6길19",
            shippingOption: "default",
            customerInfo: "오지원",
            userNo: 1, // 사용자 번호 추가
            products: [
                {
                    image: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163546713759759330.jpg?w=108&h=108&c=c",
                    name: "모노 라운드 수납 선반 800/1000 3단",
                    price: "50,000",
                    count: 2, // 추가: 상품 개수
                    product_no: 1 // 추가: 상품 번호 또는 ID

                },
                {
                    image: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163357669718709013.webp?w=108&h=108&c=c",
                    name: "(1+1) 캔버스 삼각 등받이 쿠션  솜포함",
                    price: "55,000",
                    count: 2, // 추가: 상품 개수
                    product_no: 1 // 추가: 상품 번호 또는 ID
                }
            ],
            paymentMethods: ["신용 카드", "무통장 입금", "핸드폰", "카카오페이", "페이코"],
            paymentMethodImages: {
                "신용 카드": "https://image.ohou.se/i/bucketplace-v2-development/pg/168311599350498640.png?w=108&h=108&c=c",
                "무통장 입금": "https://image.ohou.se/i/bucketplace-v2-development/pg/168311600677152970.png?w=108&h=108&c=c",
                "핸드폰": "https://image.ohou.se/i/bucketplace-v2-development/pg/168311602265893776.png?w=108&h=108&c=c",
                "카카오페이": "https://image.ohou.se/i/bucketplace-v2-development/pg/168311600097145245.png?w=108&h=108&c=c",
                "페이코": "https://image.ohou.se/i/bucketplace-v2-development/pg/168311601701037520.png?w=108&h=108&c=c"
            },
            agreed: false,
            selectedPaymentMethod: null // 선택된 결제 수단을 저장할 변수 추가
        };
    },
    computed: {
        totalAmount() {
            // 상품 가격의 합을 계산하여 반환
            return this.products.reduce((acc, cur) => acc + parseInt(cur.price), 0);
        },
        shippingFee() {
            // 배송비 계산 로직 추가
            // 배송비가 고정이라면 상수로 반환하거나, 동적인 배송비 계산 로직을 추가할 수 있습니다.
            return "무료";
        },
        totalPayment() {
            // 총 결제 금액 계산
            // 상품 가격의 합 
            return this.totalAmount
        }
    },
    methods: {
        resetShipping() {
            this.shippingInfo = "";
        },
        resetCustomerInfo() {
            this.customerInfo = "";
        },
        selectPaymentMethod(method) {
            console.log("선택된 결제 수단:", method);
            this.selectedPaymentMethod = method; // 선택된 결제 수단을 저장
            // 선택된 결제 수단에 대한 작업을 수행하거나
            // 필요에 따라 다른 동작을 수행합니다.
        },
        completePayment() {
            if (this.agreed) {
                axios({
                    method: 'post', // POST 방식 설정
                    url: `${this.$store.state.apiBaseUrl}/home/pay/createOrder`, // URL 설정
                    headers: { "Content-Type": "application/json; charset=utf-8" }, // 전송할 데이터 타입 설정
                    data: {
                        userNo: this.userNo, // 사용자 번호 추가
                        shippingInfo: this.shippingInfo,
                        customerInfo: this.customerInfo,
                        orderList: this.products.map(product => {
                            return {
                                product_no: product.product_no,
                                count: product.count,
                                color_no: product.color_no
                            };
                        }),
                        totalPayment: this.totalPayment
                    },
                    responseType: 'json' // 수신 타입 설정
                }).then(response => {
                    console.log("결제 정보 전송 성공:", response.data); // 수신된 데이터 출력
                    // 여기에 결제 완료 후의 동작 추가
                }).catch(error => {
                    console.log("결제 정보 전송 실패:", error);
                });
            } else {
                alert("결제에 동의해주세요!");
            }
        }
    },
    created() {
        // 세션에서 사용자 번호를 가져와서 userNo에 설정
        const userNoFromSession = sessionStorage.getItem('userNo');
        if(userNoFromSession) {
            this.userNo = parseInt(userNoFromSession);
        } else {
            // 로그인되지 않은 사용자에 대한 처리
        }
    }
};
</script>