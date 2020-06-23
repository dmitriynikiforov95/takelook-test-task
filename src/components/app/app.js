import React from "react";

import SmartSearchPanelContainer from "../../containers/smart-search-panel-container";
import StudioListContainer from "../../containers/studio-list-container";
import PriceFilterContainer from "../../containers/price-filter-container";

import logo from "../../img/logo.png";
import "antd/dist/antd.css";
import "./normalize.css";
import "./app.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="app-logo-wrapper">
        <img className="app-logo" src={logo} width="191" height="59" alt="лого" />
      </div>
      <div className="app-components-wrapper">
          <StudioListContainer />
        <div className="sort-settings-wrapper">
          <PriceFilterContainer />
          <SmartSearchPanelContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
