<template>
	<div id="show-blogs">
		<h1>All Blog Articles</h1>
		<div v-for="blog in blogs" :key="blog.id" class="single-blog">
			<h2>{{ blog.title }}</h2>
			<article>{{ blog.body }}</article>
		</div>
	</div>
</template>

<script>
const axios = require('axios');

export default {
	data() {
		return {
			blogs: [],
		};
	},
	components: {},
	methods: {},
	created() {
		axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
			this.blogs = response.data.slice(0, 10);
		});
	},
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
	background: #eee;
	border: 1px dotted #aaa;
	border-radius: 15px;
}
</style>
