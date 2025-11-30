import { useState, useEffect } from "react";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText]);

  return (
    <div>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Country name : </label>
        <input
          type="text"
          placeholder="Enter country name"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
