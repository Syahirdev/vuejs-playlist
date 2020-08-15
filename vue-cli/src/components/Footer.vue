<template>
	<footer>
		<p>{{ copyright }}</p>
	</footer>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			copyright: 'Copyright 2020 Syahir -Dev',
		};
	},
};
</script>

<style scoped>
footer {
	background: #222;
	padding: 6px;
}

p {
	color: lightcoral;
	text-align: center;
}
</style>
