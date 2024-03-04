require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, 'public');

app.use(require('cors')());
app.use(express.json());
app.use(express.static(publicPath));

app.get('/ping', (req, res) => {
	res.send('pong');
});

app.listen(port, () => {
	console.log('listen to port', port);
});
