import React from 'react';

import "./board.scss";

export const Board = ({cells, length, onClick}) => {
    
    return (
        <div
            className="board"
            style={{
                gridTemplateColumns: `repeat(${length}, 1fr)`,
                gridTemplateRows: `repeat(${length}, 1fr)`,
            }}
        >
            {cells.map((row, i) => row.map((col, j) => (
                <div
                    className="cell"
                    key={"row " + i + "col " + j}
                    onClick={() => onClick(i, j)}
                >
                    <div className="content">
                        {col.content}
                    </div>
                </div>
            )))}
        </div>
    );
};
