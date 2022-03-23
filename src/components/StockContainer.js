import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, filterByType, onBuy }) {

  return (
    <div>
      <h2>Stocks</h2>

      {stocks
        .filter((stock) =>
          filterByType === "" || stock.type === filterByType
            ? true : false)
        .map((stock) => <Stock
          onBuy={onBuy}
          key={stock.id}
          item={stock} />)}
    </div>
  );
}

export default StockContainer;
