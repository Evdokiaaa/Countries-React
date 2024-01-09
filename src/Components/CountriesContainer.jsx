import styled from "styled-components";
const CountriesWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  padding: 24px 0;
`;
const CountriesContainer = ({ children }) => {
  return <CountriesWrapper>{children}</CountriesWrapper>;
};

export default CountriesContainer;
