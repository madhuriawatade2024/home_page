import React, { useState } from 'react';
import './OpportunityCard.css'; // Import OpportunityCard CSS

const OpportunityCard = ({ opportunity, addToCalculator }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleAddToCalculator = () => {
    addToCalculator(opportunity.title);
  };

  return (
    <div className={`opportunity-card ${expanded ? 'expanded' : ''}`} onClick={handleToggleExpand}>
      <h3>{opportunity.title}</h3>
      {expanded && (
        <div className="opportunity-details">
          <p>{opportunity.description}</p>
          <button onClick={handleAddToCalculator}>Add to Point Calculator</button>
        </div>
      )}
    </div>
  );
};

export default OpportunityCard;
