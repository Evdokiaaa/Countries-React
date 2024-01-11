import styled from "styled-components";
const CountriesWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  padding: 24px 0;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 596px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const CountriesContainer = ({ children }) => {
  return <CountriesWrapper>{children}</CountriesWrapper>;
};

export default CountriesContainer;
