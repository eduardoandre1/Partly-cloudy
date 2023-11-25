import styled from 'styled-components';

const TemperatureBarStyle = styled.div`
  width: 426px;
  height: 224px;
  flex-shrink: 0;
  div {
    background: #ededed;
    width: 395px;
    height: 5px;
  }
  h1 {
    width: 144px;
    height: 105px;
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
    color: #222;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px; /* 150% */
    text-align: center;
  }
`;
function TemperatureMeter() {
  return (
    <TemperatureBarStyle>
      <h1>31ºC</h1>
      <h2>Céu aberto</h2>
      <div></div>
    </TemperatureBarStyle>
  );
}
export default TemperatureMeter;
