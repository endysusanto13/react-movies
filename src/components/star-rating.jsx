import cn from "classnames";
import PropTypes from "prop-types";
import { StarIcon as StarSolid } from "@heroicons/react/solid";
import { StarIcon as StarOutline } from "@heroicons/react/outline";

export const StarRating = ({ starNum, size, fontSize, outline, variant,  ...props }) => {
  const className = cn(
    "flex flex-row justify-center items-center",
    variant && classByVariant[variant],
    props.className
  );

  let textSize = fontSize === "big"
    ? ["text-2xl", "text-xl"] : ["text-lg", "text-base"];

  if (starNum === 0) {
    return <span className={"font-bold text-black flex flex-row justify-center items-center " + textSize[0]}>No Reviews Yet</span>
  }
  
  return (
    <span {...props} className={className} {...props}>
      {Array(Math.round(starNum)).fill("")
        .map((_, index) => {
          if (outline) { return <StarOutline className={"w-"+size + " h-"+size} key={index}/> }
          else { return <StarSolid className={"w-"+size + " h-"+size} key={index}/> }
        }) 
      }
      <span className={textSize[0] + " text-black font-bold pl-2"}>{Math.round(starNum * 100) / 100}</span>
      <span className={textSize[1] + " text-black"}>/5</span>
    </span>
  );
};

const classByVariant = {
  yellow: "text-yellow-300",
  red: "text-red-300",
  green: "text-green-300",
  blue: "text-blue-300",
};

StarRating.propTypes = {
  variant: PropTypes.oneOf(["yellow", "red", "green", "blue"]),
  fontSize: PropTypes.oneOf(["normal", "big"]),
  starNum: PropTypes.number.isRequired,
  /** Size of star(s) */
  size: PropTypes.string.isRequired,
  /** If true, outline star(s) will be used instead of solid star(s) */
  outline: PropTypes.bool
};