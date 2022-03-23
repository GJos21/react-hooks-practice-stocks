import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((resp) => resp.json())
      .then((items) => setStocks(items));
  }, []);

  function handleTransaction(transactStock, transactType) {
    if (transactType === "buy") {
      const newStocks = stocks.filter((stock) => stock.id !== transactStock.id);
      setPortfolio([...portfolio, transactStock]);
      setStocks(newStocks);
    }
    else {
      const newPortfolio = portfolio.filter((stock) => stock.id !== transactStock.id);
      setStocks([...stocks, transactStock]);
      setPortfolio(newPortfolio);
    }
  }

  function handleFilter(stockType) {
    setFilterBy(stockType)
  }

  function handleSort(sortChoice) {
    const newStocks = [...stocks];
    newStocks.sort((a, b) =>
      sortChoice === "alpha"
        ? (a.name < b.name ? -1 : 1)
        : (a.price < b.price ? -1 : 1)
    )
    setStocks(newStocks)
    setSortBy(sortChoice)
  }

  return (
    <div>
      <SearchBar
        filterText={filterBy}
        onFilter={handleFilter}
        onSort={handleSort}
        sortText={sortBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={stocks}
            filterByType={filterBy}
            onBuy={handleTransaction}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            stocks={portfolio}
            onSell={handleTransaction}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
