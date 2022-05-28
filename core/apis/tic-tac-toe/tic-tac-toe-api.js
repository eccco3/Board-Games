const express = require('express');
const router = express.Router();
const service = require('./service/tic-tac-toe-service');
// @route POST api/tictactoe/ai
// @description send board state and receive ai move
// @access Public
router.post('/ai', (req, res) => {
    console.log(JSON.stringify(req.body));
    const aiMoved = service.aiMove(req.body.board);

    res.json(aiMoved);
});

// @route GET api/tictactoe/test
// @description send board state and receive ai move
// @access Public
router.get('/test', (req, res) => {
    res.send('testing');
});

module.exports = { router };
