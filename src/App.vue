<template>
	<v-app>
		<div class="">
			<header>
				<HeaderComponent />
			</header>
			<v-main>
				<router-view />
			</v-main>
		</div>
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
