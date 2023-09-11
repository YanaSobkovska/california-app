<script>
export default {
	name: "Banner",
	data() {
		return {};
	},
};
</script>

<template>
	<div class='banner-wrapper'>
		<v-row align-content="start" class="d-flex flex-column pl-4 pr-4 pr-md-0 pl-md-10 flex-md-row " no-gutters>
			<v-col cols="12" class='d-flex col-md-6  align-start justify-center flex-column banner-item '>
				<div class="banner-title">
					<h1>
						The new phones are
						here take a look.
					</h1>
					<p class="subtitle">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
						in est
						dui, aliquam, tempor. Faucibus morbi turpis.
					</p>
				</div>
				<div class="banner-button btn mb-8 ">
					<a href="#">Explore</a>
				</div>
			</v-col>
			<v-col cols="12" class="col-md-6  d-flex align-end justify-end">
				<img class="banner-img" src="../assets/svg/banner-img.svg" alt="" />
			</v-col>
		</v-row>
	</div>
</template>

<style lang="scss" scoped>
.banner-wrapper {
	width: 100%;
	background-color: #dce5e2;
	border-radius: 32px;

	.banner-item {
		@media (max-width: 960px) {
			padding-top: 5%;
			padding-bottom: 5%;
		}

		.banner-title {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding-bottom: 3%;
		}

		.banner-button {
			padding: 15px 0;
			height: 35px;
			width: 170px;
			border: 1px solid #000;
			border-radius: 200px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;

			@media (max-width: 1200px) {
				
			}

			@media (max-width: 960px) {
				width: 150px;
				height: 30px;
			}

			@media (max-width: 600px) {
				width: 80px;
				padding: 4px;
			}

			a {
				color: #000;
				font-size: 18px;
				text-transform: capitalize;

				@media (max-width: 600px) {
					font-size: 14px;
				}
			}

			&:hover {
				box-shadow: 2px 2px 4px #2a2a2ae6;
			}
		}
	}

	.banner-img {
		max-width: 650px;
		width: 100%;
		height: auto;
	}
}
</style>
