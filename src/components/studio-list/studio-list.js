import React from "react";

import StudioListItem from "../studio-list-item";

import s from "./studio-list.module.css";

const StudioList = ({ studios }) => (
  <ul className={s.list}>
    {studios.map((studio) => (
      <li key={studio.id} className={s.item}>
        <StudioListItem studio={studio} />
      </li>
    ))}
  </ul>
);

export default StudioList;
