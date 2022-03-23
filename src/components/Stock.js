import React from "react";

function Stock({ item, onBuy = null, onSell = null }) {
  const { ticker, name, price } = item;

  function handleClick() {
    onBuy ? onBuy(item, "buy") : onSell(item, "sell")
  }

  return (
    <div>
      <div onClick={handleClick} className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p><span>{ticker}: </span><span>{price}</span></p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
