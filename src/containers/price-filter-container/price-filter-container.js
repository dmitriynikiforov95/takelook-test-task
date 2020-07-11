import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentPriceFilterRangeValue } from "../../actions";
import PriceFilter from "../../components/price-filter";

const PriceFilterContainer = ({
  studios,
  setCurrentPriceFilterRangeValue,
  currentPriceFilterRangeValue,
}) => {
  const [
    defaultPriceFilterRangeValue,
    setDefaultPriceFilterRangeValue,
  ] = useState({
    min: null,
    max: null,
  });

  useEffect(() => {
    if (studios.length) {
      const studiosCopy = studios.slice().sort((a, b) => a.price - b.price);

      const min = studiosCopy[0].price,
        max = studiosCopy[studiosCopy.length - 1].price;

      setDefaultPriceFilterRangeValue({ min, max });
      setCurrentPriceFilterRangeValue([min, max]);
    }
  }, [studios, setCurrentPriceFilterRangeValue]);

  return (
    <PriceFilter
      setCurrentPriceFilterRangeValue={setCurrentPriceFilterRangeValue}
      currentPriceFilterRangeValue={currentPriceFilterRangeValue}
      defaultPriceFilterRangeValue={defaultPriceFilterRangeValue}
    />
  );
};

const mapStateToProps = ({ studios, currentPriceFilterRangeValue }) => ({
  currentPriceFilterRangeValue,
  studios,
});

const mapDispatchToProps = {
  setCurrentPriceFilterRangeValue,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceFilterContainer);
