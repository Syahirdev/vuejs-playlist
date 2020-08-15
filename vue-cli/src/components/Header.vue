<template>
	<header>
		<h1 @click="changeTitle">{{ title }}</h1>
	</header>
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
		return {
			//title: 'Vue App',
		};
	},
	components: {},
	methods: {
		changeTitle: function() {
			this.title = 'Title Changed! Whooo...';
			// this.$emit('changeTitle', this.title);
			bus.$emit('changeTitle', this.title);
		},
	},
};
</script>

<style scoped>
header {
	background: lightcoral;
	padding: 10px;
}
h1 {
	color: #222;
	text-align: center;
}
</style>
