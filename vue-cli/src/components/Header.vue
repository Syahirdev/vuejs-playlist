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
	components: {},
	data() {
		return {
			//title: 'Vue App!',
		};
	},
	methods: {
		changeTitle: function() {
			// this.$emit('changeTitle', 'Changed the primitive title :O');
			this.title = 'Changed from Bus Event!';
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
