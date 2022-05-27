const express = require('express');
const router = express.Router();
const service = require('./service/tic-tac-toe-service');
// @route POST api/tictactoe/ai
// @description send board state and receive ai move
// @access Public
router.post('/ai', (req, res) => {
  const body = req.body;
  const aiMoved = service.aiMove(body);
  res.json(aiMoved);
});

// @route GET api/tictactoe/test
// @description send board state and receive ai move
// @access Public
router.get('/test', (req, res) => {
  res.send('testing');
});




module.exports = { router };