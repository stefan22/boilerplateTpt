import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioComp = () => {
   return (
      <div className="portfolio">
         <h2>Portfolio</h2>
         <div className="portfolio-box">
            <ul>
               <li><Link to="/portfolio/1">Item One</Link></li>
               <li><Link to="/portfolio/2">Item Two</Link></li>
               <li><Link to="/portfolio/3">Item Three</Link></li>
               <li><Link to="/portfolio/4">Item Four</Link></li>
            </ul>
         </div>
      </div>
   );

}// PortfolioComp

export default PortfolioComp;