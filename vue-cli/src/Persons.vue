<template>
	<div>
		<h1>List of My Friends</h1>
		<ul>
			<li v-for="person in persons" :key="person.id">{{ person }}</li>
		</ul>
	</div>
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

<style>
h1 {
	color: goldenrod;
}
</style>
