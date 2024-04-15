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

	<div class="content clearfix">
			<div class="content-side">
				<ul>
					<li>침대</li>
					<li>쇼파</li>
					<li>책상</li>
					<li>옷장</li>
					<li>기타</li>
				</ul>
			</div>
			<!-- content-side -->

			<div class="content-main">
				본 컨텐츠부분
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
import '@/assets/css/main/ss-main.css';
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

		};
	},
	methods: {

	},
	created(){

	}
};
</script>

<style></style>