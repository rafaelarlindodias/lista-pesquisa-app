import React from 'react';

function ListItem ({ onChange, onDelete, value }) {

  let cor = 'black';

  let palavras = [{palavra: 'escola'},{palavra: 'ler'}];

  let nome = palavras.find(function(nome) {
      return value.includes(nome.palavra);
  });

  if (nome) {
    cor = 'blue';
  }

  return (
    <div className="Item-container">
      <input style={{color: cor}}
        className="Item-field"
        value={value}
        onChange={onChange}
      />
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default ListItem;
