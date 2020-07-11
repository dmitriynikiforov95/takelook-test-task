import React from "react";
import SmartSearchPanelContainer from "../../containers/smart-search-panel-container";
import StudioListContainer from "../../containers/studio-list-container";
import PriceFilterContainer from "../../containers/price-filter-container";
import logo from "../../img/logo.png";
import "antd/dist/antd.css";
import "./app.css";

const App = () => (
  <div className="app-container">
    <div className="app-logo-wrapper">
      <img className="app-logo" src={logo} width="191" height="59" alt="лого" />
    </div>
    <div className="app-components-flex-wrapper">
      <StudioListContainer />
      <div className="studio-list-settings-components-wrapper">
        <PriceFilterContainer />
        <SmartSearchPanelContainer />
      </div>
    </div>
  </div>
);

export default App;
