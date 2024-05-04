import React from 'react';
import './PointCalculator.css'; 
const PointCalculator = ({ points }) => {
  return (
    <div className="point-calculator">
      <h2>Point Calculator</h2>
      <p>Total Points: {points}</p>
   
    </div>
  );
};

export default PointCalculator;
