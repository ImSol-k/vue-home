<template>

	<AppHeader />

	<div class="clearfix" id="full">
		<div id="contentNav">
			<div class="side">
				<ul>
					<li @click="toggleCategories">
						<strong>상품 관리</strong>
						<span v-if="showCategories"> △ </span>
						<span v-else> ▽</span> <!-- 화살표 아이콘 -->
					</li>
					<ul v-show="showCategories"> <!-- 카테고리 리스트 -->
						<li class="cate-li">
							<ul>
								<li @click="toggleCategories00">
									<strong>침대</strong>
									<span v-if="showCategories00"> △ </span>
									<span v-else> ▽</span> <!-- 화살표 아이콘 -->
								</li>
								<ul v-show="showCategories00"> <!-- 카테고리 리스트 -->
									<li class="cate-li"><a href="">침대</a></li>
									<li class="cate-li"><a href="">매트리스</a></li>
									<li class="cate-li"><a href="">침대 프레임</a></li>
								</ul>
							</ul>
						</li>
						<li class="cate-li">
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
						</li>
						<li class="cate-li">
							<ul>
								<li @click="toggleCategories03">
									<strong>테이블</strong>
									<span v-if="showCategories03"> △ </span>
									<span v-else> ▽</span> <!-- 화살표 아이콘 -->
								</li>
								<ul v-show="showCategories03"> <!-- 카테고리 리스트 -->
									<li class="cate-li"><a href="">식탁</a></li>
									<li class="cate-li"><a href="">사이드 테이블</a></li>
								</ul>
							</ul>
						</li>
						<li class="cate-li">
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
						</li>
					</ul>
					<li @click="toggleCategories05">
						<strong>주문 관리</strong>
						<span v-if="showCategories05"> △ </span>
						<span v-else> ▽</span>
					</li>
					<ul v-show="showCategories05">
						<li class="cate-li"><a href="">주문 통계</a></li>
						<li class="cate-li"><a href="">주문 현황</a></li>
					</ul>
				</ul>
			</div>
			<!-- //side -->

		</div>
		<!-- //contentNav -->

		<div id="contentMain" class="">
			<div id="graph">
				<h3 id="eee">주문현황</h3>
			</div>
			<div class="clearfix" id="size">
				<div id="pp">

					<h3>구매진행중</h3>
					<table class="ppp" v-bind:key="i" v-for="(v, i) in ing">

						<tbody>
							<tr>
								<td class="img" rowspan="3"><img class="img"
										v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${v.mainImage}`"
										alt=""></td>
								<td class="word">상품명: {{ v.productName }}</td>
								<td class="nick" rowspan="3">닉네임: {{ v.nickName }}</td>
								<td class="nick2" rowspan="3"><button v-on:click.prevent="change(v.no)" class="state"
										type="button">완료</button></td>
							</tr>
							<tr>
								<td>색상: {{ v.color }}</td>
							</tr>
							<tr>
								<td>수량: {{ v.count }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="bb">
					<h3 class="bx">구매진행완료</h3>
					<table class="bbb" v-bind:key="i" v-for="(v, i) in end">
						<tbody>
							<tr>
								<td class="img" rowspan="3"><img class="img"
										v-bind:src="`${this.$store.state.apiBaseUrl}/upload/1713326911999e7c7a418-69b0-4097-94f5-89473802a605.jpg`"
										alt=""></td>
								<td>상품명 :{{ v.productName }}</td>
								<td class="nick" rowspan="3">닉네임: {{ v.nickName }}</td>
							</tr>
							<tr>
								<td>색상 :{{ v.color }}</td>
							</tr>
							<tr>
								<td>수량 :{{ v.count }}</td>
							</tr>
						</tbody>
					</table>
				</div>

			</div>
		</div>
	</div>
	<!-- //clearfix -->
	<AppFooter />
</template>

<script>
import '@/assets/css/managerJ/main.css'
import "@/assets/css/managerY/productLIst.css"
import axios from 'axios';



import AppHeader from '../../components/AppHeader.vue'
import AppFooter from '../../components/AppFooter.vue'


export default {
	name: 'ManagerState',
	components: {
		AppHeader,
		AppFooter
	},
	data() {
		return {
			showCategories: false,
			showCategories00: false,
			showCategories02: false,
			showCategories03: false,
			showCategories04: false,
			showCategories05: false,
			end: [],
			ing: []
		}
	},
	methods: {
		changeSort(sortType) {
			document.getElementById('sortButton').innerText = sortType;
			// 여기에 해당 정렬 처리 로직 추가
		},
		toggleCategories() {
			this.showCategories = !this.showCategories; // 클릭 시 카테고리 리스트를 보이거나 숨김
		},
		toggleCategories00() {
			this.showCategories00 = !this.showCategories00; // 클릭 시 카테고리 리스트를 보이거나 숨김
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
		toggleCategories05() {
			this.showCategories05 = !this.showCategories05; // 클릭 시 카테고리 리스트를 보이거나 숨김
		},
		list() {
			axios({
				method: 'get', // put, post, delete 
				url: `${this.$store.state.apiBaseUrl}/home/manager/state`,
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				//params: guestbookVo, //get방식 파라미터로 값이 전달
				//data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
				responseType: 'json' //수신타입
			}).then(response => {
				console.log(response.data.end); //수신데이타
				console.log(response.data.ing)
				this.ing = response.data.ing;
				this.end = response.data.end;
				//console.log(this.ing.nickName)
				console.log(this.end)

			}).catch(error => {
				console.log(error);
			});
		},
		change(a) {
			console.log("aaa")
			console.log(a)
			axios({
				method: 'post', // put, post, delete 
				url: `${this.$store.state.apiBaseUrl}/home/manager/state`,
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				//params: guestbookVo, //get방식 파라미터로 값이 전달
				data: a, //put, post, delete 방식 자동으로 JSON으로 변환 전달
				responseType: 'json' //수신타입
			}).then(response => {
				console.log(response); //수신데이타

				window.location.reload();

			}).catch(error => {
				console.log(error);
			});
		}
	},
	created() {
		this.list();
	}
}





</script>