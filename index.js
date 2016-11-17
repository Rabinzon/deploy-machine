const express = require('express');
const child_process = require('child_process');
const conf = require('./conf.json');
const app = express();

app.get(`/${process.env.URL}`, (req, res) => {
	child_process.exec(process.env.COMMAND);
	res.send('OK');
});

app.listen(3314);