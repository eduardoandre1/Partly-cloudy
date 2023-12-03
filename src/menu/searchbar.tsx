import axios from 'axios';
import { useContext } from 'react';

import ProviderContect from '../provider';
import BarStyle from './searchbarstyle';


function search(location) {
  const api = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location.location}&APPID=${
        import.meta.env.VITE_KEY
      }&mode=json${!location.isfaisFarenheit?'&units=metric':``}`,
    )
    .then((response) => location.setApi(response.data))
    .catch((response) => console.log(response.message));
}
function SearchBar() {
  const global = useContext(ProviderContect);
  return (
    <BarStyle>
      <svg
        onClick={() => search(global)}
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="40"
        viewBox="0 0 38 40"
        fill="none"
      >
        <path
          d="M17.508 29.0741C22.7625 29.0741 27.0221 24.4311 27.0221 18.7037C27.0221 12.9763 22.7625 8.33337 17.508 8.33337C12.2535 8.33337 7.9939 12.9763 7.9939 18.7037C7.9939 24.4311 12.2535 29.0741 17.508 29.0741Z"
          stroke="#8B9CAF"
          strokeWidth="1.55556"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.4006 31.6667L26.5464 28.5555"
          stroke="#8B9CAF"
          strokeWidth="1.55556"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        placeholder="Procure por uma cidade"
        value={global.location}
        onChange={(value) => global.setlocation(value.target.value)}
      />
    </BarStyle>
  );
}
export default SearchBar;