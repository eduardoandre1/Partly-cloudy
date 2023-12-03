import { useContext } from 'react';
import styled from 'styled-components';
import image from '../resources/01d@2x 1.png'

import ProviderContect from '../provider';

function TemperatureMeter() {
  const global = useContext(ProviderContect);
  console.log(global.apiRespost);

  return (
    <TemperatureBarStyle>
      <Espaço>
        <img src={image} />
        <h1>{global.apiRespost ? parseInt(global.apiRespost.main.temp) + 'ºC' : '--'}</h1>
        <br />
      </Espaço>
      <h2>
        {global.apiRespost ? global.apiRespost.weather[0].description : ' no data '}
      </h2>
      <Line />
    </TemperatureBarStyle>
  );
}
export default TemperatureMeter;

const TemperatureBarStyle = styled.div`
  width: 426px;
  height: 490px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  img {
    height: 150px;
    width: 150px;
  }
  h1 {
    width: 100%;
    height: 90px;
    width: 130px;
    color: #ec6e4c;
    font-family: Poppins;
    font-size: 120px;
    font-style: normal;
    font-weight: 300;
    line-height: 48px; /* 32% */
    text-align: center;
  }
  h2 {
    margin-top: 95px;
    height: 42px;
    color: #222;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px; /* 150% */
    text-align: center;
    width: 100%;
  }
`;
const Espaço = styled.div`
display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    height: 90px;
    width: 490px;
`
const Line = styled.div`
 background: #ededed;
    width: 395px;
    height: 5px;
`