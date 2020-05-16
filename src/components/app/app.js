import React from "react";

import SmartSearchPanelContainer from "../../containers/smart-search-panel-container";
import StudioListContainer from "../../containers/studio-list-container";
import PriceFilterContainer from "../../containers/price-filter-container";

import logo from "../../img/logo.png";
import "antd/dist/antd.css"
import "./app.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="app-logo-wrapper">
        <img className="app-logo" src={logo} alt="лого" />
      </div>
      <div className="app-components-wrapper">
        <div className="card-list-wrapper">
          <StudioListContainer />
        </div>
        <div className="sort-settings-wrapper">
          <SmartSearchPanelContainer />
          <PriceFilterContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
