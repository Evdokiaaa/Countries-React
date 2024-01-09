import Select from "react-select";
import styled from "styled-components";
const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provider) => ({
      //Наша менюшка, которая показывает выбранную опцию
      ...provider,
      backgroundColor: "var(--color-elements)",
      color: "var(--color-text)",
      borderRadius: "12px",
      height: "50px",
    }),
    option: (prodiver, state) => ({
      //Показывает все опции
      ...prodiver,
      cursor: "pointer",
      color: "var(--color-text)",
      backgroundColor: state.isSelected
        ? "var(--color-bg)"
        : "var(--color-elements)",
    }),
  },
})`
  width: 200px;
  border-radius: 12px;
  font-family: var(--family);
  border: none;

  & input {
    padding-left: 5px;
  }
  & * {
    color: var(--color-text) !important;
  }
  & div[role="listbox"] {
    padding: 0px;
  }
`;
export default CustomSelect;
