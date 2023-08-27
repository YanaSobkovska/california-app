<template>
<header>
	<div class="container">
		<div class="header-wrap">
			<div class="logo-block">
				 <img @click="$router.push('/')" src="../assets/icon/logo.svg" alt="logo">
			</div>
			<nav class="navbar">
				<div class="navbar-item"></div>
			</nav>
		</div>
	</div>
</header>
</template>

<script>
export default {
	name: 'HeaderComponent',
	data() {
		return {
			navItems: [
				{title:'All Products'}
			]
		}
	}
}
</script>

<style lang="scss" scoped>

</style>