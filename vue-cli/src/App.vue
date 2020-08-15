<template>
	<div>
		<form-helper>
			<div slot="form-header">
				<h3>This is Form-Header</h3>
				<p>Information about the form, maybe?</p>
			</div>
			<div slot="form-fields">
				<input type="text" placeholder="name" required /><br />
				<input type="password" placeholder="password" required />
			</div>
			<div slot="form-controls">
				<button @click="handleSubmit">Submit</button>
			</div>
		</form-helper>
	</div>
</template>

<script>
import formHelper from './components/formHelper.vue';
export default {
	components: {
		'form-helper': formHelper,
	},
	data() {
		return {
			title: 'Im a dynamic slot title',
		};
	},
	methods: {
		handleSubmit: function() {},
	},
};
</script>

<style></style>
