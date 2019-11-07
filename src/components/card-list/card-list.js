import React, { Component } from "react";
import { connect } from "react-redux";

import { withTakeLookService } from "../hoc/";
import { cardsLoaded } from "../../actions";
import Spinner from "../spinner/";

import CardListItem from "../card-list-item";
import "./card-list.css";

class CardList extends Component {
  componentDidMount() {
    const { takelookService, cardsLoaded } = this.props;
    takelookService.getData().then(data => cardsLoaded(data));
  }

  render() {
    const { cards } = this.props;
    // if (loading) {
    //   return <Spinner />;
    // }
    return (
      <ul className="card-list">
        {cards.map((card, idx) => {
          return (
            <li id={idx} className="card-list__item">
              <CardListItem card={card} />
            </li>
          );
        })}
      </ul>
    );
  }
}


const filterCards = (cards, selectedPriceRange, term, tags) => {
  const searchByTerm = (cards, term) => {
    return term.length === 0
      ? cards
      : cards.filter(
          item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        );
  };

  let newCards = searchByTerm(cards, term).filter(
    item =>
      item.price >= selectedPriceRange.min &&
      item.price <= selectedPriceRange.max
  );

  return tags.length == 0
    ? newCards
    : newCards.filter(card => {
        for (let params of card.params) {
          if (!(tags.findIndex(i => i === params) === -1)) {
            return true;
          }
        }
      });
};

const mapStateToProps = ({
  cards,
  loading,
  selectedPriceRange,
  term,
  tags
}) => {
  return {
    cards: filterCards(cards, selectedPriceRange, term, tags),
    loading
  };
};

const mapDispatchToProps = {
  cardsLoaded
};

export default withTakeLookService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CardList)
);
