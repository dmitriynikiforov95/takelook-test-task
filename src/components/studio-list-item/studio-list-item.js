import React from "react";

import { Card } from "antd";

import s from "./studio-list-item.module.css";

const { Meta } = Card;

const StudioListItem = ({ studio }) => {

  const { name, view, price, params } = studio;

  const comma = ",";

  const tagsInfo = params.length === 0 ? "теги отсутствуют" : "теги:";

  return (
    <Card
      style={{width: "240px"}}
      bodyStyle={{ padding: "12px", flexGrow: 1 }}
      cover={<img alt={name} src={view} width="240" height="185" />}>
      <Meta title={name} />
      <div className={s.price}>{`${price} р`}</div>
      <ul className={s.tagList}>
        <span className={s.tagsInfo}>{tagsInfo}</span>
        {params.map((tag, idx) => (
          <li className={s.tagListItem} key={idx}>
            {"#"}
            {tag}
            <span className={s.tagListComma}>{comma}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default StudioListItem;
