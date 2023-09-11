<script>
export default {
	name: "Navigation",
	data() {
		return {
			navigationItems: [
				{ title: "ALL PRODUCTS" },
				{
					title: "SOLUTIONS",
					dropdownItems: [
						{ title: "item 1", path: "/1" },
						{ title: "item 1", path: "/2" },
						{ title: "item 1", path: "/3" },
					],
				},
				{ title: "ABOUT" },
				{ title: "SUPPORT" },
			],
		};
	},
};
</script>

<template>
	<div class="container">
		<nav class="navigation d-flex flex-column flex-md-row align-center justify-lg-center justify-md-center" cols="5">
			<div v-for="(item, index) in navigationItems" :key="index" class="navigation-item btn">
				<div v-if="!item.dropdownItems">
					<a :data-hover='item.title' href="#">{{ item.title }}</a>
				</div>
				<div v-else class="item-dropdown">
					<v-menu open-on-hover bottom offset-y origin="center center" transition="scale-transition">
						<template v-slot:activator="{ on, attrs }">
							<div v-bind="attrs" v-on="on">
								<a :data-hover='item.title' href="">{{ item.title }}</a>
								<img class="solutions-icon" src="../assets/icon/arrow_bottom.svg" alt="arrow bottom" />
							</div>
						</template>
						<v-list class="dropdown">
							<v-list-item v-for="(el, index) in item.dropdownItems" :key="index">
								<v-list-item-title class="dropdown-item cursor-p" @click="$router.push(el.path)">
									{{ el.title }}
								</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</div>
			</div>
		</nav>
	</div>
</template>

<style lang="scss" scoped>
.navigation-item {
	text-align: center;
	padding: 0 5px;
	display: inline-block;
	-webkit-transition: all 0.35s ease;
	transition: all 0.35s ease;
	overflow: hidden;

	&:not(:last-child) {
		margin-right: 30px;
	}

	a {
		padding: 0.3em 0;
		color: #000;
		font-family: Inter, sans-serif;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 16.8px;
		text-transform: uppercase;

		position: relative;
		overflow: hidden;
		display: inline-block;

		&::after,
		&::before {
			position: absolute;
			-webkit-transition: all 0.35s ease;
			transition: all 0.35s ease;
		}

		&::before {
			bottom: 100%;
			display: block;
			height: 3px;
			width: 100%;
			content: "";
			background-color: #525252;
		}

		&::after {
			padding: 0.3em 0;
			position: absolute;
			bottom: 100%;
			left: 0;
			content: attr(data-hover);
			color: rgb(0, 0, 0);
			white-space: nowrap;
		}

	}

	&:hover a::after,
	&:hover a::before {
		transform: translateY(100%)
	}

	.solutions-icon {
		padding: 0.5em 5px;
	}


	@media (max-width: 960px) {
		&::before {
			content: '';

		}

		&:not(:last-child) {
			margin-right: 0;
			margin-bottom: 30px;
		}
	}
}
</style>
