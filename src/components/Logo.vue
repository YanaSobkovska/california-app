<script>
export default {
	name: "Logo",
};
</script>

<template>
	<div class="logo">
		<img
			width="170px"
			height="21px"
			@click="$router.push('/')"
			src="../assets/icon/logo.svg"
			alt="logo"
		/>
	</div>
</template>

<style lang="scss" scoped>
.logo{
	img{
		cursor: pointer;
	}
}
</style>
