<template>
	<div
		class="backgound"
		:style="style"
		/>
</template>
<script>
export default {
	name: 'Backgound',
	props: {
		image: {
			type: String,
			default: '',
		},
		zIndex: {
			type: Number,
			default: -1,
		},
	},
	computed: {
		style() {
			let response = `z-index: ${this.zIndex} !important;`;
			if (this.image.trim() !== '') {
				response = `${response} background-image: url('${this.image}') !important;`;
			}
			return response;
		},
	},
};
</script>
<style scoped>
	.backgound {
		top: 0;
		left: 0;
		position: fixed;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		background-image: radial-gradient(
			rgba(45,0,97,1),
			rgba(45,0,97,0.5)
		);
	}
</style>
