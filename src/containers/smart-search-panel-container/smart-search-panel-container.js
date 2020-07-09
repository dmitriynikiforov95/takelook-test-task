import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { addTagToSelected, changeSmartSearchPanelValue } from "../../actions";
import SmartSearchPanel from "../../components/smart-search-panel";

const SmartSearchPanelContainer = ({ studios, ...propsForDumb }) => {
  const [variableTags, setVariableTags] = useState([]);

  const findVariableTags = (studios) => {
    const newVariableTags = [];
    studios.forEach(({ params }) => {
      for (let tag of params) {
        if (newVariableTags.find((addedTag) => addedTag === tag)) continue;
        newVariableTags.push(tag);
      }
    });

    setVariableTags(newVariableTags);
  };

  useEffect(() => {
    findVariableTags(studios);
  }, [studios]);

  return <SmartSearchPanel variableTags={variableTags} {...propsForDumb} />;
};

const mapStateToProps = ({ smartSeachPanelValue, studios }) => ({
  smartSeachPanelValue,
  studios,
});

const mapDispatchToProps = {
  addTagToSelected,
  changeSmartSearchPanelValue,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartSearchPanelContainer);
