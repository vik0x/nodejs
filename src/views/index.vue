<template>
	<div class="">
		<div class="row">
			<div class="col">
				<div class="h1">
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
		<div class="row mt-5">
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
					class="text-muted"
					>
					<i class="fas fa-th-large" />
				</b-button>
				<b-button
					variant="transparent"
					class="text-white"
					>
					<i class="fas fa-list" />
				</b-button>
			</div>
		</div>
		<div class="row mt-5">
			<div class="col-2">
				<img
					src="https://via.placeholder.com/100x100.png"
					class="rounded mx-auto d-block"
					>
				<div class="font-weight-bold">
					Title
				</div>
				<div><span class="font-weight-light">{{ translate('playcount') }}:</span> 10,000</div>
			</div>
		</div>
	</div>
</template>
<script></script>
