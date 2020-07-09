import React from "react";

import { Icon, Input, AutoComplete, Popover } from "antd";

import "./smart-search-panel.css";

import TagListContainer from "../../containers/tag-list-container";

const SmartSearchPanel = ({
  variableTags,
  smartSeachPanelValue,
  changeSmartSearchPanelValue,
  addTagToSelected,
}) => (
  <>
    <Popover placement="topLeft" content={"Выберите тег из выпадающего списка"}>
      <AutoComplete
        className="smart-search-panel"
        placeholder="Поиск по тегам и названиям"
        onSearch={changeSmartSearchPanelValue}
        onSelect={addTagToSelected}
        value={smartSeachPanelValue}
        dataSource={variableTags}
        filterOption={(inputValue, option) =>
          option.props.children.toUpperCase().includes(inputValue.toUpperCase())
        }
      >
        <Input
          suffix={<Icon type="search" className="certain-category-icon" />}
        />
      </AutoComplete>
    </Popover>
    <TagListContainer />
  </>
);

export default SmartSearchPanel;
