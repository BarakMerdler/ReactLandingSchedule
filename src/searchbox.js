import React from "react";
import "./style.css";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2 seachbox">
      <input
        className="pa3 ba"
        type="search"
        placeholder="שם עיר/מספר טיסה/חברת תעופה"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
