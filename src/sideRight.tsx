import './sideRight.css';
import axios from 'axios';
import { useState } from 'react';
function Page() {
  const [dadosapi, dad] = useState('0');
  //const api = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=brasil&APPID=${import.meta.env.VITE_KEY}&mode=json&units=metric`)
  //.then((response)=> console.log(response.d))
  //.catch((response)=> console.log(response.message))
  return (
    <div className="page">
     minimenu
     bloco titulo e subtitulo 
     bloco maximas e minimas
    </div>
  );
}
export default Page;
