<template>
	<footer>
		<p>{{ copyright }} || {{ title }}</p>
	</footer>
</template>

<script>
import { bus } from '../main.js';
export default {
	props: {
		title: {
			type: String,
		},
	},
	data() {
		return { copyright: 'Copyright 2020 by Syahir -Dev' };
	},
	components: {},
	methods: {},
	created() {
		bus.$on('changeTitle', (data) => {
			this.title = data;
		});
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
