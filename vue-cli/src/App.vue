<template>
	<div>
		<app-header></app-header>
		<app-persons></app-persons>
		<app-footer></app-footer>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Persons from './components/Persons.vue';

export default {
	data() {
		return {};
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
