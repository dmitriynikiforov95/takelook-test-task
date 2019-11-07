import React from "react";

import { connect } from "react-redux";

import { tagRemovedFromTaglist } from "../../actions";

import { Tag } from "antd";

// Почему закрывается сразу 2 тэга и один не рендериться ?
// Сделать нормальное отображение флекс элементов, когда используешь фильтр

const TagListContainer = ({ tags, tagRemovedFromTaglist }) => {
  const tagList = tags.map((item, idx) => {
    return (
      <Tag
        closable
        key={idx} // убраать еслине будет работать
        onClose={e => {
          e.preventDefault();
          tagRemovedFromTaglist(idx);
        }}
      >
        {item}
      </Tag>
    );
  });

  return <div>{tagList}</div>;
};

const mapStateToProps = ({ tags }) => {
  return {
    tags
  };
};

const mapDispatchToProps = {
  tagRemovedFromTaglist
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagListContainer);
