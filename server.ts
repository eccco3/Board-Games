const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

import { router as tictactoe } from './core/apis/tic-tac-toe/tic-tac-toe-api';
import { router as menu } from './core/apis/menu/menu-api';

const PORT = 8000;
const server = express();


server.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send('error');
    console.log('error', err);
    next();
});
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/api/tictactoe', tictactoe);
server.use('/api/menu', menu);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// server.use(morgan('combined'));
