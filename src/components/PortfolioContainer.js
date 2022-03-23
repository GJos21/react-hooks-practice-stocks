import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onSell }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stocks
          .map((stock) =>
            <Stock
              onSell={onSell}
              key={stock.id}
              item={stock}
            />)
      }
    </div>
  );
}

export default PortfolioContainer;
