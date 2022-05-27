import React, { useState } from 'react';

import "./tic-tac-toe.scss";

import { Board } from '../../common/board/board';
import { GameLayout } from '../../common/game-layout/game-layout';
import { useEffect } from 'react';
import axios from 'axios';

export const TicTacToeRoute = () => {
    const [state, setState] = useState(new Array(3).fill(0).map(row => new Array(3).fill({content: 'X'})));
    const [response, setResponse] = useState<any>(null);

    useEffect(() => {
        console.log("useEffect", response);
        if (response) {
            setState(response?.data?.board);
        }
    }, [response]);

    const getAIMove = () => {
        console.log("getAIMove");
        axios.post('http://localhost:8000/api/tictactoe/ai', state)
             .then(res => {
                 console.log("post " + JSON.stringify(res.data));
                 setResponse(res.data);
             })
             .catch(err => {
                 console.log("Error from getAiMove");
             });
    }

    return (
        <div className="tic-tac-toe-route">
            <GameLayout />
            <div className="game-area">
                <Board 
                    cells={state}
                    length={3}
                    onClick={(i, j) => {
                        getAIMove();
                    }} 
                />
            </div>
        </div>
    );
}