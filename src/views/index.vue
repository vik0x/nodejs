<template>
	<div class="wrapper">
		<background
			:image="backgroundImage"
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
						v-model="artistName"
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
						v-for="(item, index) in artists"
						:key="index"
						class="my-2"
						:is-active="index===activeArtist"
						:title="item.name"
						:image="getImageBySize(item.image, sizes.LARGE)"
						:playcount="item.playcount"
						@setActive="setActive(index)"
						/>
				</div>
			</template>
			<template v-else>
				<list-item
					v-for="(item, index) in artists"
					:key="index"
					:is-active="index===activeArtist"
					:title="item.name"
					:image="getImageBySize(item.image, sizes.LARGE)"
					:playcount="item.playcount"
					:listeners="item.listeners"
					@setActive="setActive(index)"
					/>
			</template>
		</div>
	</div>
</template>
<script>
import { SIZES as sizes } from '@/settings/Artists';
import GridItem from '@/components/GridItem.vue';
import ListItem from '@/components/ListItem.vue';
import Background from '@/components/Background.vue';
import ArtistsClass from '@/util/Artists.js';

export default {
	name: 'Main',
	components: { GridItem, ListItem, Background },
	data() {
		return {
			artistName: '',
			showGrid: false,
			activeArtist: '',
			data: new ArtistsClass(),
			sizes,
			timer: '',
		};
	},
	computed: {
		artists() {
			try {
				try {
					return this.data.response.data.results.artistmatches.artist;
				} catch (er) {
					return this.data.response.data.artists.artist;
				}
			} catch (error) {
				return [];
			}
		},
		backgroundImage() {
			try {
				const artist = this.artists[this.activeArtist];
				return this.getImageBySize(artist.image, this.sizes.MEGA);
			} catch (error) {
				return require('@/assets/default.jpg'); // eslint-disable-line global-require
			}
		},
	},
	watch: {
		artistName: function an() {
			this.searchArtist();
		}
	},
	created() {
		this.data.getList();
	},
	methods: {
		getImageBySize(image, size) {
			return image.find(item => item.size === size)['#text'];
		},

		searchArtist() {
			if (this.timer) {
				clearTimeout(this.timer);
			}
			this.timer = setTimeout(() => {
				if (this.artistName.length < 1) {
					this.data.getList();
				}
				else {
					this.data.search(this.artistName);
				}
			}, 500)
		},

		setActive(index) {
			this.activeArtist = index;
		},
	},
};
</script>
