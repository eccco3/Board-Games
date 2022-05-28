import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import './tic-tac-toe.scss';

import { Board } from '../../common/board/board';
import { GameLayout } from '../../common/game-layout/game-layout';

type State = {
    board: (String | null)[][];
    turn: Number;
};

export const TicTacToeRoute = () => {
    const [state, setState] = useState<State>({
        board: new Array(3).fill(null).map((row) => new Array(3).fill(null)),
        turn: 1,
    });
    const [response, setResponse] = useState<State | null>(null);

    const playerMove = (cell: [0 | 1 | 2, 0 | 1 | 2]): void => {
        axios
            .post('http://localhost:8000/api/tictactoe/move', {
                ...state,
                cell,
            })
            .then((res) => {
                console.log('response', res);
                setResponse({ board: res.data, turn: -state.turn });
            })
            .catch((err) => {
                console.log('Error from playerMove', err);
            });
    };
    const aiMove = useCallback((): void => {
        axios
            .post('http://localhost:8000/api/tictactoe/ai', state)
            .then((res) => {
                console.log('response', res);
                setResponse({ board: res.data, turn: -state.turn });
            })
            .catch((err) => {
                console.log('Error from aiMove', err);
            });
    }, [state]);

    useEffect(() => {
        if (response) {
            setState(response);
            if (state.turn === -1) {
                aiMove();
            }
        }
    }, [response, state, aiMove]);

    return (
        <div className="tic-tac-toe-route">
            <GameLayout />
            <div className="game-area">
                <Board
                    cells={state.board}
                    length={3}
                    onClick={(cell: [0 | 1 | 2, 0 | 1 | 2]): void => {
                        playerMove(cell);
                    }}
                />
            </div>
        </div>
    );
};
