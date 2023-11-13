import React from "react";
import { BsMoonStarsFill } from 'react-icons/bs';

function Navbar() {
    return (
        <header className="Navbar-container">
            <nav className="Navbar">
                <h2>LUKI</h2>
                <ul className="Navbar-container-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre Mim</a></li>
                    <li><a href="#">Formação</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
                <div className="Navbar-container-icon">
                    <BsMoonStarsFill className="Navbar-icon"/>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;