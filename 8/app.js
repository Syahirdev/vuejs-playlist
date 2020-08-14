new Vue({
	el: '#vue-app',
	data: {
		age: 20,
		a: 0,
		b: 0,
	},
	// methods: {
	// 	addToA: function () {
	// 		console.log('AddToA function executed');
	// 		return this.a + this.age;
	// 	},
	// 	addToB: function () {
	// 		console.log('AddToB function executed');
	// 		return this.b + this.age;
	// 	},
	// },
	computed: {
		addToA: function () {
			console.log('AddToA function executed');
			return this.a + this.age;
		},
		addToB: function () {
			console.log('AddToB function executed');
			return this.b + this.age;
		},
	},
});
