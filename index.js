const express = require('express');
const child_process = require('child_process');
const app = express();

app.post(`/${process.env.URL}`, (req, res) => {
	child_process.exec(process.env.COMMAND);
	res.send('OK');
});

app.listen(3314);