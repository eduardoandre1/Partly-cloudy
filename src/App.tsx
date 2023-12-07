import React, { useState } from 'react';
import styled from 'styled-components';

import ProviderContect from './provider';
import MenuLeft from './side-left';
import Page from './sideRight';

function App() {
  const [location, setlocation] = useState('');
  const [apiRespost, setApi] = useState('');
  const [isFarenheit, setFarenheit] = useState(false);
  return (
    <Conteiner>
      <ProviderContect.Provider
        value={{ location, setlocation, apiRespost, setApi, isFarenheit, setFarenheit }}
      >
        <MenuLeft />
        <Page />
      </ProviderContect.Provider>
    </Conteiner>
  );
}
const Conteiner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100dvw;
  height: 100dvh;
`;
export default App;
