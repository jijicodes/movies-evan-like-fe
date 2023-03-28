import "./App.css";
import React, { useEffect, useState } from "react";
import { MovieList } from "../src/MovieList/MovieList";
import { Header } from "../src/Header/Header";
import { SearchTitle } from "../src/SearchTitle/SearchTitle";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(
      //try /movies or /reviews
      `https://us-central1-beacon-fe-worksample-api.cloudfunctions.net/app/movies`
    )
      .then((resp) => resp.json())
      .then((resp) => resp.sort())
      .then((resp) => setMovieList(resp));
  }, []);

  // console.log(resp.map((movie) => movie.title).sort());

  return (
    <div className="App">
      <Header />
      <SearchTitle onSearch={(e) => console.log(e)} />
      <MovieList movieList={movieList} />
    </div>
  );
}

export default App;
