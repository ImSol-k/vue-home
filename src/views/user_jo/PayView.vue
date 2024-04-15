<template>
    <div>

    <header class="header">
        <h1>집 꾸며조 - 결제하기</h1>
    </header>

    <div class="pay-container">
        <div class="pay-content">
            <form id="pay-orderForm">
                <div class="pay-section">
                    <label for="shipping_info">배송지</label>
                    <div class="pay-change-info" @click="resetShipping()">배송지 변경</div>
                    <input type="text" id="shipping_info" name="shipping_info" placeholder="배송지 정보 입력"
                        value=" 서울시 강동구 천호옛6길19 1층">
                    <select id="shipping_info" name="shipping_info">
                        <option value=" ">배송시 요청사항을 선택해주세요</option>
                        <option value=" ">부재시 문 앞에 놓아주세요</option>
                        <option value=" ">부재시 경비실에 맡겨주세요</option>
                        <option value=" ">배송전에 미리 연락주세요</option>
                        <option value=" ">직접입력</option>
                    </select>
                </div>

                <div class="pay-section">
                    <label for="customer_info"><strong>주문자</strong></label>
                    <div class="pay-change-info"  @click="resetCustomerInfo()">주문자 정보 변경</div>
                    <input type="text" id="customer_info" name="customer_info" placeholder="주문자 정보 입력" value=" 오지원">
                </div>

                <div class="pay-product-list section">
                    <label for="products"><strong>주문 상품</strong></label>
                    <ul id="products">
                        <li><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163546713759759330.jpg?w=108&h=108&c=c"
                                alt="Product Image">
                            <div class="pay-name">모노 라운드 수납 선반 800/1000 3단</div>
                            <div class="pay-price">가격: 50,000원</div>
                        </li>
                        <li><img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/163357669718709013.webp?w=108&h=108&c=c"
                                alt="Product Image">
                            <div class="pay-name">(1+1) 캔버스 삼각 등받이 쿠션 (8colors) 솜포함</div>
                            <div class="pay-price">가격: 55,000원</div>
                        </li>
                    </ul>
                 
                </div>

                <label for="payment_method"><strong>결제 수단</strong></label>
                <br><br>

                <div class="pay-payment-methods">
                    <label for="pay-credit_card">
                        <img src="https://image.ohou.se/i/bucketplace-v2-development/pg/168311599350498640.png?w=108&h=108&c=c"
                            alt="신용 카드">
                        <div>신용 카드</div>
                    </label>
                    <label for="pay-bank_transfer">
                        <img src="https://image.ohou.se/i/bucketplace-v2-development/pg/168311600677152970.png?w=108&h=108&c=c"
                            alt="무통장 입금">
                        <div>무통장 입금</div>
                    </label>
                    <label for="pay-mobile_payment">
                        <img src="https://image.ohou.se/i/bucketplace-v2-development/pg/168311602265893776.png?w=108&h=108&c=c"
                            alt="핸드폰">
                        <div>핸드폰</div>
                    </label>
                    <label for="pay-kakao_pay">
                        <img src="https://image.ohou.se/i/bucketplace-v2-development/pg/168311600097145245.png?w=108&h=108&c=c"
                            alt="카카오페이">
                        <div>카카오페이</div>
                    </label>
                    <label for="pay-payco">
                        <img src="https://image.ohou.se/i/bucketplace-v2-development/pg/168311601701037520.png?w=108&h=108&c=c"
                            alt="페이코">
                        <div>페이코</div>
                    </label>
                </div>

            </form>
        </div>

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
    </div>
</template>


<script>
import "@/assets/css/user/pay.css";





export default {
    name: "PayView",
    components: {},
    data() {
        return {};
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
        }
    },
};
</script>

