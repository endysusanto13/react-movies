import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ListingMovie = ({ movieId, posterUrl, title, overview}) => {
  return(
    <div className="flex flex-col justify-between">
      <Link to={`/movie/${movieId}`}>
        <img 
          src={posterUrl} 
          alt=""
          className="flex-grow"
        />
      </Link>
        <span className="flex-grow bg-indigo-600 max-h-4"></span>
        {/* Tailwind line-clamp do not allow center vertical alignment */}
        <span className="flex text-center font-bold bg-indigo-600 text-white line-clamp-2 py-1">
          {title}
        </span>
        <span className="flex-grow bg-indigo-600 max-h-4"></span>
        <span className="font-light text-sm text-justify line-clamp-4 text-indigo-900 leading-4">
          {overview}
        </span>
        <span className="flex-grow"></span>
      </div>
  );
};

ListingMovie.propTypes = {
  movieId: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};