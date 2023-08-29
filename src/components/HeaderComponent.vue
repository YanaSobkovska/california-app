<script>
import Logo from "@/components/Logo.vue";
import Navigation from "@/components/Navigation.vue";

export default {
	name: "HeaderComponent",
	components: {
		Logo,
		Navigation,
	},
	data() {
		return {
			isOpen: false,
		};
	},
};
</script>

<template>
	<div class="container
	">
		<v-row class="header-wrap">
			<v-col  sm="9" md="3" lg="2" class="d-flex justify-sm-start align-center">
				<Logo />
			</v-col>
			<v-col class="d-none d-md-block" md="7" lg="9" align-self="center">
				<Navigation />
			</v-col>
			<v-col class="btns d-none d-md-block" md="2" lg="1" align-self="center">
				<v-row align-self="center" justify="center">
					<v-col cols="6" class="nav-btn">
						<img src="../assets/icon/search.svg" alt="button search" />
					</v-col>
					<v-col cols="6" class="nav-btn">
						<img src="../assets/icon/basket.svg" alt="button basket" />
					</v-col>
				</v-row>
			</v-col>
			<v-col class="d-flex justify-end d-md-none align-center " cols="3">
				<div class="burger-menu cursor-p" @click="isOpen = true">
					<v-icon size="40">mdi-menu</v-icon>
				</div>
			</v-col>
		</v-row>
		<v-navigation-drawer v-model="isOpen" absolute width="50%" right>
			<div class="button-close cursor-p" @click="isOpen = false"><v-icon size="40">mdi mdi-window-close</v-icon></div>
			<Navigation />
		</v-navigation-drawer>
	</div>
</template>

<style lang="scss" scoped>
$text-color: #000;
.header-wrap {
	padding: 18px 0;
	text-align: center;
	.btns {
		.nav-btn {
			transition: 0.4s;

			&:hover {
				box-shadow: 2px 2px 4px #82828280;
				border-radius: 10px;
			}
		}
	}
}
</style>
