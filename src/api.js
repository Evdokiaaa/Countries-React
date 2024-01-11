const BASE_API = "https://restcountries.com/v3.1/";
export const ALL_COUNTRIES = BASE_API + "all";
export const searchByCountry = (name) => BASE_API + "name/" + name;
export const searchByCode = (codes) =>
  BASE_API + `alpha?codes=${codes.join(",")}`;
