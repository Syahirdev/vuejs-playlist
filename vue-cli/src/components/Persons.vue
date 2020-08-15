<template>
	<div id="persons">
		<ul>
			<li :key="person.id" v-for="person in persons" @click="person.show = !person.show">
				<h2>{{ person.name }}</h2>
				<h3 v-show="person.show">{{ person.speciality }}</h3>
			</li>
		</ul>
		<button @click="deletePerson">Delete!</button>
	</div>
</template>
<script>
export default {
	props: {
		persons: {
			type: Array,
			required: true,
		},
	}, //receive the data from Parent App.vue
	data() {
		return {};
	},
	methods: {
		deletePerson: function() {
			this.persons.pop();
		},
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
