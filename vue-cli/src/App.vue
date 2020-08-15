<template>
	<div>
		<app-header></app-header>
		<app-persons :persons="persons"></app-persons
		><!--v-bind data to props ( :name of var in props="Array of data from parent" )-->
		<app-footer></app-footer>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Persons from './components/Persons.vue';

export default {
	data() {
		return {
			persons: [
				{ name: 'Syahir', speciality: 'Vue Components', show: false },
				{ name: 'Syazmi', speciality: 'HTML Wizardry', show: false },
				{ name: 'Syakira', speciality: 'Click Events', show: false },
				{ name: 'Ali', speciality: 'Conditionals', show: false },
				{ name: 'Abu', speciality: 'Webpack', show: false },
				{ name: 'Ahmad', speciality: 'Data Diggin', show: false },
			],
		};
	},
	components: {
		'app-header': Header,
		'app-footer': Footer,
		'app-persons': Persons,
	},
	methods: {},
};
</script>

<style scoped>
body {
	margin: 0;
	font-family: 'Nunito SemiBold';
}
</style>
