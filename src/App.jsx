import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Search from "./components/Search";
import "./style.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtered, setFiltered] = useState(countries);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://restcountries.com/v3.1/all?fields=name,population,capital,area,flags",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("Data loading is not successful!");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setCountries(data);
          setFiltered(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 1500);
  }, []);

  const handleRemoveCountry = (name) => {
    const filter = filtered.filter((country) => country.name.common !== name);
    setFiltered(filter);
  };

  const handleSearch = (searchValue) => {
    const newCountries = countries.filter((country) =>
      country.name.common.toLowerCase().startsWith(searchValue.toLowerCase())
    );
    setFiltered(newCountries);
  };

  return (
    <div>
      <h1>Search Country</h1>
      <Search onSearch={handleSearch} />
      <p>{isLoading ? "Data is loading..." : error}</p>
      {countries && (
        <Countries countries={filtered} onRemoveCountry={handleRemoveCountry} />
      )}
    </div>
  );
};

export default App;
