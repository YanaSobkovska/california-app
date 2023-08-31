<script>
import Banner from "./Banner.vue";

export default {
	name: "Carousel",
	components: { Banner },
	data() {
		return {
			components: [
				{
					component: "Banner",
				},
				{
					component: "Banner",
				},
				{
					component: "Banner",
				},
				{
					component: "Banner",
				},
			],
		};
	},
};
</script>

<template>
	<v-carousel
		hide-delimiters="false"
		continuous
		cycle
		class="mx-auto"
		max-height="550px"
	>
		<v-carousel-item
			v-for="(component, i) in components"
			:key="i"
			transition="slide-x-transition"
			reverse-transition="reverse-slide-x-transition"
		>
			<component :is="component.component" />
		</v-carousel-item>
	</v-carousel>
</template>

<style lang="scss" scoped></style>
