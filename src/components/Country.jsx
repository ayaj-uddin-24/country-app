const Country = (props) => {
  const { flags, name, capital, area, population } = props.country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };

  return (
    <div className="country">
      <img src={flags.png} alt={flags.alt} />
      <h3>Name : {name.common}</h3>
      <h3>Capital : {capital}</h3>
      <h3>Area : {area}</h3>
      <h3>Population : {population}</h3>
      <button
        className="btn"
        onClick={() => {
          handleRemoveCountry(name.common);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Country;
