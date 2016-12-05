const fs = require('fs');
const yaml = require('js-yaml');
const express = require('express');
const process = require('process');
const child_process = require('child_process');

const {CONF, PORT} = process.env;

const app = express();

const file = fs.readFileSync(`${CONF}`, {encoding: 'utf-8'});
const config = yaml.load(file);

config.forEach(item => {
	app.post(`/${item.url}`, (req, res) => {
		child_process.exec(item.exec);
		res.send('OK');
	});
});

app.listen(PORT);

