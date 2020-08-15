<template>
	<div id="app">
		<h1>{{ title }}</h1>
		<persons></persons>
	</div>
</template>

<script>
import Persons from './Persons.vue';

export default {
	components: {
		persons: Persons,
	},
	data() {
		return {
			title: 'My First App!',
		};
	},
};
</script>

<style scoped>
h1 {
	color: purple;
}
</style>
