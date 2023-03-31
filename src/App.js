import "./App.css";
import React, { useEffect, useState } from "react";
import { MovieList } from "../src/MovieList/MovieList";
import { Header } from "../src/Header/Header";
import { SearchTitle } from "../src/SearchTitle/SearchTitle";
import { SearchYear } from "../src/SearchYear/SearchYear";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [searchByYear, setSearchByYear] = useState(0);

  useEffect(() => {
    fetch(
      //try /movies or /reviews
      `https://us-central1-beacon-fe-worksample-api.cloudfunctions.net/app/movies`
    )
      .then((resp) => resp.json())
      .then((resp) => resp.sort((a, b) => a.title.localeCompare(b.title)))
      .then((resp) => setMovieList(resp));
  }, []);

  const filteredSearch = searchStr.length
    ? movieList.filter(({ title }) => title.toLowerCase().includes(searchStr))
    : searchByYear > 0
    ? movieList.filter(({ year }) => searchByYear === year - (year % 10))
    : movieList;
  console.log(movieList);
  return (
    <div className="App">
      <Header />
      <div className="searchSetting">
        <SearchTitle
          onSearch={(e) => {
            setSearchStr(e.toLowerCase());
          }}
        />
        <SearchYear
          movieList={movieList}
          onYearSelect={(year) => setSearchByYear(year)}
        />
      </div>

      <MovieList movieList={filteredSearch} />
    </div>
  );
}

export default App;
