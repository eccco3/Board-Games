import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

export const MenuRoute = () => {
    return (
        <div className='menu-route'>
            <nav className='games'>
                <Link to='/tictactoe' >
                    Tic Tac Toe
                </Link>
            </nav>
        </div>

    )
}