import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  changePriceFilterRangeValue,
  setCurrentPriceFilterRangeValue,
  setDefaultPriceFilterRangeValue
} from "../../actions";

import PriceFilter from "../../components/price-filter";

const PriceFilterContainer = ({ studios, setDefaultPriceFilterRangeValue, setCurrentPriceFilterRangeValue, ...otherProps }) => {

  useEffect(
    () => {
      if (studios.length > 0) {

        let minPrice, maxPrice = studios[0].price;
      
        for (let {price} of studios) {
          if (minPrice < price) {
            continue;
          }
           else {
            minPrice = price;
          }
        }

        for (let {price} of studios) {
          if (maxPrice < price) {
            maxPrice = price;
          }
        }

        setDefaultPriceFilterRangeValue(minPrice, maxPrice);
        setCurrentPriceFilterRangeValue(minPrice, maxPrice);
      }

    }, [studios]

  )

  return (
    <PriceFilter {...otherProps} />
  );
}

const mapStateToProps = ({ studios, defaultPriceFilterRange, selectedPriceFilterRange }) => {
  return {
    defaultPriceFilterRange,
    selectedPriceFilterRange,
    studios
  };
};

const mapDispatchToProps = {
    changePriceFilterRangeValue,
    setCurrentPriceFilterRangeValue,
    setDefaultPriceFilterRangeValue,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceFilterContainer);
