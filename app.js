const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hi this is deploy thorough manual review by Pipleline lol !')

app.listen(port);
console.log(`App running on http://localhost:${port}`);
