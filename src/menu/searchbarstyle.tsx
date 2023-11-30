import styled from 'styled-components';

import SearchBar from './searchbar';

const BarStyle = styled.div`
  margin-top: 72px;
  width: 500px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #ededef;
  padding-left: 25px;
  box-shadow: 0px 24px 48px 0px rgba(49, 79, 124, 0.08);
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // eslint-disable-next-line prettier/prettier
  input {
    all: unset;
    margin-left: 70px;
    color: #424243;
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;
export default BarStyle;
