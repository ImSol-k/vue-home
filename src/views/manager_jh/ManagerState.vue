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
		</div>

		<div id="contentMain">
			<div id="graph">
				<h3 id="eee">주문현황</h3>

			</div>
			<div class="clearfix" id="size">
				<div id="pp">

					<h3>구매진행중</h3>

					<table id="ppp">
						<form action="">
							<tbody>
								<tr>
									<td id="img" rowspan="3"><img id="img" src="../../assets/images/managerJ/test.png"
											alt=""></td>
									<td id="word">상품명 :</td>
									<td id="nick" rowspan="3">닉네임</td>
									<td id="nick2" rowspan="3"><button id="state" type="submit">완료</button></td>
								</tr>
								<tr>
									<td>색상 :</td>
								</tr>
								<tr>
									<td>수량 :</td>
								</tr>
							</tbody>
						</form>
					</table>
					<table id="ppp">
						<form action="">
							<tbody>
								<tr>
									<td id="img" rowspan="3"><img id="img" src="../../assets/images/managerJ/test.png"
											alt=""></td>
									<td id="word">상품명 :</td>
									<td id="nick" rowspan="3">닉네임</td>
									<td id="nick2" rowspan="3"><button id="state" type="submit">완료</button></td>
								</tr>
								<tr>
									<td>색상 :</td>
								</tr>
								<tr>
									<td>수량 :</td>
								</tr>
							</tbody>
						</form>
					</table>
				</div>
				<div id="bb">
					<h3 id="bx">구매진행완료</h3>
					<table id="bbb">
						<tbody>
							<tr>
								<td id="img" rowspan="3"><img id="img" src="../../assets/images/managerJ/test.png"
										alt=""></td>
								<td>상품명 :</td>
								<td id="nick" rowspan="3">닉네임</td>
							</tr>
							<tr>
								<td>색상 :</td>
							</tr>
							<tr>
								<td>수량 :</td>
							</tr>
						</tbody>
					</table>
					<table id="bbb">
						<tbody>
							<tr>
								<td id="img" rowspan="3"><img id="img" src="../../assets/images/managerJ/test.png"
										alt=""></td>
								<td>상품명 :</td>
								<td id="nick" rowspan="3">닉네임</td>
							</tr>
							<tr>
								<td>색상 :</td>
							</tr>
							<tr>
								<td>수량 :</td>
							</tr>
						</tbody>
					</table>
				</div>

			</div>
		</div>
		<AppFooter />
	</div>
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
				url: 'http://localhost:8888/api/manager/state',
				headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
				//params: guestbookVo, //get방식 파라미터로 값이 전달
				//data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
				responseType: 'json' //수신타입
			}).then(response => {
				console.log(response); //수신데이타
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