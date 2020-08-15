<template>
	<div id="single-blog">
		<h1>{{ blog.title }}</h1>
		<article>{{ blog.content }}</article>
		<p>Author: {{ blog.author }}</p>
		<ul>
			<li v-for="category in blog.categories" :key="category.id">
				{{ category }}
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			id: this.$route.params.id,
			blog: {},
		};
	},
	created() {
		axios.get(`https://vuejs-aefc9.firebaseio.com/posts/${this.id}.json`).then((resource) => {
			this.blog = resource.data;
		});
	},
};
</script>
