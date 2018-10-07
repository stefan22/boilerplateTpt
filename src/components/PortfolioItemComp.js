import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = (props) => {
   return (
      <div className="portfolio-item">
         <h3>Portfolio Item: {props.match.params.id}</h3>
         <div className="portfolio-box">
            <p>This is the page for the item with id:
            &nbsp; <strong>{props.match.params.id}</strong></p>
            <button><Link to="/portfolio">Back</Link></button>
         </div>
      </div>
   );

}// PortfolioItem

export default PortfolioItem;