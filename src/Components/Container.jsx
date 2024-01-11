import styled from "styled-components";
export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
  @media screen and (max-width: 1440px) {
    max-width: 1024px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 767px;
  }
  @media screen and (max-width: 767px) {
    max-width: 596px;
  }
  @media screen and (max-width: 596px) {
    max-width: 320px;
  }
`;
