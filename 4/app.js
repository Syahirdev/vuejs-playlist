new Vue({
	el: '#vue-app',
	data: {
		name: 'Syahir',
		job: 'Programmer',
		age: 23,
		x: 0,
		y: 0,
	},
	methods: {
		add: function (value) {
			this.age += value;
		},
		subtract: function (value) {
			this.age -= value;
		},
		updateXY: function (event) {
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
	},
});
