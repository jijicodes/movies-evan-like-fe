import React from "react";

export const MovieList = ({ movieList }) => {
  return (
    <div>
      {movieList.map(({ id, score, title, year, url }) => (
        <ul key={id}>
          <li>
            <div className="movieRow">
              {score * 100}%{" "}
              <a rel="noreferrer" href={url} target="_blank">
                {title}
              </a>{" "}
              {year}
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};
