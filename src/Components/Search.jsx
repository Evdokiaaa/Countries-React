import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
const InputContainer = styled.label`
  display: flex;
  align-items: center;
  width: 250px;
  border-radius: 5px;
  padding: 10px 16px;
  margin-bottom: 16px;
  background: var(--color-elements);
`;
const Input = styled.input.attrs({
  placeholder: "Search for a country..",
})`
  color: var(--color-text);
  border: none;
  outline: none;
  margin-left: 16px;
  background: var(--color-elements);
`;
export default function Search({ search, setSearch }) {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search}></Input>
    </InputContainer>
  );
}
