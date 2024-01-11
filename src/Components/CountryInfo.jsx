import React from "react";
import styled from "styled-components";
import { searchByCode } from "../api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CountryInfoSection = styled.section`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
  align-items: center;
  @media screen and (max-width: 1024px) {
    grid-template-columns: none;
  }
`;

const CountryImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: contain;
  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`;
const CountryInfoTitle = styled.h1``;
const CountryInfoBlock = styled.div``;
const CountryInfoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 30px;
  padding: 0;
  @media screen and (max-width: 596px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const CountryInfoListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 12px;
  & > h4 {
    color: var(--color-text);
    font-weight: var(--fw-bold);
    margin: 0;
    text-transform: capitalize;
  }
  & > span {
    font-weight: var(--fw-normal);
  }
`;
const CountryInfoBorders = styled.div`
  padding-top: 40px;
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;
const CountryInfoBordersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;
const CountryBorder = styled.span`
  cursor: pointer;
  background: var(--color-elements);
  padding: 10px 15px;
  box-shadow: var(--shadow);
`;
const CountryInfo = (country) => {
  const navigate = useNavigate();
  const {
    flags,
    name = "No Data",
    population = "No Data",
    region = "No Data",
    subregion = "No Data",
    capital = "No Data",
    tld = "No Data",
    currencies = [],
    languages = [],
    borders = [],
  } = country;
  const [neighbors, setNeighbors] = React.useState([]);
  const nativeName = Object.values(name.nativeName)[0].official;
  const lastLanguage = Object.values(languages).pop();
  console.log(country);
  React.useEffect(() => {
    axios.get(searchByCode(borders)).then(({ data }) => setNeighbors(data));
  }, [borders]);
  console.log(neighbors);

  return (
    <CountryInfoSection>
      <CountryImage src={flags.png} alt={name.common} />
      <div style={{ textAlign: "start" }}>
        <CountryInfoTitle>{name.common}</CountryInfoTitle>
        <CountryInfoBlock>
          <CountryInfoList>
            <CountryInfoListItem>
              <h4>
                {/*Looks like a component with text capitalize*/}
                Native Name:
              </h4>
              <span>{nativeName}</span>
            </CountryInfoListItem>
            <CountryInfoListItem>
              <h4>Population:</h4>
              <span>{population.toLocaleString()}</span>
            </CountryInfoListItem>
            <CountryInfoListItem>
              <h4>Region:</h4>
              <span>{region}</span>
            </CountryInfoListItem>
            <CountryInfoListItem>
              <h4>Sub Region:</h4>
              <span>{subregion}</span>
            </CountryInfoListItem>
            <CountryInfoListItem>
              <h4>Capital:</h4>
              <span>{capital}</span>
            </CountryInfoListItem>
            <CountryInfoListItem>
              <h4>Top Level Domain:</h4>
              <span>{tld[0]}</span>
            </CountryInfoListItem>
            <CountryInfoListItem>
              <h4>Currencies: </h4>
              {Object.values(currencies).length ? (
                Object.values(currencies).map((currency, i) => (
                  <span key={i}>{currency.name}</span>
                ))
              ) : (
                <span>No Data</span>
              )}
            </CountryInfoListItem>
            <CountryInfoListItem>
              <h4>Languages: </h4>
              {Object.values(languages).length ? (
                Object.values(languages).map((language, i) => (
                  <span key={i}>
                    {language !== lastLanguage
                      ? language + ","
                      : lastLanguage + "."}
                  </span>
                ))
              ) : (
                <span>No data</span>
              )}
            </CountryInfoListItem>
          </CountryInfoList>
          {!borders.length ? (
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <h4>Border Countries</h4>
              <span>There are no border countries</span>
            </div>
          ) : (
            <CountryInfoBorders>
              <h4>Border Countries:</h4>
              <CountryInfoBordersContainer>
                {neighbors.map((country, i) => (
                  <CountryBorder
                    key={i}
                    onClick={() => navigate(`/country/${country.name.common}`)}
                  >
                    {country.name.common}
                  </CountryBorder>
                ))}
              </CountryInfoBordersContainer>
            </CountryInfoBorders>
          )}
        </CountryInfoBlock>
      </div>
    </CountryInfoSection>
  );
};

export default CountryInfo;
