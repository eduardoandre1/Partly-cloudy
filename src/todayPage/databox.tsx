import { useContext } from 'react';
import styled from 'styled-components';

import ProviderContect from '../provider';

function DataBox() {
  const global = useContext(ProviderContect);
  return (
    <Databox>
      <div>
        <h2>minima</h2>
        <h1>{global.apiRespost ? global.apiRespost.main.temp_min : '--'}</h1>
      </div>
      <div>
        <h2>maxima</h2>
        <h1>{global.apiRespost ? global.apiRespost.main.temp_max : '--'}</h1>
      </div>
      <div>
        <h2>umidade</h2>
        <h1>{global.apiRespost ? global.apiRespost.main.humidity : '--'}</h1>
      </div>
      <div>
        <h2>velocidade do vento</h2>
        <h1>{global.apiRespost ? global.apiRespost.wind.speed : '--'}</h1>
      </div>
    </Databox>
  );
}
export default DataBox;
const Databox = styled.div`
  width: 1166px;
  height: 486px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr) 2;

  padding-left: 50px;
  padding-top: 60px;
  div {
    width: 500px;
    height: 180px;
    background-color: rgba(77, 68, 148, 1);
    border-radius: 15px;
    display: flex;
    justify-content: flex-start;
    text-align: start;
    align-items: start;
    flex-direction: column;

    padding-left: 15px;
    h1 {
      color: #fff;
      font-family: Poppins;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: 1px; /* 75% */
    }
    h2 {
      margin-top: 70px;
      color: #fff;
      font-family: Poppins;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 1px; /* 109.091% */
    }
  }
`;
