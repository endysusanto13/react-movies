import { getUserDetails, useAuthenticatedQuery } from "domains/auth";

export const useUsername = () => {
  const query = useAuthenticatedQuery("username", getUserDetails, {
    staleTime: 5000,
  });

  return {
    ...query
  };
};
