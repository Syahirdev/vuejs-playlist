import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;

// // import axios from 'axios';
// const axios = require('axios').default;
// Vue.prototype.$http = axios;

/* eslint-disable no-unused-vars */
Vue.directive('rainbow', {
	//fires when the directives is bound to the element e.g. bind to h2 at showBlog.vue
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
/* eslint-disable no-unused-vars */

new Vue({
	render: (h) => h(App),
}).$mount('#app');
