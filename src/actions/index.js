import { sortByPrice } from "../helpers";

const studiosLoaded = (studios) => ({
  type: "FETCH_STUDIOS_SUCCESS",
  payload: studios,
});

const fetchStudiosRequest = () => ({
  type: "FETCH_STUDIOUS_REQUEST",
});

const fetchStudios = (dispatch) => (takelookService) => {
  dispatch(fetchStudiosRequest());
  takelookService.getStudios().then((res) => {
    res.sort(sortByPrice);
    dispatch(studiosLoaded(res));
  });
};

const setCurrentPriceFilterRangeValue = ([min, max]) => ({
  type: "CURRENT_PRICE_FILTER_RANGE_VALUE_SETTED",
  payload: {
    min,
    max,
  },
});

const addTagToSelected = (tag) => ({
  type: "TAG_ADDED_TO_TAGLIST",
  payload: tag,
});

const removeTagFromSelected = (tag) => ({
  type: "TAG_REMOVED_FROM_TAGLIST",
  payload: tag,
});

const changeSmartSearchPanelValue = (term) => ({
  type: "SMART_SEARCH_PANEL_VALUE_CHANGED",
  payload: term,
});

export {
  setCurrentPriceFilterRangeValue,
  addTagToSelected,
  removeTagFromSelected,
  changeSmartSearchPanelValue,
  fetchStudios,
};
