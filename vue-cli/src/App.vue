<template>
	<div>
		<app-header></app-header>
		<app-person></app-person>
		<app-footer></app-footer>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Person from './components/Persons.vue';
export default {
	components: {
		'app-header': Header,
		'app-footer': Footer,
		'app-person': Person,
	},
	data() {
		return {};
	},
};
</script>

<style></style>
