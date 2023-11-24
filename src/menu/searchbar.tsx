import styled from 'styled-components';
const BarStyle = styled.div`
  margin-top: 72px;
  width: 500px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #ededef;
  padding-left: 25px;
  box-shadow: 0px 24px 48px 0px rgba(49, 79, 124, 0.08);
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // eslint-disable-next-line prettier/prettier
  h1{
    margin-left: 70px;
    color: #424243;
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;
function SearchBar() {
  return (
    <BarStyle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="40"
        viewBox="0 0 38 40"
        fill="none"
      >
        <path
          d="M17.508 29.0741C22.7625 29.0741 27.0221 24.4311 27.0221 18.7037C27.0221 12.9763 22.7625 8.33337 17.508 8.33337C12.2535 8.33337 7.9939 12.9763 7.9939 18.7037C7.9939 24.4311 12.2535 29.0741 17.508 29.0741Z"
          stroke="#8B9CAF"
          strokeWidth="1.55556"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.4006 31.6667L26.5464 28.5555"
          stroke="#8B9CAF"
          strokeWidth="1.55556"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h1>Procure por uma cidade</h1>
    </BarStyle>
  );
}
export default SearchBar;
