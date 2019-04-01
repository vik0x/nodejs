const express = require('express');

const router = express.Router();
const { api } = require('../config/axios');

/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('index', { title: 'Express' });
});

router.get('/v1/get-artists', (req, res, next) => {
	const artists = api.get(`?method=chart.gettopartists&api_key=${process.env.API_KEY}&format=json&limit=${process.env.LIMIT}`)
		.then((response) => {
			res.setHeader('Content-Type', 'application/json');
			console.log(response);
			res.end(JSON.stringify(response.data));
		})
		.catch(error => console.log(error));
});

module.exports = router;
