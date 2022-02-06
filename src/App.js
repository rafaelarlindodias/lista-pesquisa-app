import React, { useState } from 'react';
import './App.css';
import ListaItem from './components/ListaItem'
import NovoItemInput from './components/NovoItemInput'

function App () {
  const [itens, setitens] = useState([]);

  function addNovoItem(item) {
    const itensCopia = Array.from(itens);
    itensCopia.push({id: itens.length, value: item});
    setitens(itensCopia);
  }

  function updateItem({target}, indice) {
    console.log(indice)
    const itensCopia = Array.from(itens);
    itensCopia.splice(indice, 1, { id: indice, value: target.value });
    setitens(itensCopia);
  }

  function deleteItem(indice) {
    const itensCopia = Array.from(itens);
    itensCopia.splice(indice, 1);
    setitens(itensCopia);
  }
     
  return (
    <div className="App">
      <div className="App-header">
        <NovoItemInput onSubmit={addNovoItem} />
        {itens.map(({id, value}, indice) => (
          <ListaItem
            key={id}
            value={value}
            onChange={(event) => updateItem(event, indice)}
            onDelete={() => deleteItem(indice)}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
