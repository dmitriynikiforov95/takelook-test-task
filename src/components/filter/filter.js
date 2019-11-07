import React, { Component } from "react";
import { Slider} from "antd";
import "./filter.css";
import {
  changeRangeFilter,
  setCurrentRangeValue,
  setDefaultRangeValue
} from "../../actions";
import { connect } from "react-redux";
import Spinner from "../spinner";


class Filter extends Component {
  componentDidUpdate(prevProps) {

    const { cards, setDefaultRangeValue, setCurrentRangeValue } = this.props;

    if (cards.length !== prevProps.cards.length) {
      let minPrice = cards[0].price;
      let maxPrice = cards[0].price;

      for (let i = 0; i < cards.length; i++) {
        if (minPrice < cards[i].price) {
          continue;
        } else {
          minPrice = cards[i].price;
        }
      }

      for (let i = 0; i < cards.length; i++) {
        if (maxPrice < cards[i].price) {
          maxPrice = cards[i].price;
        }
      }

      setDefaultRangeValue(minPrice, maxPrice);
      setCurrentRangeValue(minPrice, maxPrice);
    }
  }
  render() {
    const {
      changeRangeFilter,
      defaultPriceRange,
      loading,
      selectedPriceRange,

    } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div>
        <Slider
          className="filter"
          range
          included
          defaultValue={[defaultPriceRange.min, defaultPriceRange.max]}
          value={[selectedPriceRange.min, selectedPriceRange.max]}
          max={defaultPriceRange.max}
          min={defaultPriceRange.min}
          onChange={changeRangeFilter}
        />
        <div>
          <div>
            <span>Стоимость</span>
            <span>{selectedPriceRange.min}</span>-<span>{selectedPriceRange.max}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loading, cards, defaultPriceRange, selectedPriceRange }) => {
  return {
    loading,
    defaultPriceRange,
    selectedPriceRange,
    cards
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeRangeFilter: (min,max) => dispatch(changeRangeFilter(min, max)),
    setCurrentRangeValue: (min, max) =>
      dispatch(setCurrentRangeValue(min, max)),
    setDefaultRangeValue: (min, max) => dispatch(setDefaultRangeValue(min, max))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
