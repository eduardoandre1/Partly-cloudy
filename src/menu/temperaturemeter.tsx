import styled from 'styled-components';

const TemperatureBarStyle = styled.div`
width: 426px;
height: 224px;
flex-shrink: 0;
div{
    background: #EDEDED;
    width: 395px;
height: 5px;
}
h1 {
    display: flex;
width: 144px;
height: 105px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: #EC6E4C;
font-family: Poppins;
font-size: 150px;
font-style: normal;
font-weight: 300;
line-height: 48px; /* 32% */
}

`
function TemperatureMeter(){
    return (<TemperatureBarStyle>
        <h1>31ºC</h1>
        <h2>Céu aberto</h2>
        <div></div>
    </TemperatureBarStyle>)
}