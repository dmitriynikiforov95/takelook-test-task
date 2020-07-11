import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchStudios } from "../../actions";
import StudioList from "../../components/studio-list";
import { TakeLookServiceContext } from "../../components/takelook-service-context";
import SearchResultHint from "./../../components/search-result-hint/index";

const StudioListContainer = ({
  fetchStudios,
  studios,
  isPriceFilterRangeValueLoaded,
}) => {
  const takeLookData = useContext(TakeLookServiceContext);

  useEffect(() => fetchStudios(takeLookData), [fetchStudios, takeLookData]);

  return isPriceFilterRangeValueLoaded && studios.length === 0 ? (
    <SearchResultHint />
  ) : (
    <StudioList studios={studios} />
  );
};

const filterStudiosBySearchingValue = (smartSeachPanelValue) => (studios) =>
  smartSeachPanelValue.trim().length
    ? studios.filter(({ params, name }) => {
        const searchingValue = smartSeachPanelValue.trim().toLowerCase();
        for (let studioTag of params) {
          if (
            studioTag.toLowerCase().includes(searchingValue) ||
            name.toLowerCase().includes(searchingValue)
          )
            return true;
        }
        return false;
      })
    : studios;

const filterStudiosByTags = (selectedTags) => (studios) =>
  selectedTags.length
    ? studios.filter(({ params }) => {
        for (let studioTag of params) {
          if (selectedTags.find((selectedTag) => selectedTag === studioTag))
            return true;
        }
        return false;
      })
    : studios;

const filterStudiosByPrice = ({ min, max }) => (studios) =>
  studios.filter(({ price }) => price >= min && price <= max);

const mapStateToProps = ({
  studios,
  isPriceFilterRangeValueLoaded,
  currentPriceFilterRangeValue,
  smartSeachPanelValue,
  selectedTags,
}) => ({
  studios: compose(
    filterStudiosBySearchingValue(smartSeachPanelValue),
    filterStudiosByTags(selectedTags),
    filterStudiosByPrice(currentPriceFilterRangeValue)
  )(studios),
  isPriceFilterRangeValueLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStudios: fetchStudios(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudioListContainer);
