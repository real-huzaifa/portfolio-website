import React from 'react';
import './P3RMenu.css';

const P3RMenu = () => {
  const options = [
    'SKILL',
    'EQUIP',
    'PERSONA',
    'STATS',
    'QUEST',
    'SOCIAL LINK',
    'CALENDAR',
    'SYSTEM'
  ];

  return (
    <div className="p3r-menu">
      {options.map((option, index) => (
        <div key={index} className="menu-option slide-in">{option}</div>
      ))}
    </div>
  );
};

export default P3RMenu;