import React, { Component } from "react";
import { connect } from "react-redux";

import { Icon, Input, AutoComplete, Popover} from "antd";

import { tagAddedToTaglist, changeTerm, findSearchTags } from "../../actions";

import "./smart-search-panel.css";

import TagListContainer from "../tag-list";

const { Search } = Input;

class SmartSeacrhPanel extends Component {
  constructor(props) {
    super(props);
    this.refValue = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { cards, findSearchTags } = this.props;

    if (cards.length !== prevProps.cards.length) {
      findSearchTags(cards);
    }
  }

  onSumbit = e => {
    this.props.tagAddedToTaglist(this.refValue.current.props.value);
    this.props.changeTerm("");
  };

  onChange = e => {
    this.props.changeTerm(e);
  };
  render() {
    const { variableTags } = this.props;

    return (
      <div>
      <Popover placement="topLeft"  content={"Для добавления тега нажимите на значок \'поиск\'"}>
        <AutoComplete
          ref={this.refValue}
          className="smart-search-panel"
          placeholder="Поиск по тегам и названиям"
          onChange={this.onChange}
          value={this.props.term}
          dataSource={variableTags}
          filterOption={(inputValue, option) =>
            option.props.children
              .toUpperCase()
              .indexOf(inputValue.toUpperCase()) !== -1
          }
        >
       
          <Input
          content={"hello"}
            suffix={
              <Icon
                onClick={value => this.onSumbit(value)}
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
}

const mapStateToProps = ({ term, cards, variableTags }) => {
  return {
    term,
    cards,
    variableTags
  };
};
const mapDispatchToProps = {
  tagAddedToTaglist,
  changeTerm,
  findSearchTags
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmartSeacrhPanel);
