<template>
	<div class="wrapper">
		<background
			image="https://http2.mlstatic.com/motocicleta-suzuki-gixxer-gixxer-bitono-2019-nuevas-D_NQ_NP_828068-MLM29518285312_022019-F.webp"
			:z-index="-1"
			/>
		<background />
		<div class="row">
			<div class="col">
				<div class="h1 text-white">
					{{ translate('top_artists') }}
				</div>
			</div>
			<div class="col d-flex">
				<b-nav
					vertical
					class="ml-auto my-auto"
					>
					<b-nav-item>{{ translate('logout') }}</b-nav-item>
				</b-nav>
			</div>
		</div>
		<div class="row my-5">
			<div class="col">
				<div class="form-group">
					<input
						class="form-control form-control-lg bg-transparent border-0 mb-0"
						:placeholder="translate('search_artists')"
						>
				</div>
			</div>
			<div class="col-auto">
				<b-button
					variant="transparent"
					:class="showGrid ? 'text-white' : 'text-muted'"
					@click="showGrid=true"
					>
					<i class="fas fa-th-large" />
				</b-button>
				<b-button
					variant="transparent"
					:class="showGrid ? 'text-muted' : 'text-white'"
					@click="showGrid=false"
					>
					<i class="fas fa-list" />
				</b-button>
			</div>
		</div>
		<div class="container-fluid">
			<template v-if="showGrid">
				<div class="row">
					<grid-item
						class="my-2"
						title="Title"
						:playcount="10000"
						image="https://via.placeholder.com/400x400.png"
						/>
				</div>
			</template>
			<template v-else>
				<list-item
					title="Title"
					image="https://via.placeholder.com/100x100.png"
					:playcount="10000"
					:listeners="1209878"
					/>
			</template>
		</div>
	</div>
</template>
<script>
import GridItem from '@/components/GridItem.vue';
import ListItem from '@/components/ListItem.vue';
import Background from '@/components/Background.vue';

export default {
	name: 'Main',
	components: { GridItem, ListItem, Background },
	data() {
		return {
			showGrid: false,
		};
	},
};
</script>
