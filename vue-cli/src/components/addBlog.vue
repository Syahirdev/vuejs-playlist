<template>
	<div id="add-blog">
		<h2>Add a New Blog Post</h2>

		<form action="">
			<label for="">Blog Title:</label>
			<input type="text" v-model.lazy="blog.title" required />

			<label for="">Blog Content:</label>
			<textarea v-model="blog.content"></textarea>
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
			</div>
		</form>

		<div id="preview">
			<h3>Preview Blog</h3>

			<p>Blog Title:</p>
			<p>` {{ blog.title }}</p>

			<p>Blog Content:</p>
			<p>` {{ blog.content }}</p>

			<p>Blog Categories:</p>
			<ul>
				<li v-for="category in blog.categories" :key="category.id">{{ category }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			blog: {
				title: '',
				content: '',
				categories: [],
			},
		};
	},
	components: {},
	methods: {},
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
</style>
