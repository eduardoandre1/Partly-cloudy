import './sideRight.css';

import axios from 'axios';
import { useState } from 'react';

import Databox from './todayPage/databox';
import Title from './todayPage/title';
function Page() {
  return (
    <div className="page">
      minimenu bloco 
      <Title />
      <Databox />
    </div>
  );
}
export default Page;
