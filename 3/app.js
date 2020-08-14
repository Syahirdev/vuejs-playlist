new Vue({
	el: '#vue-app',
	data: {
		name: 'Syahir',
		job: 'Programmer',
		website: 'http://www.google.com/',
		websiteTag: '<a href="http://www.google.com/">Website Tag a href!</a>',
	},
	methods: {
		greet: function (data) {
			return `Good ${data} ${this.name}!`;
		},
	},
});
