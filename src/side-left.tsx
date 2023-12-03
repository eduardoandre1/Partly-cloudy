import './sideLeft.css';

import SearchBar from './menu/searchbar';
import TemperatureMeter from './menu/temperaturemeter';
import Title from './menu/title';
import SwitchsPage from './menu/switchs';
function MenuLeft() {
  return (
    <div className="Menu_box">
      <Title />
      <SearchBar />
      <TemperatureMeter />
      <SwitchsPage />
    </div>
  );
}

export default MenuLeft;
