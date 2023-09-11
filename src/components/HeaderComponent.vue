<script>
import Logo from "@/components/Logo.vue";
import Navigation from "@/components/Navigation.vue";
import HeaderButton from '@/components/HeaderButton.vue'

export default {
	name: "HeaderComponent",
	components: {
		Logo,
		Navigation,
		HeaderButton
	},
	data() {
		return {
			isOpenMenu: false,
			isOpenInput: false,
		};
	},
};
</script>

<template>
	<div class="container
	">
		<v-row class="header-wrap">
			<v-col sm="9" md="3" lg="2" class="d-flex justify-sm-start align-center">
				<Logo />
			</v-col>
			<v-col class="d-none d-md-block" md="7" lg="9" align-self="center">
				<Navigation />
			</v-col>
			<v-col class="btns d-none d-md-block" md="2" lg="1" align-self="center">
				<HeaderButton />
			</v-col>
			<v-col class="d-flex justify-end d-md-none align-center " cols="3">
				<div class="burger-menu cursor-p" @click="isOpenMenu = true">
					<v-icon size="40">mdi-menu</v-icon>
				</div>
			</v-col>
		</v-row>
		<v-navigation-drawer class='sidebar' v-model="isOpenMenu" absolute width="50%" right>
			<div class="button-close cursor-p" @click="isOpenMenu = false"><v-icon size="40">mdi mdi-window-close</v-icon>
			</div>
			<Navigation />
		</v-navigation-drawer>
	</div>
</template>

<style lang="scss" scoped>
$text-color: #000;

.header-wrap {
	padding: 18px 0;
	text-align: center;
}
.sidebar{
	z-index: 999;
	@media(min-width:960px){
		display: none;
	}
}


</style>
