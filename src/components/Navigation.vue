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
	<nav
		class="navigation d-flex flex-column flex-md-row align-center justify-lg-center justify-md-center"
		cols="5"
	>
		<div
			v-for="(item, index) in navigationItems"
			:key="index"
			class="navigation-item"
		>
			<div v-if="!item.dropdownItems">
				<a href="">{{ item.title }}</a>
			</div>
			<div v-else class="item-dropdown">
				<v-menu
					open-on-hover
					bottom
					offset-y
					origin="center center"
					transition="scale-transition"
				>
					<template v-slot:activator="{ on, attrs }">
						<div v-bind="attrs" v-on="on">
							<a href="">{{ item.title }}</a>
							<img
								class="solutions-icon"
								src="../assets/icon/arrow_bottom.svg"
								alt="arrow bottom"
							/>
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
</template>

<style lang="scss" scoped>
.navigation-item {
	text-align: center;
	padding: 0 5px;
	&:not(:last-child) {
		margin-right: 30px;
	}
	a {
		color: #000;
		font-family: Inter, sans-serif;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 16.8px; /* 120% */
		text-transform: uppercase;
	}
	.solutions-icon {
		padding: 0 5px;
	}

	&:hover {
		box-shadow: 2px 2px 4px #82828280;
		border-radius: 10px;
	}

	@media (max-width: 960px) {
		&:not(:last-child) {
			margin-right: 0;
			margin-bottom: 30px;
		}
	}
}
</style>
