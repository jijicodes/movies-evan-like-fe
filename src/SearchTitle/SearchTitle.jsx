import React from "react";

export const SearchTitle = ({ onSearch }) => {
  return (
    <div className="search">
      <label>Title Contains: </label>
      <input
        type="search"
        placeholder="search by title"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
