import './sideRight.css';
import axios from 'axios';
import { useState } from 'react';
function Page() {
  const [dadosapi, dad] = useState('0');
  const api = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=brasil&APPID=${import.meta.env.VITE_KEY}&mode=json&units=metric`)
  .then((response)=> dad(`${response.data.main.temp}`))
  .catch((response)=> console.log(response.message))
  return (
    <div className="page">
      <h1>{dadosapi}</h1>
    </div>
  );
}
export default Page;
