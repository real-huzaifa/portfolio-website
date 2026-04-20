import React from 'react';
import './Persona3UI.css'; // Import your styling for animations and layout

const Persona3UI = () => {
    return (
        <div className="persona3-ui">
            <div className="menu">
                <h1 className="title">Persona 3 Menu</h1>
                <ul className="menu-items">
                    <li className="menu-item slide-in">Start Game</li>
                    <li className="menu-item slide-in">Load Game</li>
                    <li className="menu-item slide-in">Options</li>
                    <li className="menu-item slide-in">Exit</li>
                </ul>
            </div>
        </div>
    );
};

export default Persona3UI;
