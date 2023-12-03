import { useContext } from 'react';
import styled from 'styled-components';

import ProviderContect from '../provider';

function Title() {
  const global = useContext(ProviderContect);
  return (
    <TitleStyle>
      <h1>{global.apiRespost ? global.apiRespost.name : ' ---- '}</h1>
      <p>
        lat: {global.apiRespost ? global.apiRespost.coord.lat : '--'} lon:{' '}
        {global.apiRespost ? global.apiRespost.coord.lon : '--'}
      </p>
    </TitleStyle>
  );
}

export default Title;
const TitleStyle = styled.div`
  padding-left: 45px;
  h1 {
    color: #222;

    font-family: Poppins;
    font-size: 150px;
    font-style: normal;
    font-weight: 400;
    line-height: 1px;
  }
  p {
    color: #222;

    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 400; /* 200% */
    line-height: 3px;
  }
`;
