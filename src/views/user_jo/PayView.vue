<template>
    <div>
        <!-- 헤더 -->
        <AppHeader />

        <!-- 결제 정보 입력 폼 -->
        <div class="pay-container">
            <div class="pay-content">
                <form id="pay-orderForm">
                    <!-- 배송지 정보 -->
                    <div class="pay-section">
                        <label for="shipping_info">배송지</label>
                        <div class="pay-change-info" @click="resetShipping()">배송지 변경</div>
                        <input type="text" id="shipping_info" name="shipping_info" placeholder="배송지 정보 입력"
                            value=" 서울시 강동구 천호옛6길19">
                        <select id="shipping_info_select" name="shipping_info_select">
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
                        <div class="pay-change-info" @click="resetCustomerInfo()">수령인 정보 변경</div>
                        <input type="text" id="customer_info" name="customer_info" placeholder="수령인 정보 입력" value=" 오지원">
                    </div>

                    <!-- 주문 상품 목록 -->
                    <div class="pay-product-list section">
                        <label for="products"><strong>주문 상품</strong></label>
                        <ul id="products">
                            <li>
                                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163546713759759330.jpg?w=108&h=108&c=c"
                                    alt="Product Image">
                                <div class="pay-name">모노 라운드 수납 선반 800/1000 3단</div>
                                <div class="pay-price">가격: 50,000원</div>
                            </li>
                            <li>
                                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163357669718709013.webp?w=108&h=108&c=c"
                                    alt="Product Image">
                                <div class="pay-name">(1+1) 캔버스 삼각 등받이 쿠션 (8colors) 솜포함</div>
                                <div class="pay-price">가격: 55,000원</div>
                            </li>
                        </ul>
                    </div>

                    <!-- 결제 수단 -->
                    <label for="payment_method"><strong>결제 수단</strong></label>
                    <br><br>

                    <div class="pay-payment-methods">
                        <label for="pay-credit_card" @click="selectPaymentMethod('신용 카드')">
                            <img src="https://image.ohou.se/i/bucketplace-v2-development/pg/168311599350498640.png?w=108&h=108&c=c"
                                alt="신용 카드">
                            <div>신용 카드</div>
                        </label>
                        <label for="pay-bank_transfer" @click="selectPaymentMethod('무통장 입금')">
                            <img src="https://image.ohou.se/i/bucketplace-v2-development/pg/168311600677152970.png?w=108&h=108&c=c"
                                alt="무통장 입금">
                            <div>무통장 입금</div>
                        </label>
                        <label for="pay-mobile_payment" @click="selectPaymentMethod('핸드폰')">
                            <img src="https://image.ohou.se/i/bucketplace-v2-development/pg/168311602265893776.png?w=108&h=108&c=c"
                                alt="핸드폰">
                            <div>핸드폰</div>
                        </label>
                        <label for="pay-kakao_pay" @click="selectPaymentMethod('카카오페이')">
                            <img src="https://image.ohou.se/i/bucketplace-v2-development/pg/168311600097145245.png?w=108&h=108&c=c"
                                alt="카카오페이">
                            <div>카카오페이</div>
                        </label>
                        <label for="pay-payco" @click="selectPaymentMethod('페이코')">
                            <img src="https://image.ohou.se/i/bucketplace-v2-development/pg/168311601701037520.png?w=108&h=108&c=c"
                                alt="페이코">
                            <div>페이코</div>
                        </label>
                    </div>
                </form>
            </div>

            <!-- 결제 정보 사이드바 -->
            <div class="pay-sidebar">
                <div class="pay-sidebar-content">
                    <h3>총 결제 금액</h3>
                    <br>
                    <p>상품 금액: 105,000원</p>
                    <br>
                    <p>배송비: 무료</p>
                    <br>
                    <hr>
                    <br>
                    <p>총 금액: 105,000원</p>
                    <br><br>
                    <div class="pay-agreement">
                        <input type="checkbox" id="pay-agree" name="agree">
                        <label for="pay-agree">위 내용에 모두 동의합니다.</label><br>
                        <p style="font-size: 14px;">상세 내용은 <a href="#">여기</a>를 클릭하여 확인하세요.</p>
                    </div>

                    <button class="pay-btn">결제 완료</button>
                </div>
            </div>
        </div>

        <!-- 푸터 -->
        <AppFooter />
    </div>
</template>

<script>
import "@/assets/css/user/pay.css";
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    name: "PayView",
    components: {
        AppHeader,
        AppFooter
    },
    methods: {
        resetShipping() {
            var shippingInput = document.getElementById('shipping_info');
            shippingInput.value = ''; // 배송지 정보 초기화
            shippingInput.focus(); // 입력란에 포커스
        },
        resetCustomerInfo() {
            var customerInput = document.getElementById('customer_info');
            customerInput.value = ''; // 주문자 정보 초기화
            customerInput.focus(); // 입력란에 포커스
        },
        selectPaymentMethod(method) {
            console.log("선택된 결제 수단:", method);
            // 선택된 결제 수단에 대한 작업을 수행하거나
            // 필요에 따라 다른 동작을 수행합니다.
            // 선택된 결제 수단의 라벨에 active 클래스를 추가합니다.
            document.querySelectorAll('.pay-payment-methods label').forEach(label => {
                label.classList.remove('active'); // 모든 라벨의 active 클래스를 제거합니다.
                if (label.textContent.trim() === method) {
                    label.classList.add('active'); // 선택된 결제 수단의 라벨에 active 클래스를 추가합니다.
                }
            });
        }
    },
    created() { }
};
</script>

<style scoped>
/* 추가적인 CSS 스타일링을 원하신다면 여기에 작성하세요. */
</style>
