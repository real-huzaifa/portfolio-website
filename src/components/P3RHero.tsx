import React from 'react';
import './P3RHero.css';

const P3RHero = () => {
    return (
        <div className="p3r-hero">
            <div className="hero-content">
                <h1>Persona 3 Reload</h1>
                <h2>The return of the legendary JRPG</h2>
                <div className="image-container">
                    <img src="/path/to/image.jpg" alt="Persona 3 Reload Hero" />
                </div>
                <div className="game-ui-buttons">
                    <button className="play-button">Play Now</button>
                    <button className="trailer-button">Watch Trailer</button>
                </div>
            </div>
        </div>
    );
};

export default P3RHero;