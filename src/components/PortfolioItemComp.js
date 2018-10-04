import React from 'react';

const PortfolioItem = (props) => {
   return (
      <div className="portfolio-item">
         <h3>Portfolio Item: {props.match.params.id}</h3>
         <div className="portfolio-box">
            <p>This is the page for the item with id:
            &nbsp; <strong>{props.match.params.id}</strong></p>
         </div>
      </div>
   );

}// PortfolioItem

export default PortfolioItem;