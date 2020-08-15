/* eslint-disable no-unused-vars */
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes';

Vue.use(VueRouter);
const router = new VueRouter({
	routes: Routes,
});

// // import axios from 'axios';
// const axios = require('axios').default;
// Vue.prototype.$http = axios;

//fires when the directives is bound to the element e.g. bind to h2 at showBlog.vue
Vue.directive('rainbow', {
	bind(el, binding, vnode) {
		el.style.color =
			'#' +
			Math.random()
				.toString()
				.slice(2, 8);
	},
});

Vue.directive('theme', {
	bind(el, binding, vnode) {
		if (binding.value == 'light') {
			el.style.background = 'white';
		} else {
			el.style.background = '#1a1a1a';
			el.style.color = 'white';
		}
		if (binding.arg == 'column') {
			//el.style.background = '#ddd';
			el.style.padding = '20px';
		}
	},
});

// //Filters
Vue.filter('toUpperCase', (value) => value.toUpperCase());
Vue.filter('snippet', (value) => value.slice(0, 100) + '...');

new Vue({
	render: (h) => h(App),
	router: router,
}).$mount('#app');
