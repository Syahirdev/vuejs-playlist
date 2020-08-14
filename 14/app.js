var data = {
	name: 'Yoshi',
};

Vue.component('greeting', {
	template: '<p>Hey there, I am {{name}}. <button @click="changeName">Change Name!</button></p>',
	data: function () {
		return {
			name: 'Syahir',
		};
	},
	methods: {
		changeName: function () {
			this.name = 'Syazmi Syakira';
		},
	},
});

var one = new Vue({
	el: '#vue-app-one',
	data: {
		title: 'Vue App One',
	},
	methods: {},
	computed: {},
});

var two = new Vue({
	el: '#vue-app-two',
	data: {
		title: 'Vue App Two',
	},
	methods: {},
	computed: {},
});
