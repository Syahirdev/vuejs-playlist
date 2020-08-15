export default {
	computed: {
		filteredBlogs: function() {
			return this.blogs.filter((blog) => {
				return blog.title.toLowerCase().match(this.search.toLowerCase());
			});
		},
	},
	filters: {
		toUpperCase(value) {
			return value.toUpperCase();
		},
		snippet(value) {
			return value.slice(0, 100) + '...';
		},
	},
};

// just some random info got from comments
// export default = {hello() {alert('hello'}}

// in other file

// import HelloWorld from '../../HelloWorld'
// HelloWorld.hello()
