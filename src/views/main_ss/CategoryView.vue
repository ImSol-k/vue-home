<template>
	
<div id="wrap">

	<AppHeader @update="catchKeyword"/>
	<!-- //header 부분 -->

	<AppNavView @list="category" />
    <!-- //nav 부분 -->

	<div class="ss-category clearfix">
		<div class="ss-side">
			<ul>
				<li @click="toggleCategories">
					<strong>침대</strong>
					<span v-if="showCategories"> △ </span>
					<span v-else> ▽</span> <!-- 화살표 아이콘 -->
				</li>
				<ul v-show="showCategories"> <!-- 카테고리 리스트 -->
					<li class="cate-li" v-on:click.prevent="showProductList('bed')"><a>침대</a></li>
					<li class="cate-li" v-on:click.prevent="showProductList('mattress')"><a href="">매트리스</a></li>
					<li class="cate-li" v-on:click.prevent="showProductList('frame')"><a href="">침대프레임</a></li>
				</ul>
			</ul>
			<ul>
				<li @click="toggleCategories02">
					<strong>쇼파</strong>
					<span v-if="showCategories02"> △ </span>
					<span v-else> ▽</span> <!-- 화살표 아이콘 -->
				</li>
				<ul v-show="showCategories02"> <!-- 카테고리 리스트 -->
					<li class="cate-li" v-on:click.prevent="showProductList('normal-sofa')"><a href="">일반 쇼파</a></li>
					<li class="cate-li" v-on:click.prevent="showProductList('lounge-sofa')"><a href="">좌식 쇼파</a></li>
					<li class="cate-li" v-on:click.prevent="showProductList('single-sofa')"><a href="">1인용 쇼파</a></li>
				</ul>
			</ul>
			<ul>
				<li @click="toggleCategories03">
					<strong>테이블</strong>
					<span v-if="showCategories03"> △ </span>
					<span v-else> ▽</span> <!-- 화살표 아이콘 -->
				</li>
				<ul v-show="showCategories03"> <!-- 카테고리 리스트 -->
					<li class="cate-li" v-on:click.prevent="showProductList('dining-table')"><a href="" >식탁</a></li>
					<li class="cate-li" v-on:click.prevent="showProductList('side-table')"><a href="">사이드테이블</a></li>
				</ul>
			</ul>
			<ul>
				<li @click="toggleCategories04">
					<strong>옷장</strong>
					<span v-if="showCategories04"> △ </span>
					<span v-else> ▽</span> <!-- 화살표 아이콘 -->
				</li>
				<ul v-show="showCategories04"> <!-- 카테고리 리스트 -->
					<li class="cate-li" v-on:click.prevent="showProductList('closet')"><a href="">옷장</a></li>
					<li class="cate-li" v-on:click.prevent="showProductList('hanger')"><a href="">행거</a></li>
					<li class="cate-li" v-on:click.prevent="showProductList('built-in')"><a href="">붙박이장</a></li>
				</ul>
			</ul>
			
		</div>
		<!-- content-side -->

		<div class="ss-main">
            <div class="ss-3btn">
                <div class="dropdown">
                        <button class="dropbtn" id="sortButton">최신순</button>
                        <div class="dropdown-content">
                            <a href="#" @click="changeSort('recent')">최신순</a>
                            <a href="#" @click="changeSort('review')">리뷰순</a>
                            <a href="#" @click="changeSort('rating')">별점순</a>
                        </div>
                    </div>
            </div>
            <div class="ss-goods" v-for="(list,i) in list" v-bind:key="i">
                <img v-on:click="push" :data-no="`${list.productNo}`" v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${list.mainImg}`"><br>
                <span>{{ list.category }}</span><br>
                <span>이름 : {{ list.productName }}</span><br>
                <span>별점 : {{ list.star }}</span>&nbsp;
                <span>가격 : {{ list.price }}</span>
            </div>
		</div>
		<!-- content-main -->
	</div>
	<!-- //content 부분 -->

	<AppFooter />
	<!-- //footer 부분 -->

</div>
<!-- //wrap -->

</template>

<script>
import '@/assets/css/main/ss-home.css';
import '@/assets/css/main/ss-category.css';
import AppHeader from '@/components/AppHeader.vue';
import AppNavView from '@/components/AppNavView.vue';
import AppFooter from '@/components/AppFooter.vue';
import axios from 'axios';

export default {
	name: "CategoryView",
	components: {
		AppHeader,
        AppNavView,
		AppFooter
	},
	data() {
		return {
			show : false, //
			showCategories: false,
            showCategories02: false,
			showCategories03: false,
            showCategories04: false,
            hitList : [
                '쇼파' ,
                '침대',
                '쇼파' ,
                '침대' ,
                 '쇼파' ,
                '침대' ,
                '쇼파',
                '침대' ,
                '쇼파' ,
                '침대' 
            ],
			list :this.$store.state.category,
			keyword : ''
		};
	},
	methods: {
		// 마우스 올리면 서브메뉴 보여줌
		mouseover(){
			this.show = true; 
		},
		// 마우스 떼면 서브메뉴 사라짐
        mouseleave(){ 
			this.show = false;
		},

        // 사이드 보여주기
		toggleCategories() {
            this.showCategories = !this.showCategories; // 클릭 시 카테고리 리스트를 보이거나 숨김
        },
        toggleCategories02() {
            this.showCategories02 = !this.showCategories02; // 클릭 시 카테고리 리스트를 보이거나 숨김
        },
        toggleCategories03() {
            this.showCategories03 = !this.showCategories03; // 클릭 시 카테고리 리스트를 보이거나 숨김
        },
        toggleCategories04() {
            this.showCategories04 = !this.showCategories04; // 클릭 시 카테고리 리스트를 보이거나 숨김
        },
        ///////////////////////////////////////

        catchKeyword(keyword){
            if(typeof keyword !== 'undefined'){
                this.list = this.$store.state.category;
            } else {
                axios({
                    method: 'get', // put, post, delete 
                    url: `${this.$store.state.apiBaseUrl}/home/main/category`,
                    headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                    params: {keyword : keyword}, //get방식 파라미터로 값이 전달
                    // data: , //put, post, delete 방식 자동으로 JSON으로 변환 전달
                    responseType: 'json' //수신타입
                }).then(response => {
                    if(response.data.result == 'success'){
                        // this.list = null;
                        this.$store.commit('setCategory',response.data.apiData) ;
                    } else {
                        alert("상품 준비중입니다.")
                        // this.$router.push('/category');
                    }
                }).catch(error => {
                    console.log(error);
                });
            }
        },
        category(category){
            console.log('aaaa'+category)
        },
        showProductList(category){
            console.log(category);
            axios({
                    method: 'get', // put, post, delete 
                    url: `${this.$store.state.apiBaseUrl}/home/main/category`,
                    headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                    params: {keyword : category}, //get방식 파라미터로 값이 전달
                    // data: , //put, post, delete 방식 자동으로 JSON으로 변환 전달
                    responseType: 'json' //수신타입
                }).then(response => {
                    if(response.data.result == 'success'){
                        this.$store.commit('setCategory',null);
                        this.$store.commit('setCategory', response.data.apiData);
                        this.list = this.$store.state.category;
                        
                    } else {
                        alert("상품 준비중입니다.");
                    }
                }).catch(error => {
                    console.log(error);
                });
        },
        push(event){
            let no =event.target.dataset.no
            this.$router.push('/product/'+ no);
        },

        //////////////////////////////////// 버튼 ///////////////////
        changeSort(sortType) {
            document.getElementById('sortButton').innerText = sortType;
            let word = this.list[0].category
            console.log(word);
        }
	},
    mounted(){
        document.getElementById('sortButton').innerText = '최신순';
        
        let dropdownItems = document.querySelectorAll('.dropdown-content a');
        dropdownItems.forEach(function (item) {
            item.addEventListener('click', function () {
                document.getElementById('sortButton').innerText = this.innerText;
            });
        });
    },
	
	created(){
        this.toggleCategories();
        this.catchKeyword();
    }
};
</script>

<style></style>