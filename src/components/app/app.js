import React from "react";
import CardList from "../card-list";
import "antd/dist/antd.css"
import "./app.css";
import Filter from "../filter/";
import SmartSearchPanel from "../smart-search-panel";

const App = () => {
  return (
    <div className="app__wrapper">
      <h1 className="app__title">TAKELOOK</h1>
      <div className="block__wrapper">
        <div className="card-list__wrapper">
          <CardList />
        </div>
        <div className="search_wrapper">
          <SmartSearchPanel />
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default App;
