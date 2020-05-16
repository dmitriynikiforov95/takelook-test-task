import React from "react";

import { Icon, Input, AutoComplete, Popover } from "antd";

import "./smart-search-panel.css";

import TagListContainer from "../../containers/tag-list-container";

const SmartSearchPanel = ({ variableTags, smartSeachPanelValue, changeSmartSearchPanelValue, addTagToSelected }) => {

  return (
    <div>
      <Popover placement="topLeft" content={"Выберите тег из выпадающего списка"}>
        <AutoComplete
          className="smart-search-panel"
          placeholder="Поиск по тегам и названиям"
          onSearch={(e) => changeSmartSearchPanelValue(e)}
          onSelect={(e) => addTagToSelected(e)}
          value={smartSeachPanelValue}
          dataSource={variableTags}
          filterOption={(inputValue, option) =>
            option.props.children
              .toUpperCase()
              .indexOf(inputValue.toUpperCase()) !== -1
          }
        >
          <Input
            suffix={
              <Icon
                type="search"
                className="certain-category-icon"
              />
            }
          />
        </AutoComplete>
      </Popover>
      <div>
        <TagListContainer />
      </div>
    </div>
  );
}

export default SmartSearchPanel;
