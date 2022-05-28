const express = require('express');
import {
    aiMove,
    playerMove,
    Board,
    Player,
    Cell,
} from './service/tic-tac-toe-service';

export const router = express.Router();

// @route POST api/tictactoe/ai
// @description send board state and receive ai move
// @access Public
router.post('/ai', (req, res) => {
    const aiMoved = aiMove({ board: req.body.board, player: req.body.turn });

    res.json(aiMoved);
});

// @route POST api/tictactoe/player
// @description attempt to make a move
// @access Public
router.post('/move', (req, response) =>
    playerMove({
        board: req.body.board as Board,
        player: req.body.turn as Player,
        cell: req.body.cell as Cell,
    })
        .then((resolve) => response.json(resolve))
        .catch((err) => {
            console.log('Error:', err);
            response.json({ errorMessage: 'Cannot make this move.' });
        }),
);

// @route GET api/tictactoe/test
// @description send board state and receive ai move
// @access Public
router.get('/test', (req, res) => {
    res.send('testing');
});
