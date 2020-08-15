<template>
	<footer>
		<p>{{ copyright }} {{ title }}</p>
	</footer>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
		},
	},
	components: {},
	data() {
		return {
			copyright: 'Copyright 2020 Syahir -Dev | ',
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
