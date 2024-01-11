import axios from "axios";
import React from "react";
import Button from "../Components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { searchByCountry } from "../api";
import { IoArrowBack } from "react-icons/io5";
import CountryInfo from "../Components/CountryInfo";

export default function Details() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = React.useState(null);

  React.useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);
  return (
    <div>
      Details {name}
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {country && <CountryInfo {...country}></CountryInfo>}
    </div>
  );
}
