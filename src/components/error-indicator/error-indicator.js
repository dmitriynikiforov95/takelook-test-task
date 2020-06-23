import React from "react";
import s from "./error-indicator.module.css";

const ErrorIndicator = () => {
  return (
    <div className={s.container}>
      <div className={s.messageWrapper}>
        <div className={s.title}>Ошибка</div>
        <div>Студии не загружены <br/> Перезагрузите страницу!</div>
      </div>
    </div>
  );
};

export default ErrorIndicator;
