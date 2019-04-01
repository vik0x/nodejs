<template>
	<div
		class="row my-4 rounded"
		:class="hover || isActive ? 'text-muted active' : 'text-white'"
		@mouseover="hover = true"
		@mouseout="hover = false"
		@click="setActive()"
		>
		<div class="col-auto p-2">
			<img
				:src="image"
				class="rounded my-auto img-thumbnail p-0"
				>
		</div>
		<div class="col d-flex">
			<div class="font-weight-bold my-auto mx-3">
				{{ title }}
			</div>
		</div>
		<div class="col d-flex">
			<div class="my-auto">
				<span class="font-weight-light">{{ playcountTag }}:</span>
				{{ playcount | separator }}
			</div>
		</div>
		<div class="col d-flex">
			<div class="my-auto">
				<span class="font-weight-light">{{ listenersTag }}:</span>
				{{ listeners | separator }}
			</div>
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
		listeners: {
			type: Number,
			default: 0,
		},
		playcountTag: {
			type: String,
			default: 'Playcount',
		},
		listenersTag: {
			type: String,
			default: 'Listeners',
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
		max-width: 50px;
	}
	div.row {
		background: rgba(255,255,255,.4);
	}
	div.active, div.row:hover {
		background: rgba(255,255,255,.7);
	}
</style>
