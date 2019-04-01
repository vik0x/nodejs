<template>
	<div class="col-6 col-md-2">
		<img
			:src="image"
			class="rounded mx-auto img-thumbnail p-0"
			>
		<div class="font-weight-bold text-muted mt-2">
			{{ title }}
		</div>
		<div class="text-muted mt-1">
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
	},
};
</script>

<style scoped>
	img {
		max-width: 100px;
	}
</style>
