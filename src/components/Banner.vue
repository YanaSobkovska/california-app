<script>
export default {
	name: "Banner",
	data() {
		return {};
	},
};
</script>

<template>
	<v-row align-content="end" class="banner-wrapper" no-gutters>
		<v-col cols="7">
			<div class="banner-title">
				<h1>
					The new phones are <br />
					here take a look.
				</h1>
				<p class="subtitle">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
					in est <br />
					dui, aliquam, tempor. Faucibus morbi turpis.
				</p>
				<div class="banner-button btn">
					<a href="#">Explore</a>
				</div>
			</div>
		</v-col>
		<v-col cols="5" class="align-end d-flex">
			<img class="banner-img" src="../assets/svg/banner-img.svg" alt="" />
		</v-col>
	</v-row>
</template>

<style lang="scss" scoped>
.banner-wrapper {
	max-height: 550px;
	width: 100%;
	background-color: #dce5e2;
	border-radius: 32px;
	padding-left: 5%;
	.banner-title {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		.banner-button {
			padding: 14px 0;
			max-height: 50px;
			max-width: 170px;
			border: 1px solid #000;
			border-radius: 200px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			@media (max-width: 960px) {
				max-width: 140px;
				max-height: 30px;
			}
			@media (max-width: 960px) {
				max-width: 80px;
				max-height: 20px;
				padding: 4px;
			}
			a {
				color: #000;
				font-size: 18px;
				text-transform: capitalize;
				@media (max-width: 960px) {
					font-size: 14px;
			}
			@media (max-width: 600px) {
					font-size: 10px;
			}
			}
			&:hover {
				box-shadow: 2px 2px 4px #2a2a2ae6;
			}
		}
	}
	.banner-img {
		max-width: 647px;
		width: 100%;
	}
}
</style>
