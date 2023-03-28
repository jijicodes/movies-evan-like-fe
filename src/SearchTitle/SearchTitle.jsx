import React from "react";

export const SearchTitle = ({ onSearch }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="search by title"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
