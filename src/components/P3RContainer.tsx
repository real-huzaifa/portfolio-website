import React from 'react';
import './P3RContainer.css'; // Assuming you'll create corresponding CSS for styles

const P3RContainer = ({ children }) => {
    return (
        <div className="p3r-container">
            <div className="p3r-border">
                {children}
            </div>
        </div>
    );
};

export default P3RContainer;