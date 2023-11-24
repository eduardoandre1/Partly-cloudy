import './sideLeft.css';

import SearchBar from './menu/searchbar';
import Title from './menu/title';
function MenuLeft() {
  return (
    <div className="Menu_box">
      <Title />
      <SearchBar />
    </div>
  );
}

export default MenuLeft;