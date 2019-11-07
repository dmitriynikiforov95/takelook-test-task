import React from "react";

import { Card as AntdCard } from "antd";

import "./card-list-item.css";

const { Meta } = AntdCard;

const CardListItem = ({ card }) => {
  const { name, view, price, params } = card;

  const comma = ",";
  let tag = "теги:";

  if (params.length == 0) {
    tag = "теги отсутствуют"
  }
  
  return (
    <AntdCard className="card-list-item" cover={<img alt={name} src={view} />}>
      <Meta title={name} />
      <div className="card-list-item__price">{`${price} р.`}</div>
      <ul className="card-list-item__tag-list">
        <span className="span">{tag}</span>
        {params.map(i => (
          <li className="card-list-item__tag-list-item">
            {"#"}
            {i}
            <span class="card-list-item__tag-list-item-comma">{comma}</span>
          </li>
        ))}
      </ul>
    </AntdCard>
  );
};

export default CardListItem;
