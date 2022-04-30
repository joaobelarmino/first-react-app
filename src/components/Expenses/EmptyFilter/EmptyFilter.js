import React from 'react';
import emptyFilter from '../../../images/empty-filter.svg'

const EmptyFilter = () => {
  return (
    <div className="empty-space">
      <img src={emptyFilter} alt="Olhando para o vazio" />
      <h1 className="empty-space__title">
        Eita! Não encontramos despesas cadastradas nessa data :(
      </h1>
    </div>
  )
}

export default EmptyFilter;
