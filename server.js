const PORT = 5000;
const axios = require('axios').default;
const express = require('express');
const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(cors());

app.get('/flights', (req, res) => {
	const options = {
		method: 'GET',
		url: 'https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/Arrivals',
		headers: {
			'X-RapidAPI-Key': process.env.RAPID_API_KEY,
			'X-RapidAPI-Host': 'madrid-barajas-airport-flights.p.rapidapi.com',
		},
	};

	axios
		.request(options)
		.then(function (response) {
			console.log(response.data);
			res.json(response.data.slice(0, 6));
		})
		.catch(function (error) {
			console.error(error);
		});
});

app.listen(PORT, console.log('running on port Number', +PORT));
