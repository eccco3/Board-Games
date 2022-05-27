const aiMove = async (body) => {
    const newBoard = body.board;
    newBoard.splice(0, 1, ['X', null, null]);
    return newBoard;
}

module.exports = { aiMove }