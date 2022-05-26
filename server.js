const express = require('express');

const PORT = 8000;

const server = express();

server.get('/', (req, res) => res.send('Hello world!'));

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));