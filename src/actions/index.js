import {sortByPrice} from "../helpers";

const studiosLoaded = studios => {
  return {
    type: "FETCH_STUDIOS_SUCCESS",
    payload: studios
  };
};

const fetchStudios = (dispatch, takelookService) => () => {
  takelookService
    .getStudios()
    .then(res => {
      res.sort(sortByPrice)
      dispatch(studiosLoaded(res))
    })
};

const changePriceFilterRangeValue = ([min, max]) => {
  return {
    type: "CHANGE_PRICE_FILTER_SELECTED_RANGE_VALUE",
    payload: {
      min,
      max
    }
  };
};

const addTagToSelected = tag => {
  return {
    type: "TAG_ADDED_TO_TAGLIST",
    payload: tag
  };
};

const removeTagFromSelected = tag => {
  return {
    type: "TAG_REMOVED_FROM_TAGLIST",
    payload: tag
  };
};

const findSearchingTags = studios => {
  return {
    type: "FIND_SEARCHING_TAGS",
    payload: studios
  };
};

const changeSmartSearchPanelValue = term => {
  return {
    type: "SMART_SEARCH_PANEL_VALUE_CHANGED",
    payload: term
  };
};

const setCurrentPriceFilterRangeValue = (min, max) => {
  return {
    type: "SET_CURRENT_PRICE_FILTER_RANGE_VALUE",
    payload: {
      min,
      max
    }
  };
};

const setDefaultPriceFilterRangeValue = (min, max) => {
  return {
    type: "SET_DEFAULT_PRICE_FILTER_RANGE_VALUE",
    payload: {
      min,
      max
    }
  };
};

export {
  changePriceFilterRangeValue,
  setCurrentPriceFilterRangeValue,
  setDefaultPriceFilterRangeValue,
  addTagToSelected,
  removeTagFromSelected,
  findSearchingTags,
  changeSmartSearchPanelValue,
  fetchStudios
};
