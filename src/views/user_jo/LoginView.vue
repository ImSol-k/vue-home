<template>

    
    <div class="login-header">

    </div>

    <div class="login-container">
        <div class="login-logo">
            <img src="../../assets/images/homedeco/homelogo.png" alt="집꾸며조">
            <div class="login-brand-text"></div>
        </div>
        <form id="loginForm" action="login.php" method="post">
            <div class="login-form-group">
                <label for="username">아이디</label>
                <input type="text" id="username" name="username" placeholder="아이디를 입력하세요" required>
            </div>
            <div class="login-form-group">
                <label for="password">비밀번호</label>
                <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" required>
            </div>
            <button type="submit" class="login-btn">로그인</button>
        </form>
    </div>



</template>


<script>
import "@/assets/css/user/login.css";

export default {
    name: "LoginView",
    components: {
        
    },
    data() {
        return {};
    },
    methods: {},
};
</script>



