
const cardsLoaded = newBooks => {
  return {
    type: "FETCH_CARDS_SUCCESS",
    payload: newBooks
  };
};

const changeRangeFilter = value => {
  return {
    type: "CHANGE_RANGE_FILTER",
    payload: {
      min: value[0],
      max: value[1]
    }
  };
};


const tagAddedToTaglist = tagId => {
  return {
    type: "TAG_ADDED_TO_TAGLIST",
    payload: tagId
  };
};

const tagRemovedFromTaglist = tagId => {
  return {
    type: "TAG_REMOVED_FROM_TAGLIST",
    payload: tagId
  };
};

const findSearchTags = value => {
  return {
    type: "FIND_SEARCH_TAGS",
    payload: value
  };
};



const changeTerm = term => {
  return {
    type: "CHANGE_TERM",
    payload: term
  };
};


const setCurrentRangeValue = (min, max) => {
  return {
    type: "SET_CURRENT_RANGE_VALUE",
    payload: {
      min,
      max
    }
  };
};

const setDefaultRangeValue = (min, max) => {
  return {
    type: "SET_DEFAULT_RANGE_VALUE",
    payload: {
      min,
      max
    }
  };
};


export {
  cardsLoaded,
  changeRangeFilter,
  setCurrentRangeValue,
  setDefaultRangeValue,
  tagAddedToTaglist,
  tagRemovedFromTaglist,
  findSearchTags,
  changeTerm
};
