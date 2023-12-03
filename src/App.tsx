import './App.css';

import axios from 'axios';
import React, { useState } from 'react';

import ProviderContect from './provider';
import MenuLeft from './side-left';
import Page from './sideRight';

function App() {
  const [location, setlocation] = useState('');
  const [apiRespost, setApi] = useState('');
  return (
    <div className="conteiner">
      <ProviderContect.Provider value={{ location, setlocation, apiRespost, setApi,isFarenheit:false}}>
        <MenuLeft />
        <Page />
      </ProviderContect.Provider>
    </div>
  );
}

export default App;
