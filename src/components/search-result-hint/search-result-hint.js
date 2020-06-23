import React from "react";
import s from "./search-hint.module.css";

const SearchResultHint = () => {
    return (
        <p className={s.hint}>
            К сожалению, поиск по Вашему запросу не дал результатов. <br />Пожалуйста, уточните критерии поиска и повторите попытку.
      </p>
    )
}

export default SearchResultHint;