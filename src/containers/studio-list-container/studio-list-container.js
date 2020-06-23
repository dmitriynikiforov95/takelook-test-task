import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";

import { fetchStudios } from "../../actions";

import StudioList from "../../components/studio-list";

import { TakeLookServiceContext } from "../../components/takelook-service-context";
import SearchResultHint from "./../../components/search-result-hint/index";

const StudioListContainer = ({ isStudiosLoaded, fetchStudios, studios, isPriceFilterRangeValueLoaded }) => {
  const takeLookData = useContext(TakeLookServiceContext);

  useEffect(() => fetchStudios(takeLookData), [fetchStudios, takeLookData]);

  if (isPriceFilterRangeValueLoaded && studios.length === 0) {
    return <SearchResultHint />;
  }

  return <StudioList studios={studios} />;
};

const filterStudios = (
  studios,
  currentPriceFilterRangeValue,
  smartSeachPanelValue,
  selectedTags
) => {
  const { min, max } = currentPriceFilterRangeValue;

  let newStudios =
    smartSeachPanelValue.length === 0
      ? studios
      : studios.filter(({ params, name }) => {
          const searchValue = smartSeachPanelValue.toLowerCase();
          for (let studioTag of params) {
            if (
              studioTag.toLowerCase().includes(searchValue) ||
              name.toLowerCase().includes(searchValue)
            ) {
              return true;
            }
          }
          return false;
        });

  if (selectedTags.length) {
    newStudios = newStudios.filter(({ params }) => {
      for (let studioTag of params) {
        if (selectedTags.find((selectedTag) => selectedTag === studioTag)) {
          return true;
        }
      }
      return false;
    });
  }
  return newStudios.filter(({ price }) => price >= min && price <= max);
};

const mapStateToProps = ({
  studios,
  isPriceFilterRangeValueLoaded,
  isStudiosLoaded,
  currentPriceFilterRangeValue,
  smartSeachPanelValue,
  selectedTags,
}) => {
  return {
    studios: filterStudios(
      studios,
      currentPriceFilterRangeValue,
      smartSeachPanelValue,
      selectedTags
    ),
    isStudiosLoaded,
    isPriceFilterRangeValueLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudios: fetchStudios(dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudioListContainer);
