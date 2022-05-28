import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './tic-tac-toe.scss';

import { Board } from '../../common/board/board';
import { GameLayout } from '../../common/game-layout/game-layout';

export const TicTacToeRoute = () => {
    const [cells, setCells] = useState(
        new Array(3).fill(0).map((row) => new Array(3).fill({ content: null })),
    );
    const [response, setResponse] = useState<any>(null);
    useEffect(() => {
        if (response) {
            setCells(response);
        }
    }, [response]);

    const getAIMove = () => {
        axios
            .post('http://localhost:8000/api/tictactoe/ai', cells)
            .then((res) => {
                console.log("response", res);
                setResponse(res.data);
            })
            .catch((err) => {
                console.log('Error from getAiMove', err);
            });
    };

    return (
        <div className="tic-tac-toe-route">
            <GameLayout />
            <div className="game-area">
                <Board
                    cells={cells}
                    length={3}
                    onClick={(i, j) => {
                        getAIMove();
                    }}
                />
            </div>
        </div>
    );
};
