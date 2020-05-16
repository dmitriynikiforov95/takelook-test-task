import React from "react";

import { Tag } from "antd";


const TagList = ({ selectedTags, removeTagFromSelected }) => {
  const tagList = selectedTags.map((item) => {
    return (
      <Tag
        closable
        key={item}
        onClose={e => {
          e.preventDefault();
          removeTagFromSelected(item);
        }}
      >
        {item}
      </Tag>
    );
  });

  return <div>{tagList}</div>;
};

export default TagList;
