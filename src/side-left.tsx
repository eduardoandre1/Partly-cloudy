import styled from 'styled-components';

import SearchBar from './menu/searchbar';
import SwitchsPage from './menu/switchs';
import TemperatureMeter from './menu/temperaturemeter';
import Title from './menu/title';
function MenuLeft() {
  return (
    <MenuLeftStyle>
      <Title />
      <SearchBar />
      <TemperatureMeter />
      <SwitchsPage />
    </MenuLeftStyle>
  );
}
export default MenuLeft;
const MenuLeftStyle = styled.div`
  background-color: white;
  width: 662px;
  height: 100%;
  padding: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
