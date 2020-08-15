<template>
	<div>
		<app-header :title="title" @changeTitle="updateTitle($event)"></app-header>
		<app-person :persons="persons"></app-person>
		<app-footer :title="title"></app-footer>
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
		return {
			persons: [
				{ name: 'Syahir', specialty: 'Vue Components', show: false },
				{ name: 'Syazmi', specialty: 'HTML Wizardry', show: false },
				{ name: 'Syakira', specialty: 'Click Events', show: false },
				{ name: 'Abu', specialty: 'Conditionals', show: false },
				{ name: 'Ali', specialty: 'Webpack', show: false },
				{ name: 'Ahmad', specialty: 'Data Diggin', show: false },
			],
			title: 'Primitive Title?!',
		};
	},
	methods: {
		updateTitle: function(event) {
			this.title = event;
		},
	},
};
</script>

<style></style>
