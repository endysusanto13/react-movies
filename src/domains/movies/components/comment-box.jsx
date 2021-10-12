import * as React from "react";
import PropTypes from "prop-types";
import { StarRating } from "components/star-rating"

export const CommentBox = ({ userName, rating, content, children }) => {
  return(
    <div className="flex flex-col space-y-2 bg-indigo-50 p-4 rounded-md">
      <div className="flex flex-row justify-between items-center">
        <span className="text-base font-bold pl-2">{userName}</span>
        <StarRating 
          variant="yellow"
          size="8"
          starNum={rating}
          fontSize="normal"
        />
      </div>
      <span className="py-4 px-4 text-base bg-white rounded-md leading-tight">
        {content}
      </span>
      <div>{children}</div>
    </div>
  );
}

CommentBox.propTypes = {
  userName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  children: PropTypes.node,
};