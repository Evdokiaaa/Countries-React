import React from "react";
import Search from "./Search";
import CustomSelect from "./CustomSelect";
import styled from "styled-components";
const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 596px) {
    flex-direction: column;
    align-items: center;
  }
`;

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

export default function Controls({ onSearch }) {
  const [search, setSearch] = React.useState("");
  const [region, setRegion] = React.useState(null);
  React.useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(search, regionValue);
  }, [search, region]);

  return (
    <ControlsContainer>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        onChange={setRegion}
        value={region}
        isClearable
        isSearchable={false}
      />
    </ControlsContainer>
  );
}
