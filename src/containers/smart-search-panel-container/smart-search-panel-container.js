import React, { useEffect } from "react";
import { connect } from "react-redux";

import { addTagToSelected, changeSmartSearchPanelValue, findSearchingTags } from "../../actions";
import SmartSearchPanel from "../../components/smart-search-panel";

const SmartSearchPanelContainer = ({studios, findSearchingTags, ...otherProps}) => {

  useEffect(
    () => {
      findSearchingTags(studios)
    }, [studios]
  )

  return (
  <SmartSearchPanel {...otherProps}/>
  );

}

const mapStateToProps = ({ smartSeachPanelValue, studios, variableTags }) => {
  return {
    smartSeachPanelValue,
    studios,
    variableTags
  };
};

const mapDispatchToProps = {
  addTagToSelected,
  changeSmartSearchPanelValue,
  findSearchingTags
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartSearchPanelContainer);
