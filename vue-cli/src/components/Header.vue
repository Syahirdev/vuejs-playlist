<template>
	<header>
		<h1 @click="changeTitle">{{ title }}</h1>
	</header>
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
			//title: 'Vue App!',
		};
	},
	methods: {
		changeTitle: function() {
			this.title = 'Changed the primitive title :O';
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
