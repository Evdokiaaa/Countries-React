import styled from "styled-components";
const Button = styled.button`
  color: var(--color-text);
  background: var(--color-bg);
  border: none;
  box-shadow: var(--shadow);
  border-radius: 8px;
  line-height: 2.5;
  padding: 0 20px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;
`;

export default Button;
