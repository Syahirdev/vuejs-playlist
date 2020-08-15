<template>
	<div v-theme:column="'light'">
		<!-- <add-blog></add-blog> -->
		<show-blog></show-blog>
	</div>
</template>

<script>
// import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
export default {
	data() {
		return {};
	},
	components: {
		// 'add-blog': addBlog,
		'show-blog': showBlog,
	},
	methods: {},
	directives: {
		/* eslint-disable no-unused-vars */
		theme: {
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
		},
	},
};
</script>

<style></style>
