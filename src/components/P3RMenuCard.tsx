import React from 'react';
import './P3RMenuCard.css'; // Import the CSS file for styling

const P3RMenuCard = ({ title, description, onClick }) => {
    return (
        <div className="p3r-menu-card" onClick={onClick}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default P3RMenuCard;