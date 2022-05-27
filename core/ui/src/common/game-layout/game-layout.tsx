import React from 'react';

import "./game-layout.scss";

import { Link } from 'react-router-dom';

export const GameLayout = () => {
    

    return (
        <div className="game-layout">
            <header className="game-header">
                <nav className="links">
                    {links.map(link => (
                        <Link key={link.to} to={link.to} className={link.className + link.primary ? " primary" : ""}>
                            {link.text}
                        </Link>
                    ))}
                </nav>
            </header>
        </div>
    );
};

const links = [
    {
        text: "Return to Menu",
        className: "back",
        to: "/",
        primary: true,
    },
];