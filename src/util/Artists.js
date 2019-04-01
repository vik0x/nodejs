import { api } from '@/settings/Axios';

class Artists {
	constructor() {
		this.loading = false;
		this.response = {};
		this.errors = [];
	}

	getList() {
		this.loading = true;
		return api.get('get-artists').then((response) => {
			this.response = response;
		}).catch((error) => {
			this.errors = error;
		}).finally(() => {
			this.loading = false;
		});
	}

	search(query) {
		this.loading = true;
		return api.get(`search-artists?q=${query}`).then((response) => {
			this.response = response;
		}).catch((error) => {
			this.errors = error;
		}).finally(() => {
			this.loading = false;
		});
	}
}

export default Artists;
