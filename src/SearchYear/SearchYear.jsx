import React from "react";

const yearToDecade = (n) => n - (n % 10);

const optionByDecade = (acc, curr) =>
  acc.includes(curr) ? acc : [...acc, curr];

export const SearchYear = ({ movieList, onYearSelect }) => {
  const decadeOptions = movieList
    .map(({ year }) => year)
    .map(yearToDecade)
    .reduce(optionByDecade, [])
    .sort()
    .map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));

  return (
    <div className="search">
      <label>Decade:</label>
      <select
        onChange={(e) => {
          onYearSelect(Number(e.target.value));
        }}
      >
        {[<option>select year</option>, ...decadeOptions]}
      </select>
    </div>
  );
};
