const initialState = {
  cards: [],
  tags: ["камин"],
  term: "",
  variableTags: [],
  loading: true,
  selectedPriceRange: [0, 500],
  defaultPriceRange: {
    min: 0,
    max: 500
  }
};

// 1) Сделать одну функцию

const addTagToList = (state, tag) => {
  let test = state.cards.filter(card => {
    for (let params of card.params) {
      if (params == tag) return true;
    }
  });

  if (!test.length == 0) {
    const item = state.tags.findIndex(
      currentValue => currentValue == tag.toLowerCase()
    );

    if (item == -1) {
      return {
        ...state,
        tags: [...state.tags, tag]
      };
    } else {
      return {
        ...state
      };
    }
  } else {
    return {
      ...state
    };
  }
};

const removeTageFromList = (state, tag) => {
  let tags = [...state.tags.slice(0, tag), ...state.tags.slice(tag + 1)];
  return {
    ...state,
    tags: tags
  };
};

const findVariableTags = (state, cards) => {
  let newArr = [];
  cards.filter(card => {
    for (let params of card.params) {
      if (newArr.findIndex(currentValue => currentValue == params) == -1)
        newArr.push(params);
    }
  });
  return {
    ...state,
    variableTags: newArr
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CARDS_SUCCESS":
      return {
        ...state,
        cards: action.payload,
        loading: false
      };
    case "CHANGE_RANGE_FILTER":
      return {
        ...state,
        selectedPriceRange: {
          min: action.payload.min,
          max: action.payload.max
        }
      };
    case "SET_CURRENT_RANGE_VALUE":
      return {
        ...state,
        selectedPriceRange: action.payload
      };

    case "SET_DEFAULT_RANGE_VALUE":
      return {
        ...state,
        defaultPriceRange: {
          min: action.payload.min,
          max: action.payload.max
        }
      };
    case "FIND_SEARCH_TAGS": // добавить актуальный тэги в стор
      return findVariableTags(state, action.payload);
    case "TAG_ADDED_TO_TAGLIST":
      return addTagToList(state, action.payload);
    case "TAG_REMOVED_FROM_TAGLIST":
      return removeTageFromList(state, action.payload);
    case "CHANGE_TERM":
      return {
        ...state,
        term: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
