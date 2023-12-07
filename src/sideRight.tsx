import styled from 'styled-components';

import Databox from './todayPage/databox';
import SwitchPage from './todayPage/switchpage';
import Title from './todayPage/title';
function Page() {
  return (
    <PageStyle>
      <SwitchPage />
      <Title />
      <Databox />
    </PageStyle>
  );
}
const PageStyle = styled.div`
  background-color: #efefef;
  height: 100vh;
  width: 1246px;
`;
export default Page;
