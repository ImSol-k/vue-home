<template>
    <div>
        <AppHeaderManager />
        <!-- //header 부분 -->

        <div class="mypage-container">
            <div class="mypage-content-side">
                <div class="mypage-profile">
                    <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&w=240&h=240&c=c&webp=1"
                        alt="프로필 사진">
                    <h2>{{ userData.name }}</h2>
                </div>

                <div class="mypage-user-info">
                    <h2>내 정보</h2>
                    <p>이메일: {{ userData.email }}</p>
                    <p>전화번호: {{ userData.hp }}</p>
                    <p>주소: {{ userData.address }}</p>
                    <a href="#" class="mypage-btn">정보 수정</a>
                </div>
            </div>

            <div class="mypage-content-main">
                <div class="mypage-order-history">
                    <h3>주문 내역</h3>
                    <ul>
                        <li v-for="order in orderHistory" :key="order.orderNo">
                            {{ order.orderDate }} - 상품명: {{ order.productName }}, 가격: {{ order.price }}원, 색상: {{
                        order.color }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <AppFooter />
        <!-- //footer 부분 -->
    </div>
</template>

<script>
import "@/assets/css/user/mypage.css";
import AppHeaderManager from '@/components/AppHeaderManager.vue';
import AppFooter from '@/components/AppFooter.vue';
import axios from 'axios';

export default {
    name: "MyPageView",
    components: {
        AppHeaderManager,
        AppFooter
    },
    data() {
        return {
            userData: {},
            orderHistory: []
        };
    },
    methods: {
        fetchData() {
            axios({
                method: 'get',
                url: `${this.$store.state.apiBaseUrl}/home/mypage/userinfo/${this.$store.state.authUser.userNo}`, // 수정된 부분
                headers: { "Content-Type": "application/json; charset=utf-8" },
                responseType: 'json'
            }).then(response => {
                // console.log(response.data)
                this.userData = response.data; // 수정된 부분
                // console.log(this.userData)


            }).catch(error => {
                console.log(error);
            });
        },
        
        fetchData2() {
            axios({
                method: 'get',
                url: `${this.$store.state.apiBaseUrl}/home/mypage/orders/${this.$store.state.authUser.userNo}`, // 수정된 부분
                headers: { "Content-Type": "application/json; charset=utf-8" },
                responseType: 'json'
            }).then(response => {
                console.log(response.data)
                this.orderHistory = response.data;
                console.log(this.orderHistory)
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created() {
        this.fetchData();
        this.fetchData2();
    }
};
</script>
