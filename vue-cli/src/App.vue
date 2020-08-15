<template>
	<div v-theme:column="'light'">
		<!-- <add-blog></add-blog> -->
		<show-blogs></show-blogs>
		<list-blogs></list-blogs>
	</div>
</template>

<script>
// import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
export default {
	data() {
		return {};
	},
	components: {
		// 'add-blog': addBlog,
		'show-blogs': showBlogs,
		'list-blogs': listBlogs,
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
