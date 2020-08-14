var one = new Vue({
	el: '#vue-app-one',
	data: {
		title: 'Vue App One',
	},
	methods: {},
	computed: {
		greet: function () {
			return 'Hello from app one! :D';
		},
	},
});

var two = new Vue({
	el: '#vue-app-two',
	data: {
		title: 'Vue App Two',
	},
	methods: {
		changeTitle: function () {
			one.title = "I've the title!!! HA!HA!HA!";
		},
	},
	computed: {
		greet: function () {
			return 'Hello from app two.. >:(';
		},
	},
});
