import React from 'react';
import { Link } from 'react-router-dom';

export const GameLayout = () => {
    

    return (
        <header className="game-header">
            <nav className="links">
                {links.map(link => (
                    <Link to={link.to} className={link.className + link.primary ? " primary" : ""}>
                        {link.text}
                    </Link>
                ))}
            </nav>
        </header>
    )
};

const links = [
    {
        text: "Return to Menu",
        className: "back",
        to: "/",
        primary: true,
    },


]