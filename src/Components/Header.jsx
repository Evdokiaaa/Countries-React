import React from "react";
import { Container } from "./Container";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";
const HeaderEl = styled.header``;
const HeaderContainer = styled.div``;
const Title = styled.a.attrs({
  href: "/",
})``;
const ThemeSwitcher = styled.div``;
export default function Header() {
  return (
    <HeaderEl>
      <Container>
        <HeaderContainer>
          <Title>Where is the world?</Title>
          <ThemeSwitcher>
            <IoMoon />
            LightTheme
          </ThemeSwitcher>
        </HeaderContainer>
      </Container>
    </HeaderEl>
  );
}
