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
};
</script>

<style></style>
