import { useContext,useState } from 'react';
import Switch from 'react-switch';
import styled from 'styled-components';

import ProviderContect from '../provider';

function SwitchsPage() {
  const global = useContext(ProviderContect);
  const [fareheit,setfarenheit] = useState(false)
  const [darkmode,setdartmode] =useState(false)
  global.isfrareheit = false;
  global.darkMode = false;
  return (
    <div>
      <div>
      <Switch uncheckedIcon={false} checkedIcon={false} checked={fareheit} onChange={()=>setfarenheit(!fareheit)}/><span>°F</span>  
      </div>
      <div>
      <Switch uncheckedIcon={false} checkedIcon={false} checked={darkmode} onChange={()=>setdartmode(!darkmode)}/><span>darkmode</span> 
      </div>
      
    </div>
  );
}
export default SwitchsPage;
