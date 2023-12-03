import { useContext } from 'react';
import styled from 'styled-components';

import ProviderContect from '../provider';

function TemperatureMeter() {
  const global = useContext(ProviderContect);
  console.log(global.apiRespost);

  return (
    <TemperatureBarStyle>
      <>
        <h1>{global.apiRespost ? global.apiRespost.main.temp + 'ºC' : '--'}</h1>
        <br />
      </>
      <h2>
        {global.apiRespost ? global.apiRespost.weather[0].description : ' no data '}
      </h2>
      <div></div>
    </TemperatureBarStyle>
  );
}
export default TemperatureMeter;

const TemperatureBarStyle = styled.div`
  width: 426px;
  height: 412px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  div {
    background: #ededed;
    width: 395px;
    height: 5px;
  }
  h1 {
    width: 100%;
    height: 90px;
    flex-shrink: 0;
    color: #ec6e4c;
    font-family: Poppins;
    font-size: 150px;
    font-style: normal;
    font-weight: 300;
    line-height: 48px; /* 32% */
    text-align: center;
  }
  h2 {
    height: 42px;
    color: #222;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px; /* 150% */
    text-align: center;
  }
`;
