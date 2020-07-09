import React from "react";
import { Slider } from "antd";
import s from "./price-filter.module.css";

const PriceFilter = ({setCurrentPriceFilterRangeValue, currentPriceFilterRangeValue, defaultPriceFilterRangeValue }) => (
    <div className={s.container}>
      <Slider
        className={s.filter}
        range
        included
        defaultValue={[defaultPriceFilterRangeValue.min, defaultPriceFilterRangeValue.max]}
        value={[currentPriceFilterRangeValue.min, currentPriceFilterRangeValue.max]}
        max={defaultPriceFilterRangeValue.max}
        min={defaultPriceFilterRangeValue.min}
        onChange={setCurrentPriceFilterRangeValue}
      />
      <div>
        <div className={s.priceFlexWrapper}>
            <span>Стоимость</span>
          <div>
            <span className={s.minPrice}>{currentPriceFilterRangeValue.min}</span>-
              <span className={s.maxPrice}>{currentPriceFilterRangeValue.max}</span>
          </div>
        </div>
      </div>
    </div>
  );

export default PriceFilter;
