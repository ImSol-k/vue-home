<template>
    <div>
        <div class="header">
        <h1>집 꾸며조 - 마이페이지</h1>
    </div>

    <div class="mypage-container">
        <div class="mypage-content-side">
            <div class="mypage-profile">
                <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&w=240&h=240&c=c&webp=1"
                    alt="프로필 사진">
                <h2>오디오니</h2>
            </div>

            <div class="mypage-user-info">
                <h2>내 정보</h2>
                <p>이메일: 5g1@naver.com</p>
                <p>전화번호: 010-1111-1111</p>
                <p>주소: 서울시 강남구</p>
                <a href="#" class="mypage-btn">정보 수정</a>
            </div>
        </div>

        <div class="mypage-content-main">
            <div class="mypage-order-history">
                <h3>주문 내역</h3>
                <ul>
                    <li>2024년 4월 10일 - 상품명: 모노 라운드 수납 선반, 가격: 50,000원</li>
                    <li>2024년 4월 8일 - 상품명: 캔버스 삼각 등받이 쿠션, 가격: 55,000원</li>
                </ul>
            </div>

            <div class="mypage-favorite-items">
                <h3>좋아요 항목</h3>
                <ul>
                    <li>모노 라운드 수납 선반</li>
                    <li>캔버스 삼각 등받이 쿠션</li>
                </ul>
            </div>
        </div>
    </div>

    </div>
</template>


<script>
import "@/assets/css/user/mypage.css";

export default {
    name: "MyPageView",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>



