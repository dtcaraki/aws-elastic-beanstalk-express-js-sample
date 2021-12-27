const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hi this is my first aws sample sourcecode commit'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
