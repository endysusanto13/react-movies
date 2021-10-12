import * as React from "react";
import { useQuery } from "react-query";
import { getMovieListings, getMovieDetails } from "../movies.service";

export const useListings = () => {
  const [page, setPage] = React.useState(1);

  const query = useQuery(["listings", page], () => getMovieListings(page), {
    staleTime: 3000,
  });

  return {
    ...query,
    page,
    setPage,
  };
};

export const useListingDetails = (listingId) => {
  return useQuery(
    ["listingDetails", listingId],
    () => getMovieDetails(listingId),
    {
      staleTime: 3000, 
    }
  );
};
