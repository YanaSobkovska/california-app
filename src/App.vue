<template>
	<v-app>
			<header>
				<HeaderComponent />
			</header>
			<v-main>
				<router-view />
			</v-main>
	</v-app>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
	name: "App",
	components: {
		HeaderComponent,
	},
	data() {
		return {};

	},
};
</script>

<style lang='scss'>
body{
	overflow: hidden;
}
</style>
