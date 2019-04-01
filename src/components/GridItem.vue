<template>
	<div
		class="col-6 col-md-2 rounded text-center mx-1 py-2"
		:class="hover || isActive ? 'active text-white' : 'text-muted'"
		@mouseover="hover = true"
		@mouseout="hover = false"
		@click="setActive()"
		>
		<img
			:src="image"
			class="rounded mx-auto img-thumbnail p-0"
			>
		<div class="font-weight-bold mt-2">
			{{ title }}
		</div>
		<div class="mt-1">
			<span class="font-weight-light">{{ playcountTag }}:</span>
			{{ playcount | separator }}
		</div>
	</div>
</template>
<script>
import { THOUSANDS_SEPARATOR } from '@/settings/Numbers';

export default {
	name: 'GridItem',
	filters: {
		separator: value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, THOUSANDS_SEPARATOR),
	},
	props: {
		title: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		playcount: {
			type: Number,
			default: 0,
		},
		playcountTag: {
			type: String,
			default: 'Playcount',
		},
		isActive: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			hover: false,
		};
	},
	methods: {
		setActive() {
			this.$emit('setActive');
		},
	},
};
</script>

<style scoped>
	img {
		max-width: 100px;
	}
	div.active, div.text-white:hover {
		background: rgba(255,255,255,.7);
	}
</style>
