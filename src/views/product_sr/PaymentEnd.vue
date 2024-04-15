<template>
    <div class="wrap">
        <div class="header">
            <h1>header</h1>
        </div><!-- header -->

        <div class="paymentEnd">
            <div class="paymentEndMsg">
                <h1>주문이 완료되었습니다</h1>
                <img src="" alt="">
            </div>
            <div class="paymentEndInfo">
                <table>
                    <tr>
                        <td>주문자</td>
                        <td>김소리</td>
                    </tr>
                    <tr>
                        <td>배송지</td>
                        <td>경기도 성남시 중원구</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td colspan="2">주문정보</td>
                        <td>금액</td>
                    </tr>
                    <tr>
                        <td>상품명</td>
                        <td>알리 커피머신</td>
                        <td>42,000</td>
                    </tr>
                    <tr>
                        <td>총 결제금액</td>
                        <td colspan="2">42,000</td>
                    </tr>
                </table>
            </div>
        </div><!-- paymentEnd -->
        <div class="footer">
            <h1>footer</h1>
        </div><!-- footer -->
    </div>
</template>
<script>
import '@/assets/css/product/pamentend.css'
export default {
    name: "PaymentEnd",
    components: {},
    data() {
        return {};
    },
    methods: {},
    created() { }
};
</script>

<style></style>