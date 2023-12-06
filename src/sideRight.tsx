import './sideRight.css';
import Databox from './todayPage/databox';
import Title from './todayPage/title';
import SwitchPage from './todayPage/switchpage';
function Page() {
  return (
    <div className="page">
      <SwitchPage /> 
      <Title />
      <Databox />
    </div>
  );
}
export default Page;
