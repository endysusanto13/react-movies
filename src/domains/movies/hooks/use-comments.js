import { useMutation, useQuery, useQueryClient } from "react-query";
import { useAuth } from "domains/auth";
import { getComments, createComment, deleteComments  } from "../movies.service";


export const useGetComments = (movieId) => {
  return useQuery(["commentsList", movieId], () => getComments(movieId), {
    staleTime: 3000,
  });
};

export const useCreateComment = () => {
  const { accessToken } = useAuth();

  const queryClient = useQueryClient();
  return useMutation(({ rating, movieId, content }) => createComment( { rating, movieId, content, accessToken }), {
    onSuccess: () => queryClient.invalidateQueries("commentsList"),
  });
};

export const useDeleteComments = () => {
  const { accessToken } = useAuth();

  const queryClient = useQueryClient();
  return useMutation(({ commentId }) => deleteComments( { commentId, accessToken }), {
    onSuccess: () => queryClient.invalidateQueries("commentsList"),
  });
};