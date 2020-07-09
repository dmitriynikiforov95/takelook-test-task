import React from "react";
import { connect } from "react-redux";
import { removeTagFromSelected } from "../../actions";
import TagList from "../../components/tag-list";

const TagListContainer = (props) => <TagList {...props} />;

const mapStateToProps = ({ selectedTags }) => ({
  selectedTags,
});

const mapDispatchToProps = {
  removeTagFromSelected,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagListContainer);
