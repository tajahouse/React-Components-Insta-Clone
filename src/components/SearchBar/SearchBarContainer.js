// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";
import ReactDom from 'react-dom';
import dummyData from "../../dummy-data";

const SearchBar = props => {
  console.log("Search props", props);
  const [searchName, setSearchName] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  
  const handleChange = e => {
    setSearchName(e.target.value);
  };
  // React.useEffect(()=> {
  //   const results =dummyData.filter(user =>
  //      user.username.toLowerCase().includes(searchName)
  //   );
    
  //   setSearchName(results);
  // }, );
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram fa-3x" />
        <p className= "logoText">
          Instagram
        </p>
      </div>
      <form className="search-form">
        <input
          type="search"
          placeholder="Search"
          value={searchName}
          onChange={handleChange}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
