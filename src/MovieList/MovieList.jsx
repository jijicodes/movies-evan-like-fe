import React from "react";
import MovieListItem from "../MovieListItem/MovieListItem";

export const MovieList = ({ movieList }) => {
  return (
    <div style={{ paddingLeft: "none" }}>
      {movieList.map((movieInfo) => (
        <MovieListItem key={movieInfo.id} {...movieInfo} />
      ))}
    </div>
  );
};
