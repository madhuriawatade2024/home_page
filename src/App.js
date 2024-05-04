import React, { useState } from 'react';
import './App.css';
import OpportunityCard from './components.js/OpportunityCard'; 
import PointCalculator from './components.js/PointCalculator'; 
import EmployerLogin from './components.js/EmployerLogin';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [points, setPoints] = useState(0);
  const [opportunities, setOpportunities] = useState([
    { id: 1, title: 'Opportunity 1', description: 'Description of Opportunity 1' },
    { id: 2, title: 'Opportunity 2', description: 'Description of Opportunity 2' },
    { id: 1, title: 'Opportunity 3', description: 'Description of Opportunity 3' },
    { id: 2, title: 'Opportunity 4', description: 'Description of Opportunity 4' },
    
  ]);

  const handleLogin = () => {
    setLoggedIn(true); 
  };

  const addToCalculator = (title) => {
  
    setPoints(points + 1);
  };

  return (
    <div className="app">
      <h1>Company Core Values</h1>
      <div className="core-values">
        <h2>Core Values</h2>
        <p><strong>Human dignity:</strong> Human dignity is inviolable. It must be respected, protected and constitutes the real basis of fundamental rights.</p>
        <p><strong>Freedom:</strong> Freedom of movement gives citizens the right to move and reside freely within the Union. Individual freedoms such as respect for private life, freedom of thought, religion, assembly, expression and information are protected by the EU Charter of Fundamental Rights.</p>
        <p><strong>Democracy:</strong> The functioning of the EU is founded on representative democracy. A European citizen automatically enjoys political rights. Every adult EU citizen has the right to stand as a candidate and to vote in elections to the European Parliament. EU citizens have the right to stand as a candidate and to vote in their country of residence, or in their country of origin.</p>
       <p><strong>Equality:</strong> Equality is about equal rights for all citizens before the law. The principle of equality between women and men underpins all European policies and is the basis for European integration. It applies in all areas. The principle of equal pay for equal work became part of the Treaty of Rome in 1957.</p>
        
       <p><strong>Rule of law:</strong> 
The EU is based on the rule of law. Everything the EU does is founded on treaties, voluntarily and democratically agreed by its EU countries. Law and justice are upheld by an independent judiciary. The EU countries gave final jurisdiction to the European Court of Justice - its judgments have to be respected by all</p>
       <p><strong>Human rights:</strong> 
Human rights are protected by the EU Charter of Fundamental Rights. These cover the right to be free from discrimination on the basis of sex, racial or ethnic origin, religion or belief, disability, age or sexual orientation, the right to the protection of your personal data, and the right to get access to justice.</p>
      </div>

     
      <div className="opportunity-container">
        {opportunities.map((opp) => (
          <OpportunityCard key={opp.id} opportunity={opp} addToCalculator={addToCalculator} />
        ))}
      </div>

     
      {loggedIn ? (
        <div>
          <PointCalculator points={points} />
          
        </div>
      ) : (
        <EmployerLogin onLogin={handleLogin} />
      )}
   
       <footer>
        <div>
          <p>This site is managed by: Directorate-General for Employment, Social Affairs and Inclusion</p>
          <p>Accessibility</p>
          <p>Contact</p>
          <p>Legal</p>
          <p>EU institutions</p>
        </div>
        <div>
          <p>Terms and conditions of use</p>
          <p>Privacy Statement</p>
          <p>Discover more on <a href="https://europa.eu">europa.eu</a></p>
          <p>Contact the EU</p>
        </div>
      </footer>
       </div>
  );
};

export default App;
