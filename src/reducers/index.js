const initialState = {
  studios: [],
  studiosLoading: true,
  selectedTags:["камин"],
  variableTags: [],
  smartSeachPanelValue: "",
  selectedPriceFilterRange: [],
  defaultPriceFilterRange: {
    min: null,
    max: null
  }
};

const addTagToSelected = (state, selectedTag) => {
  if (state.selectedTags.find(tag => tag === selectedTag)) {
    return state;
  }

  return {
    ...state,
    selectedTags: [...state.selectedTags, selectedTag]
  }
};

const removeTagFromSelected = (state, selectedTag) => {
  let newSelectedTags = state.selectedTags.filter(tag => tag !== selectedTag);

  return {
    ...state,
    selectedTags: newSelectedTags
  }
};

const findVariableTags = (state, studios) => {
  let newVariableTags = [];
  studios.forEach(({params}) => {
    for (let tag of params) {
      if (newVariableTags.find(addedTag => addedTag === tag) === undefined)
        newVariableTags.push(tag);
    }
  });
  
  return {
    ...state,
    variableTags: newVariableTags
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STUDIOS_SUCCESS":
      return {
        ...state,
        studios: action.payload,
        studiosLoading: false
      };
    case "CHANGE_PRICE_FILTER_SELECTED_RANGE_VALUE":
      return {
        ...state,
        selectedPriceFilterRange: {
          min: action.payload.min,
          max: action.payload.max
        }
      };
    case "SET_CURRENT_PRICE_FILTER_RANGE_VALUE":
      return {
        ...state,
        selectedPriceFilterRange: action.payload
      };

    case "SET_DEFAULT_PRICE_FILTER_RANGE_VALUE":
      return {
        ...state,
        defaultPriceFilterRange: {
          min: action.payload.min,
          max: action.payload.max
        }
      };
    case "FIND_SEARCHING_TAGS": 
      return findVariableTags(state, action.payload);
    case "TAG_ADDED_TO_TAGLIST":
      return addTagToSelected(state, action.payload);
    case "TAG_REMOVED_FROM_TAGLIST":
      return removeTagFromSelected(state, action.payload);
    case "SMART_SEARCH_PANEL_VALUE_CHANGED":
      return {
        ...state,
        smartSeachPanelValue: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
