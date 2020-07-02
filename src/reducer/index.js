const initialState = {
  studios: [],
  isStudiosLoaded: null,
  isPriceFilterRangeValueLoaded: null,
  selectedTags: ["камин"],
  smartSeachPanelValue: "",
  currentPriceFilterRangeValue: [],
};

const addTagToSelected = (selectedTags, selectedTag) =>
  selectedTags.find((tag) => tag === selectedTag)
    ? selectedTags
    : [...selectedTags, selectedTag];
  
const removeTagFromSelected = (selectedTags, selectedTag) =>
  selectedTags.filter((tag) => tag !== selectedTag);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STUDIOUS_REQUEST": 
    return {
      ...state,
      isStudiosLoaded: false,
    }
    case "FETCH_STUDIOS_SUCCESS":
      return {
        ...state,
        studios: action.payload,
        isStudiosLoaded: true,
      };
    case "CURRENT_PRICE_FILTER_RANGE_VALUE_SETTED":
      return {
        ...state,
        currentPriceFilterRangeValue: {
          min: action.payload.min,
          max: action.payload.max,
        },
        isPriceFilterRangeValueLoaded: true,
      }
    case "TAG_ADDED_TO_TAGLIST":
      return {
        ...state,
        selectedTags: addTagToSelected(state.selectedTags, action.payload),
      };
    case "TAG_REMOVED_FROM_TAGLIST":
      return {
        ...state,
        selectedTags: removeTagFromSelected(state.selectedTags, action.payload),
      };
    case "SMART_SEARCH_PANEL_VALUE_CHANGED":
      return {
        ...state,
        smartSeachPanelValue: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
