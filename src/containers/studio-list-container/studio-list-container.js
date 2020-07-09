import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";

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

  if (isPriceFilterRangeValueLoaded && studios.length === 0) {
    return <SearchResultHint />;
  }

  return <StudioList studios={studios} />;
};

const filterStudiosBySearchingValue = (studios, smartSeachPanelValue) =>
 (smartSeachPanelValue.trim().length === 0)
    ? studios
    : studios.filter(({ params, name }) => {
        const searchingValue = smartSeachPanelValue.trim().toLowerCase();
        for (let studioTag of params) {
          if (
            studioTag.toLowerCase().includes(searchingValue) ||
            name.toLowerCase().includes(searchingValue)
          )
            return true;
        }
        return false;
      });

const filterStudiosByTags = (studios, selectedTags) =>
 (selectedTags.length)
    ? studios.filter(({ params }) => {
        for (let studioTag of params) {
          if (selectedTags.find((selectedTag) => selectedTag === studioTag))
            return true;
        }
        return false;
      })
    : studios;

const filterStudiosByPrice = (studios, { min, max }) =>
  studios.filter(({ price }) => price >= min && price <= max);

const mapStateToProps = ({
  studios,
  isPriceFilterRangeValueLoaded,
  currentPriceFilterRangeValue,
  smartSeachPanelValue,
  selectedTags,
}) => ({
  studios: filterStudiosBySearchingValue(
    filterStudiosByTags(
      filterStudiosByPrice(studios, currentPriceFilterRangeValue),
      selectedTags
    ),
    smartSeachPanelValue
  ),
  isPriceFilterRangeValueLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStudios: fetchStudios(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudioListContainer);
