import axios from 'axios';
import { useContext } from 'react';
import Swal from 'sweetalert2';

import ProviderContect from '../provider';
function searchBylocal() {
  const global = useContext(ProviderContect);
  const api = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${global.location}&APPID=${
        import.meta.env.VITE_KEY
      }&mode=json${!global.isfaisFarenheit ? '&units=metric' : ``}`,
    )
    .then((response) => global.setApi(response.data))
    .catch((response) => {
      return Swal.fire({
        icon: 'error',
        title: 'Não foi possivel concluir a busca!!!',
        text:
          response.staus === 500
            ? 'sevidor offline ou cheio tente mais tarde'
            : 'não foi possive achar sua localização',
        footer: `erro:${response.message}`,
      });
    });
}
export default searchBylocal;
