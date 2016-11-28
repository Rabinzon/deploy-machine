const fs = require('fs');
const yaml = require('js-yaml');
const express = require('express');
const child_process = require('child_process');

const app = express();
const file = fs.readFileSync(`${process.env.CONF}`, {encoding: 'utf-8'});
const config = yaml.load(file);

config.forEach(item => {
	app.post(`/${item.url}`, (req, res) => {
		child_process.exec(item.exec);
		res.send('OK');
	});
});

app.listen(3314);