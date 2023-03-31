import React, { useState } from "react";

const MovieListItem = ({ score, title, year, url, synopsis, cover }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <ul className="movieRow">
      <li>
        <div
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {score * 100}%{" "}
          <a
            onClick={(e) => e.stopPropagation()}
            rel="noreferrer"
            href={url}
            target="_blank"
          >
            {title}
          </a>{" "}
          {year}
        </div>
        {expanded ? (
          <div className="description">
            <img src={cover} alt="movie cover"></img>
            {synopsis}
          </div>
        ) : (
          <div></div>
        )}
      </li>
    </ul>
  );
};

export default MovieListItem;
