<template>
	
<div id="wrap">

	<AppHeader />
	<!-- //header 부분 -->

	<nav class="clearfix">
		<div class="nav0">
			<div class="nav1">
				<!-- https://bomango.tistory.com/52 -->
				<ul class="nav1-main" v-on:mouseleave="mouseleave" >
					<li>
						<router-link to="/" v-on:mouseover="mouseover" >침대</router-link>
						<ul class="nav1-sub" v-show="show">
							<li><a>서브1</a></li>
							<li><a>서브2</a></li>
							<li><a>서브3</a></li>
							<li><a>서브4</a></li>
						</ul>
					</li>
					<li>
						<router-link to="/" v-on:mouseover="mouseover" >쇼파</router-link>
						<ul class="nav1-sub" v-show="show">
							<li><a>서브1</a></li>
							<li><a>서브2</a></li>
							<li><a>서브3</a></li>
							<li><a>서브4</a></li>
						</ul>
					</li>
					<li>
						<router-link to="/" v-on:mouseover="mouseover" >책상</router-link>
						<ul class="nav1-sub" v-show="show">
							<li><a>서브1</a></li>
							<li><a>서브2</a></li>
							<li><a>서브3</a></li>
							<li><a>서브4</a></li>
						</ul>
					</li>
					<li>
						<router-link to="/" v-on:mouseover="mouseover" >옷장</router-link>
						<ul class="nav1-sub" v-show="show">
							<li><a>서브1</a></li>
							<li><a>서브2</a></li>
							<li><a>서브3</a></li>
							<li><a>서브4</a></li>
						</ul>
					</li>
					<li>
						<router-link to="/" v-on:mouseover="mouseover" >기타</router-link>
						<ul class="nav1-sub" v-show="show">
							<li><a>서브1</a></li>
							<li><a>서브2</a></li>
							<li><a>서브3</a></li>
							<li><a>서브4</a></li>
						</ul>
					</li>
				</ul>
			</div>
			<!-- nav1 -->
			<!-- https://apost.dev/1121/#google_vignette -->
			<div class="rollingbanner">
				<div class="title">1</div>
				<ul class="nav2-hit">
					<li><router-link to="/" class="prev" >{{ hitList[0] }}</router-link></li>
					<li><router-link to="/" class="current">{{ hitList[1] }}</router-link></li>
					<li><router-link to="/" >{{ hitList[2] }}</router-link></li>
					<li><router-link to="/" >{{ hitList[3] }}</router-link></li>
					<li><router-link to="/" >{{ hitList[4] }}</router-link></li>
					<li><router-link to="/" >{{ hitList[5] }}</router-link></li>
					<li><router-link to="/" >{{ hitList[6] }}</router-link></li>
					<li><router-link to="/" >{{ hitList[7] }}</router-link></li>
					<li><router-link to="/" >{{ hitList[8] }}</router-link></li>
					<li><router-link to="/" >{{ hitList[9] }}</router-link></li>
					<li><router-link to="/" class="next">{{ hitList[10] }}</router-link></li>
				</ul>
			</div>

			
		</div>
		<!-- nav0 -->
	</nav>
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
					<li class="cate-li"><a href="">침대</a></li>
					<li class="cate-li"><a href="">매트리스</a></li>
					<li class="cate-li"><a href="">침대프레임</a></li>
				</ul>
			</ul>
			<ul>
				<li @click="toggleCategories02">
					<strong>쇼파</strong>
					<span v-if="showCategories02"> △ </span>
					<span v-else> ▽</span> <!-- 화살표 아이콘 -->
				</li>
				<ul v-show="showCategories02"> <!-- 카테고리 리스트 -->
					<li class="cate-li"><a href="">일반 쇼파</a></li>
					<li class="cate-li"><a href="">좌식 쇼파</a></li>
					<li class="cate-li"><a href="">1인용 쇼파</a></li>
				</ul>
			</ul>
			<ul>
				<li @click="toggleCategories03">
					<strong>테이블</strong>
					<span v-if="showCategories03"> △ </span>
					<span v-else> ▽</span> <!-- 화살표 아이콘 -->
				</li>
				<ul v-show="showCategories03"> <!-- 카테고리 리스트 -->
					<li class="cate-li"><a href="">식탁</a></li>
					<li class="cate-li"><a href="">사이드테이블</a></li>
				</ul>
			</ul>
			<ul>
				<li @click="toggleCategories04">
					<strong>옷장</strong>
					<span v-if="showCategories04"> △ </span>
					<span v-else> ▽</span> <!-- 화살표 아이콘 -->
				</li>
				<ul v-show="showCategories04"> <!-- 카테고리 리스트 -->
					<li class="cate-li"><a href="">옷장</a></li>
					<li class="cate-li"><a href="">행거</a></li>
					<li class="cate-li"><a href="">붙박이장</a></li>
				</ul>
			</ul>
			
		</div>
		<!-- content-side -->

		<div class="ss-main">
			aaaaa
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
import AppFooter from '@/components/AppFooter.vue';

export default {
	name: "CategoryView",
	components: {
		AppHeader,
		AppFooter
	},
	data() {
		return {
			show : false, //
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
			showCategories: false,
            showCategories02: false,
			showCategories03: false,
            showCategories04: false,

		};
	},
	methods: {
		mouseover(){ // 마우스 올리면 서브메뉴 보여줌
            this.show = true;
        },
        mouseleave(){ // 마우스 떼면 서브메뉴 사라짐
            this.show = false;
        },
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
        }
	},
	
	created(){

	}
};
</script>

<style></style>