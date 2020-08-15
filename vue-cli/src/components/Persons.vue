<template>
	<div id="ninjas">
		<ul>
			<li v-for="person in persons" :key="person.id" @click="person.show = !person.show">
				<h2>{{ person.name }}</h2>
				<h3 v-show="person.show">{{ person.specialty }}</h3>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			persons: [
				{ name: 'Syahir', specialty: 'Vue Components', show: false },
				{ name: 'Syazmi', specialty: 'HTML Wizardry', show: false },
				{ name: 'Syakira', specialty: 'Click Events', show: false },
				{ name: 'Abu', specialty: 'Conditionals', show: false },
				{ name: 'Ali', specialty: 'Webpack', show: false },
				{ name: 'Ahmad', specialty: 'Data Diggin', show: false },
			],
		};
	},
};
</script>

<style scoped>
#persons {
	width: 100%;
	max-width: 1200px;
	margin: 40px auto;
	padding: 0 20px;
	box-sizing: border-box;
}
ul {
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
}
li {
	flex-grow: 1;
	flex-basis: 300px;
	text-align: center;
	padding: 30px;
	border: 1px solid #222;
	margin: 10px;
}
</style>
