import React from "react";

import StudioListItem from "../studio-list-item";

import "./studio-list.css";

const StudioList = ({studios}) => {
  return (
    <ul className="card-list">
      {studios.map((studio, idx) => {
        return (
          <li key={idx} className="card-list__item">
            <StudioListItem studio={studio} />
          </li>
        );
      })}
    </ul>
  );
}
export default StudioList;

