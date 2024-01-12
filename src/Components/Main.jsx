import { Container } from "./Container";
import styled from "styled-components";
const Wrapper = styled.main`
  padding: 24px 0;
  @media screen and (max-width: 767px) {
    padding: 12px 0;
  }
`;
const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Main;
