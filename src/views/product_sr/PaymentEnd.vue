<template>
    <div class="wrap">
        <AppHeader/>

        <div class="paymentEnd">
            <div class="paymentEndMsg">
                <h1>주문이 완료되었습니다</h1>
                <img src="@/assets/images/product/payend.png" alt="">
            </div>
            <button class="payEndHomeBtn">홈으로</button>
            <div class="paymentEndInfo">
                <table>
                    <tr>
                        <td><b>주문자</b></td>
                        <td>김소리</td>
                        <td><b>핸드폰번호</b></td>
                        <td>010-2222-3333</td>
                    </tr>
                    <tr>
                        <td><b>배송지</b></td>
                        <td colspan="3">경기도 성남시 중원구</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th colspan="4">주문정보</th>
                    </tr>
                    <tr>
                        <td><b>상품명</b></td>
                        <td>알리 커피머신</td>
                        <td><b>금액</b></td>
                        <td>42,000</td>
                    </tr>
                    <tr>
                        <td><b>총 결제금액</b></td>
                        <td colspan="3">42,000</td>
                    </tr>
                </table>
            </div>
        </div><!-- paymentEnd -->
        <AppFooter/>
    </div>
</template>
<script>
import '@/assets/css/product/product.css'
import '@/assets/css/product/paymentend.css'
import '@/assets/css/product/infomain.css'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

import axios from 'axios';

export default {
    name: "PaymentEnd",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            orderUser: {
                name: "",
                hp: "",
                address: ""
            },
            orderInfoList: [],
            no:""
        };
    },
    methods: {
        orderInfo(){
            console.log("주문완료페이지");
            const urlParams = new URL(location.href).searchParams;

            const no = urlParams.get('no');
            this.no = no
            console.log(no);
            axios({
                
                method: 'post', // put, post, delete 
                url: 'http://localhost:9090/home/payend',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.no, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                
            }).catch(error => {
                console.log(error);
            });
        
        }
    },
    created() { 
        this.orderInfo();
    }
};
</script>

<style></style>