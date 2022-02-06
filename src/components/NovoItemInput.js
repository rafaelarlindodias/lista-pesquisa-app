import React, { useState } from 'react';

function NovoItemInput ({ onSubmit }) {

  const [novoItem, setNovoItem] = useState('');

  function inserirNovoItem({target}) {
    setNovoItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(novoItem);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          className="input"
          placeholder="Digite um novo item"
          onChange={inserirNovoItem}
        />
        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )
};

export default NovoItemInput;
