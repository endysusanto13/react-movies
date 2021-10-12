import * as React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";

import { StarIcon as StarSolid } from "@heroicons/react/solid";
import { StarIcon as StarOutline } from "@heroicons/react/outline";

import { useCreateComment } from "domains/movies";
import { Button } from "components/button";


const validationSchema = Yup.object({
  content: Yup.string().required("Unable to submit empty comment."),
});

export const AddComment = ({ movieId, userName }) => {
  const textAreaRef = React.useRef();
  const createComment = useCreateComment();
  const [rating, setRating] = React.useState(0);
  
  const formik = useFormik({
    initialValues: {
      movieId,
      content: "",
    },
    validationSchema,
    onSubmit: (values) => {
      createComment.mutate(
        {
          ...values,
          rating
        },
        {
          onSuccess: () => {
            formik.resetForm();
            setRating(0);

            if (textAreaRef.current) {
              textAreaRef.current.focus();
            }
          },
        }
      );
    },
  });

  return(
    <div className="flex flex-col space-y-2 bg-indigo-50 p-4 rounded-md">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-row justify-between items-center">
          <span className="text-base font-bold pl-2">{userName}</span>
          <span className="flex flex-row justify-center items-center">
            {Array(5).fill("")
              .map((_, index) => {
                if (index < rating) { return <StarSolid 
                  onMouseEnter={() => setRating(index+1)}
                  className={"w-8 h-8 text-yellow-300"} key={index}/>}
                  
                else { return <StarOutline 
                  onMouseEnter={() => setRating(index+1)}
                  className={"w-8 h-8 text-yellow-300"} key={index}/>}
              })
            }
            <span className={"text-lg text-black font-bold pl-2"}>{rating}</span>
            <span className={"text-base text-black"}>/5</span>
          </span>
        </div>
            {rating === 0 && (
              <div className="flex flex-row justify-end pl-2 text-base text-red-400 italic">
                Please rate the movies as well!
              </div>
            )}
        <textarea
          name="content"
          id="content"
          className="h-24 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          placeholder="Enter comments here..."
          value={formik.values.content}
          onChange={formik.handleChange}
          ref={textAreaRef}
          onBlur={formik.handleBlur}
          disabled={createComment.isLoading}
        />
        {formik.touched.content && formik.errors.content && (
          <div className="pl-2 block text-base text-red-500">
            {formik.errors.content}
          </div>
        )}
        <div className="flex flex-row justify-end pt-2">
          <Button
            type="submit"
            variant="primary"
            className="h-9 bg-indigo-400"
            disabled={rating === 0 || createComment.isLoading}
          >
            Add Commment
          </Button>
        </div>
        
      </form>
    </div>
  );
}

AddComment.propTypes = {
  movieId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};