import './App.css';

import React, { useState } from 'react';

import MenuLeft from './side-left';
import Page from './sideRight';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="conteiner">
      <MenuLeft />
      <Page />
    </div>
  );
}

export default App;
