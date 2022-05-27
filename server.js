const express = require('express');
const cors = require('cors');
const tictactoe = require('./core/apis/tic-tac-toe/tic-tac-toe-api');


const PORT = 8000;
const server = express();
server.use(cors());
server.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send('error');
    console.log(err);
    next();
});

server.get('/', (req, res) => res.send('Hello world!'));
server.use('/api/tictactoe', tictactoe.router);


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

