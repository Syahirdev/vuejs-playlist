<template>
	<div id="add-blog">
		<h2>Add a New Blog Post</h2>

		<form action="" v-if="!submitted">
			<label for="">Blog Title:</label>
			<input type="text" v-model.lazy="blog.title" required />

			<label for="">Blog Content:</label>
			<textarea v-model="blog.content"></textarea>

			<label for="">Author:</label>
			<select v-model="blog.author">
				<option v-for="author in authors" :key="author.id">{{ author }}</option>
			</select>

			<label for="">Categories</label>
			<div id="checkboxes">
				<input type="checkbox" value="Invisibility" v-model="blog.categories" />
				<label for="">Invisibility</label><br />

				<input type="checkbox" value="Immortal" v-model="blog.categories" />
				<label for="">Immortal</label><br />

				<input type="checkbox" value="Sexy" v-model="blog.categories" />
				<label for="">Sexy</label><br />

				<input type="checkbox" value="Speed" v-model="blog.categories" />
				<label for="">Speed</label><br />

				<input type="checkbox" value="Element Master" v-model="blog.categories" />
				<label for="">Element Master</label>
				<br />
			</div>
			<button @click.prevent="post">Add Blog</button>
		</form>
		<div id="container" style="background: seagreen; color:#fff" v-if="submitted">
			<h3>Thanks for adding new blog!</h3>
			<p>Have a nice day! :D</p>
		</div>

		<div id="preview">
			<h3>Preview Blog</h3>

			<div id="container">
				<p>Blog Title:</p>
				<p>` {{ blog.title }}</p>
			</div>
			<div id="container">
				<p>Blog Content:</p>
				<p>` {{ blog.content }}</p>
			</div>

			<div id="container">
				<p>Author:</p>
				<p>` {{ blog.author }}</p>
			</div>

			<div id="container">
				<p>Categories:</p>
				<ul>
					<li v-for="category in blog.categories" :key="category.id">{{ category }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			blog: {
				title: '',
				content: '',
				categories: [],
				author: '',
			},
			authors: ['Syahir', 'Syazmi', 'Syakira', '<3'],
			submitted: false,
		};
	},
	components: {},
	methods: {
		post: function() {
			axios
				.post('https://jsonplaceholder.typicode.com/posts', {
					title: this.blog.title,
					body: this.blog.content,
					userId: 1,
				})
				.then((data) => {
					console.log(data);
					this.submitted = true;
				});
		},
	},
};
</script>

<style>
#add-blog * {
	box-sizing: border-box;
}
#add-blog {
	margin: 20px auto;
	max-width: 500px;
}
label {
	display: block;
	margin: 20px 0 10px;
}
input[type='text'],
textarea {
	display: block;
	width: 100%;
	padding: 8px;
}
#preview {
	padding: 10px 20px;
	border: 1px dotted #ccc;
	border-radius: 10px;
	margin: 30px 0;
}
h3 {
	margin-top: 10px;
}
#checkboxes input {
	display: inline-block;
	margin-right: 10px;
}
#checkboxes label {
	display: inline-block;
	margin-right: 10px;
}
#container {
	border: 1px dotted #aaa;
	border-radius: 10px;
	padding: 10px;
	margin-bottom: 10px;
}
#container p {
	margin: 5px;
}
</style>
