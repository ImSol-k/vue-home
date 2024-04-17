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
                <h3 id="eee">통계</h3>
                <div id="line">
                    <div id="chartContent">
                        <p id="www">금일 판매량 : <span>100</span></p>
                        <p id="www">누적 판매량: <span>100</span></p>
                    </div>

                    <canvas id="chart" ref="MyChart" />
                </div>
            </div>
            <div class="clearfix">

                <div id="pp">
                    <h3>판매량</h3>



                </div>

            </div>
        </div>
        <AppFooter />
    </div>
</template>

<script>
import '@/assets/css/managerJ/main.css'
import "@/assets/css/managerY/productLIst.css"

import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';
import AppHeader from '../../components/AppHeader.vue'
import AppFooter from '../../components/AppFooter.vue'

Chart.register(ChartDataLabels);
export default {
    name: 'ManagerChart',

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
            allbed: "",
            allshopa: "",
            alltable: "",
            allhanger: ""
        }
    },

    plugins: [ChartDataLabels],

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

        createChart() {
            new Chart(this.$refs.MyChart, {

                type: 'doughnut',
                data: {
                    labels: ['총침대', '총쇼파', '총테이블', '옷장'],
                    datasets: [{
                        dataIndex: true,
                        display: true,
                        data: [this.allbed, this.allshopa, this.alltable, this.allhanger],
                        datalabels: {
                            color: '#000000'
                        },
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',

                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',

                        ],
                        borderWidth: 1
                    }],



                },

                options: {
                    responsive: false,
                    plugins: {
                        datalabels: {
                            color: '#000000'
                        },
                        title: {
                            display: true,
                            text: '총 판매비율'
                        },


                    }
                }
            })
        },
        datas() {
            console.log("start")
            this.allbed = 5;
            this.allshopa = 5;
            this.alltable = 3;
            this.allhanger = 2;
            axios({
                method: 'get', // put, post, delete 
                url: 'http://localhost:9090/home/manager/datas',
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
        this.datas()
    },


    mounted() {
        this.createChart(

        )
    },

}
</script>