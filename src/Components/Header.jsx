import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import styled from "styled-components";
const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background: var(--color-elements); //bg header
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`;
const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--color-text);
  font-size: var(--fz-home);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;
const ThemeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fz-home);
  font-weight: var(--fw-bold);
  text-transform: capitalize;
  display: flex;
  cursor: pointer;
`;
export default function Header() {
  const [theme, setTheme] = React.useState("light");
  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");
  React.useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <HeaderEl>
      <Container>
        <HeaderContainer>
          <Title>Where is the world?</Title>
          <ThemeSwitcher onClick={changeTheme}>
            {theme === "light" ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}
            <span style={{ "margin-left": "10px" }}>{theme} Mode</span>
          </ThemeSwitcher>
        </HeaderContainer>
      </Container>
    </HeaderEl>
  );
}
