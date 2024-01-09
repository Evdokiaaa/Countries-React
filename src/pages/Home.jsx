import axios from "axios";
import React from "react";
import { ALL_COUNTRIES } from "../api";
import Controls from "../Components/Controls";
import CountriesContainer from "../Components/CountriesContainer";
import CountryCard from "../Components/CountryCard";
import { useNavigate } from "react-router-dom";

export default function Home({ countries, setCountries }) {
  const [filteredCountries, setFilteredCountries] = React.useState(countries);
  const navigate = useNavigate();

  const handleControls = (search, selectedRegion) => {
    let data = [...countries];
    //search - input value
    if (search) {
      data = data.filter((country) => country.name.common.includes(search));
    }
    if (selectedRegion) {
      data = data.filter((country) => country.region.includes(selectedRegion));
    }
    setFilteredCountries(data); // Обновляем отфильтрованные страны
  };
  React.useEffect(() => {
    if (!countries.length) {
      // Если countries пуст, делаем запрос на сервер
      axios
        .get(ALL_COUNTRIES)
        .then(({ data }) => setCountries(data)) //
        .catch((e) => console.log("An error occurred", e));
    }
  }, [countries, setCountries]);

  React.useEffect(() => {
    setFilteredCountries(countries); // Обновляем filteredCountries после получения новых данных
  }, [countries]);
  return (
    <>
      <Controls onSearch={handleControls} /> {/*children*/}
      <CountriesContainer>
        {filteredCountries.map((country) => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name.common,
            info: [
              {
                title: "Population",
                desc: country.population.toLocaleString(),
              },
              {
                title: "Region",
                desc: country.region,
              },
              {
                title: "Capital",
                desc: country.capital,
              },
            ],
          };
          return (
            <CountryCard
              key={country.name.common}
              {...countryInfo}
              onClick={() => navigate(`/country/${country.name.common}`)}
            />
          );
          // <CountryCard />
        })}
      </CountriesContainer>
    </>
  );
}
