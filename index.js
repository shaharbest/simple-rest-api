require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(require('cors')());
app.use(express.json());

app.get('/ping', (req, res) => {
	res.send('pong');
});

app.listen(port, () => {
	console.log('listen to port', port);
});
