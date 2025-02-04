import React from "react";
import { ApiResponse, CountryDetailsType } from "../../types";

interface Props {
  country: CountryDetailsType;
  countries: ApiResponse[];
}

const CountryDetails: React.FC<Props> = ({ country, countries }) => {
  const getBorderCountryNames = (
    borders: string[],
    allCountries: ApiResponse[],
  ) => {
    const borderCountries: string[] = [];

    for (const code of borders) {
      for (const country of allCountries) {
        if (country.alpha3Code === code) {
          borderCountries.push(country.name);
          break;
        }
      }
    }
    return borderCountries;
  };

  const borders = country.borders
    ? getBorderCountryNames(country.borders, countries)
    : [];

  return (
    <div className="col-8 p-2">
      <div className="d-flex justify-content-between align-items-center gap-5">
        <h1>{country.name}</h1>
        <div className="width: 50%">
          <img
            src={country.flag}
            alt={`Flag ${country.name}`}
            className="img-fluid"
          />
        </div>
      </div>
      <hr />
      <div className="mt-5">
        <h5>Capital: {country.capital}</h5>
        <h5>Population: {country.population} people</h5>
      </div>
      <hr />
      Border with:
      <ul>
        {borders.length > 0 ? (
          borders.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>No borders</p>
        )}
      </ul>
    </div>
  );
};

export default CountryDetails;
