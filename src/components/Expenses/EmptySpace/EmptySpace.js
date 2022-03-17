import React from "react";

import "./EmptySpace.css";
import emptySpace from "../../../images/empty-space.svg";

const EmptySpace = () => {
  return (
    <div className="empty-space">
      <img src={emptySpace} alt="teste" />
      <h1 className="empty-space__title">
        Ooopa! Parece que ainda não existem registros por aqui :C
      </h1>
      <p className="empty-space__text">
        Adicione sua primeira despesa pelo formulário acima!
      </p>
    </div>
  );
};

export default EmptySpace;
