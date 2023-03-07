//full stack requests and sends - callbacks

const express = require('express');
const { readFile } = require('fs').promises;

const hostname = '198.71.48.7'
const port = 80;

const app = express();

app.get('/', async (request, response) => {
    response.send( await readFile('./index.html', 'utf8'))
});

app.listen(port, hostname, () => {
	console.log('Server Running at opticspc.com')
});
