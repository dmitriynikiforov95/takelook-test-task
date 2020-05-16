import React from "react";
import { Slider } from "antd";
import "./price-filter.css";

const PriceFilter = ({changePriceFilterRangeValue, defaultPriceFilterRange, selectedPriceFilterRange }) => {

  return (
    <div className="filter-wrapper">
      <Slider
        className="filter"
        range
        included
        defaultValue={[defaultPriceFilterRange.min, defaultPriceFilterRange.max]}
        value={[selectedPriceFilterRange.min, selectedPriceFilterRange.max]}
        max={defaultPriceFilterRange.max}
        min={defaultPriceFilterRange.min}
        onChange={changePriceFilterRangeValue}
      />
      <div>
        <div className="filter-info-wrapper">
          <div>
            <span>Стоимость</span>
          </div>
          <div>
            <span className="price-left">{selectedPriceFilterRange.min}</span>-
              <span className="price-right">{selectedPriceFilterRange.max}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceFilter;
