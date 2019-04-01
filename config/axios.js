const axios = require('axios');

const api = axios.create({
	baseURL: process.env.API_URL,
});
// api.interceptors.request.use(function(config){
	// console.log(config);
	// return config;
// });
module.exports.api = api;
