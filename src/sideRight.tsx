import './sideRight.css';

import axios from 'axios';
import { useState } from 'react';
function Page() {
  const [dadosapi, dad] = useState('0');
  fetch(
    'api.openweathermap.org/data/2.5/weather?q=brasil&APPID=82f96befbfa06df59bd1989de91ed274&mode=json&units=metric',
  )
    .then((response) => response.statusText)
    .then((arrayBuffer) => console.log(arrayBuffer))
    .catch((respost) => console.log("erro"));
  const api = axios.get('api.openweathermap.org/data/2.5/weather?q='+'brasil'+'&APPID=82f96befbfa06df59bd1989de91ed274&units=metric')
  .then((response)=> console.log('axios done'))
  .catch((response)=> console.log(response.message))
  return (
    <div className="page">
      <h1>{dadosapi}</h1>
    </div>
  );
}
export default Page;
