import { createContext, useContext } from 'react';

const ProviderContect = createContext();
const { Location, ApiData } = useContext(ProviderContect);

export default ProviderContect;
