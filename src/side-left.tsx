import './sideLeft.css';

import SearchBar from './menu/searchbar';
import TemperatureMeter from './menu/temperaturemeter';
import Title from './menu/title';
function MenuLeft() {
  return (
    <div className="Menu_box">
      <Title />
      <SearchBar />
      <TemperatureMeter />
    </div>
  );
}

export default MenuLeft;
