import React from "react";
import { connect } from "react-redux";
import { removeTagFromSelected } from "../../actions";
import TagList from "../../components/tag-list";

const TagListContainer = (props) => {
    return (
        <TagList {...props} />
    );
}

const mapStateToProps = ({ selectedTags }) => {
    return {
        selectedTags
    };
};

const mapDispatchToProps = {
    removeTagFromSelected
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagListContainer);
