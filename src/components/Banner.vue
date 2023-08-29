<script>
export default {
	name: "Banner",
	data() {
		return {};
	},
};
</script>

<template>
	<div class="banner-wrapper">
		<div class="banner-title">
			<h1>
				The new phones are here take a look.
			</h1>
			<p class="subtitle">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in
				est dui, aliquam, tempor. Faucibus morbi turpis.
			</p>
			<v-btn class="banner-button">Explore</v-btn>
		</div>
		<div class="banner-img"></div>
	</div>
</template>

<style lang="scss" scoped>
.banner-wrapper {
	background-color: #dce5e2;
	border-radius: 32px;
	height: 400px;
	.banner-title {
	}
	.banner-img {
	}
}
</style>
