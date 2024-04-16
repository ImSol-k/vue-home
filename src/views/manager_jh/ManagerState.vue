<template>

	<AppHeader />
	<div class="clearfix" id="full">
		<div id="contentNav">
			<h2 id="aside">관리자 항목</h2>
			<h2>
				<RouterLink to="/">주문관리</RouterLink>
			</h2>
			<h2>
				<RouterLink to="/">상품관리</RouterLink>
			</h2>
		</div>

		<div id="contentMain">
			<div id="graph">
				<h3 id="eee">주문현황</h3>

			</div>
			<div class="clearfix">

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



import AppHeader from '../../components/AppHeader.vue'
import AppFooter from '../../components/AppFooter.vue'


export default {


	components: {
		AppHeader,
		AppFooter
	},

	methods: {

	}

}





</script>