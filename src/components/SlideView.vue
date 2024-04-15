<template>
	<div class="wrapper">
		<Carousel :autoplay="5000" :wrap-around="true">
			<Slide v-for="slide in slides" :key="slide">
				<div class="carousel__item">
					<img class="slideImg" :src="slide" />
				</div>
			</Slide>
			<template #addons>
				<Pagination />
			</template>
		</Carousel>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import home1 from "@/assets/images/main/mainslide/home1.avif";
import home2 from "@/assets/images/main/mainslide/home2.avif";
import home3 from "@/assets/images/main/mainslide/home3.avif";
import home4 from "@/assets/images/main/mainslide/home4.avif";
import home5 from "@/assets/images/main/mainslide/home5.avif";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
	name: "SlideView",
	components: {
		Carousel,
		Slide,
		Pagination,
	},
	data() {
		return {
			slides: [home1, home2, home3, home4, home5]
		};
	},
});
</script>

<style>
.carousel__item {
	color: var(--vc-clr-white);
	font-size: 20px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 0;
}

.carousel__slide {
	padding: 10px;
}

.carousel__prev,
.carousel__next {
	box-sizing: content-box;
}
.slideImg {
	width: 100%;
}
.wrapper {
	margin-top: 3vh;
}
.carousel__pagination{
	display: flex;
	position: relative;
	margin-top : -40px;
	margin-bottom: 50px;
	z-index: 9999;
}
</style>