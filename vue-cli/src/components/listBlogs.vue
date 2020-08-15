<template>
	<div id="show-blogs">
		<h1>All Blog Articles</h1>
		<input type="text" v-model="search" placeholder="Search..." />
		<div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
			<h2 v-rainbow>{{ blog.title | toUpperCase }}</h2>
			<article>{{ blog.body | snippet }}</article>
		</div>
	</div>
</template>

<script>
const axios = require('axios');
import searchMixin from '../mixins/searchMixin.js';

export default {
	data() {
		return {
			blogs: [],
			search: '',
		};
	},
	components: {},
	methods: {},
	created() {
		axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
			this.blogs = response.data.slice(0, 10);
		});
	},
	computed: {},
	filters: {},
	directives: {
		/* eslint-disable no-unused-vars */
		rainbow: {
			bind(el, binding, vnode) {
				el.style.color =
					'#' +
					Math.random()
						.toString()
						.slice(2, 8);
			},
		},
	},
	mixins: [searchMixin],
};
</script>

<style>
#show-blogs {
	max-width: 800px;
	margin: 0px auto;
}
.single-blog {
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	/* background: #eee; */
	border: 1px dotted #aaa;
	border-radius: 15px;
}
</style>
