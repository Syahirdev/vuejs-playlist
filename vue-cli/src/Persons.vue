<template>
	<ul>
		<li v-for="person in persons" :key="person.id">{{ person }}</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			persons: ['Syahir', 'Syazmi', 'Syakira'],
		};
	},
};
</script>

<style></style>
