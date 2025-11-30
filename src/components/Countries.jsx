import Country from "./Country";
import { v4 as uuidv4 } from "uuid";

const Countries = ({ countries, onRemoveCountry }) => {
  return (
    <div className="countries">
      {countries.map((country, index) => {
        return (
          <Country
            key={index}
            id={uuidv4()}
            onRemoveCountry={onRemoveCountry}
            country={country}
          />
        );
      })}
    </div>
  );
};

export default Countries;
