<template>
	<div id="show-blogs">
		<h1>All Blog Articles</h1>
		<input type="text" v-model="search" placeholder="Search..." />
		<div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
			<router-link :to="'/blog/' + blog.id" style="text-decoration: none;">
				<h2 v-rainbow>{{ blog.title | toUpperCase }}</h2>
			</router-link>
			<article>{{ blog.content | snippet }}</article>
		</div>
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */
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
		axios.get('https://vuejs-aefc9.firebaseio.com/posts.json').then((obj) => {
			var blogsArray = [];

			for (let key in obj.data) {
				obj.data[key].id = key;
				blogsArray.push(obj.data[key]);
			}

			this.blogs = blogsArray;
		});
	},
	computed: {},
	filters: {},
	directives: {
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
