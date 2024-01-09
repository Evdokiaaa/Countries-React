const BASE_API = "https://restcountries.com/v3.1/";
export const ALL_COUNTRIES = BASE_API + "all";
export const searchByACountry = (name) => BASE_API + "name/" + name;
