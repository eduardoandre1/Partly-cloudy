import { useState } from 'react';
import styled from 'styled-components';
function SwitchPage() {
    const [page,SetPage] = useState({today:true,nextDays:false})
    return (
        <SwitchPageStyle>
            <button style={{color:page.today?'black':'gray'}} onClick={()=>{SetPage({today:true,nextDays:false})}}>Hoje</button>
            <button style={{color:page.nextDays?'black':'gray'}} onClick={()=>{SetPage({today:false,nextDays:true})}}>Próximos dias</button>
        </SwitchPageStyle>)
}

const SwitchPageStyle = styled.div`
  width: 100%;
  height: 165px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  button {
    all:unset;
    border: none;
    color: #222;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
    margin-right: 72px;
    margin-left: 50px;
  }
`;
export default SwitchPage
