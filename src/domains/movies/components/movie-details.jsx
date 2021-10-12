import * as React from "react";
import PropTypes from "prop-types";
import { formatDate } from "hooks/date-format";
import { useAuth, useUsername } from "domains/auth";
import { NavBar, Footer, AddComment, CommentBox, useListingDetails, useGetComments } from "domains/movies";
import { Button } from "components/button";
import { StarRating } from "components/star-rating"
import { useDeleteComments } from "domains/movies"

export const MovieDetails = ({ movieId }) => {
  const { status } = useAuth();
  const { data : movie } = useListingDetails(movieId);
  const { data : user } = useUsername();
  const { data : comments } = useGetComments(movieId);
  const deleteComment = useDeleteComments();

  let avgRating = (comments && comments.length !== 0) ? 
    (comments.reduce((total, comment) => total + Number(comment.rating), 0)) / comments.length
    : 0

  return(
    <div className="container max-w-full mx-auto bg-indigo-100">
      <NavBar/>
      
      {movie && (
        <div className="container max-w-5xl mx-auto pt-24 pb-12"> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            <div className="flex flex-col">
              <img src={movie.posterUrl} alt="" className=""/>
              <span className="w-full text-center font-bold bg-indigo-600 text-xl text-white py-2">
                {movie.title}
              </span>
              <span className="w-full text-center bg-indigo-400 text-base text-white py-2">
                Released Date: {formatDate(movie.releaseDate)} 
              </span>
              <StarRating 
                variant="yellow"
                size="14"
                starNum={avgRating}
                fontSize="big"
              />
              {comments && comments.length !== 0 &&
                <span className="w-full text-center text-base italic">
                    Out of {comments.length} ratings 
                </span>
              }
            </div>

            {/* 2nd and 3rd column */}
            <div className="col-span-2 z-0">
              <div className="relative">
                <img 
                  src={movie.backdropUrl} 
                  alt=""
                  className="rounded-md"
                />
                <div className="absolute inset-4 p-4 bg-opacity-90 bg-white rounded-md">
                  <table className={"font-serif text-indigo-900 text-xs md:text-sm lg:" + (movie.overview.length > 400 ? "text-base" : "text-lg")}>
                    <tbody>
                      <tr className="align-top">
                        <td className="w-1/4 font-bold pb-1">Movie Title:</td>
                        <td className="">{movie.title}</td>
                      </tr>
                      <tr className="align-top">
                        <td className="font-bold pb-1 ">Released Date:</td>
                        <td className="">{formatDate(movie.releaseDate)}</td>
                      </tr>
                      <tr className="align-top">
                        <td className="font-bold pb-1">Adult Content:</td>
                        <td>{!movie.adult ? "No" : "Yes"}</td>
                      </tr>
                      <tr className="align-top">
                        <td className="font-bold pb-1 ">Plot Overview:</td>
                        <td className="text-justify leading-snug">{movie.overview}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col pt-8 space-y-4">
                {status === "authenticated" && user &&
                  <AddComment
                    movieId={movieId}
                    userName={user.name}
                  />}

                {comments &&
                  comments.map((comment) => (
                    <CommentBox 
                      userName={comment.userName}
                      rating={comment.rating}
                      content={comment.content}
                      key={comment._id}
                    >
                      {user && status === "authenticated" && comment.userId === user.userId && (
                        <div className="flex flex-row justify-end pt-2">
                          <Button
                            type="submit"
                            variant="primary"
                            className="h-9 bg-indigo-400"
                            onClick={() => deleteComment.mutate({ commentId : comment._id})}
                          >
                            Delete Commment
                          </Button>
                        </div>
                      )}
                    </CommentBox>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
};