import React, { useEffect } from "react";
import { connect } from "react-redux";

import { withTakeLookService } from "../../components/hoc";
import { fetchStudios } from "../../actions";

import Spinner from "../../components/spinner";

import StudioList from "../../components/studio-list";

const StudioListContainer = ({ loading, fetchStudios, studios }) => {

  useEffect(
    fetchStudios, []
  )

  if (loading) {
    return <Spinner />;
  }
  return (
    <StudioList studios={studios}/>
  );

}


const filterStudios = (studios, selectedPriceFilterRange, smartSeachPanelValue, selectedTags) => {

  
  const searchBySmartSeachPanelValue = (studios, smartSeachPanelValue) => {
    return smartSeachPanelValue.length === 0
      ? studios
      : studios.filter(
        ({name}) => name.toLowerCase().indexOf(smartSeachPanelValue.toLowerCase()) > -1
      );
  };

  // фильтрация по значению в поисковой строке и по стоимости
  let newStudios = searchBySmartSeachPanelValue(studios, smartSeachPanelValue)
    .filter(
      ({price}) =>
        price >= selectedPriceFilterRange.min &&
        price <= selectedPriceFilterRange.max
    );

  // фильтрация по выбранным тегам
  return selectedTags.length === 0
    ? newStudios
    : newStudios.filter(({params}) => {
      for (let studioTag of params) {
        if (selectedTags.find(selectedTag => selectedTag === studioTag)) {
          return true;
        }
      }
    });
};

const mapStateToProps = ({
  studios,
  loading,
  selectedPriceFilterRange,
  smartSeachPanelValue,
  selectedTags
}) => {
  return {
    studios: filterStudios(studios, selectedPriceFilterRange, smartSeachPanelValue, selectedTags),
    loading
  };
};

const mapDispatchToProps = (dispatch, { takelookService }) => {
  return {
    fetchStudios: fetchStudios(dispatch, takelookService)
  }
};

export default withTakeLookService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StudioListContainer)
);
