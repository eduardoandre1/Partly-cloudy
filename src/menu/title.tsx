import casaco from '../resources/casaco.png';

import styled from 'styled-components';
function Title() {
  const Titlestyle = styled.div`
    width: 536px;
    height: 120px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: normal;
    .img {
      width: 120px;
      height: 120px;
      flex-shrink: 0;
      background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    }
    h1 {
      color: #222;
      font-family: Poppins;
      font-size: 62px;
      font-style: normal;
      font-weight: 600;
      line-height: 48px;
    }
  `;
  return (
    <Titlestyle>
      <img src={casaco} alt="coath" />
      <h1>Levo um casaquinho?</h1>
    </Titlestyle>
  );
}
export default Title;
