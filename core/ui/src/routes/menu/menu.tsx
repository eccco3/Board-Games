import useAxios from 'axios-hooks';
import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

export const MenuRoute = () => {
    const [{ data: links, loading, error }] = useAxios(
        'http://localhost:8000/api/menu/main',
    );
    return loading ? (
        <div className="loading">Loading</div>
    ) : error ? (
        <div className="error">Error</div>
    ) : (
        <div className="menu-route">
            <nav className="games">
                {links.map((link) => (
                    <Link className={link.to} key={link.to} to={link.to}></Link>
                ))}
            </nav>
        </div>
    );
};
