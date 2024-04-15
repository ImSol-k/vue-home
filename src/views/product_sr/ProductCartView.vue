<template>
    <div class="wrap cartWrap">
        <div class="header">
            <h1>header</h1>
        </div><!-- header -->


        <div class="cartContent">

            <div class="cartList">
                <div class="cartHearder">
                    <label for="selectAll">
                        <input type="checkbox" name="" id="selectAll"><span>모두선택</span>
                    </label>
                    <button>선택삭제</button>
                </div><!-- cartHearder -->

                <div class="cartObj">
                    <input type="checkbox" name="" id="cartSelect">
                    <img src="@/assets/images/product/test.png" alt="">
                    <div class="cartObjHeader">
                        <span class="deleteCart">×</span>
                        <p>상품명(상세제품명~~)</p>
                        <div>
                            <div class="cartCountBtn">
                                <button>-</button>
                                <span>0</span>
                                <button>+</button>
                            </div>
                            <p class="cartOnePrice"><span>20,000</span>원</p>
                        </div>
                    </div>
                </div><!-- cartObj -->
                <div class="cartObj">
                    <input type="checkbox" name="" id="cartSelect">
                    <img src="@/assets/images/product/test.png" alt="">
                    <div class="cartObjHeader">
                        <span class="deleteCart">×</span>
                        <p>상품명(상세제품명~~)</p>
                        <div>
                            <div class="cartCountBtn">
                                <button>-</button>
                                <span>0</span>
                                <button>+</button>
                            </div>
                            <p class="cartOnePrice"><span>21,000</span>원</p>
                        </div>
                    </div>
                </div><!-- cartObj -->

            </div><!-- cartList -->

            <div class="cartPay">
                <div class="userCartPrice">
                    <p>총 상품금액 <span>41,000</span></p>
                    <p>결제금액 <span>41,000</span></p>
                </div>
                <button>2개 상품 구매하기</button>
            </div><!-- cartPay -->
        </div>

        <div class="footer">
            <h1>footer</h1>
        </div><!-- footer -->
    </div>
</template>


<script>
import '@/assets/css/product/cart.css'
import '@/assets/css/product/infomain.css'

export default {
    name: "ProductCartView",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>


<style></style>
