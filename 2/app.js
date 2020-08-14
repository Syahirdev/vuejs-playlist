new Vue({
	el: '#vue-app',
	data: {
		name: 'Syahir',
		job: 'Programmer',
	},
	methods: {
		greet: function (data) {
			return `Good ${data} ${this.name}!`;
		},
	},
});
