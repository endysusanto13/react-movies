import * as React from "react";
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@heroicons/react/outline"
import { useListings, NavBar, Footer, ListingMovie } from "domains/movies";
import { NumberLabel } from "components/number-label";

export const Movies = () => {
  const { data: listings, page, setPage } = useListings();

  return(
    // CONTAINER - WHOLE PAGE
    <div className="container max-w-full mx-auto bg-indigo-100">
      <NavBar>
        <div className="flex flex-row items-center justify-center space-x-4">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <ArrowCircleLeftIcon className="w-8 h-8 text-white"/>
          </button>
          <NumberLabel
            type=""
            variant="primary"
            className="w-1/12 text-base"
          >
            {page}
          </NumberLabel>
          <button
            type="button"
            onClick={() => setPage(page + 1)}
          >
            <ArrowCircleRightIcon className="w-8 h-8 text-white"/>
          </button>
        </div>
      </NavBar>
      {/* BODY SECTION */}
      <div className="container max-w-5xl mx-auto pt-24 pb-12"> 
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-x-12 gap-y-16">
          {listings &&
            listings.map((movie) => (
              <ListingMovie
                posterUrl={movie.posterUrl}
                title={movie.title}
                overview={movie.overview}
                movieId={movie._id}
                key={movie._id}
              />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

