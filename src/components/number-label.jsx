import cn from "classnames";
import PropTypes from "prop-types";

export const NumberLabel = ({ type = "button", variant, render, ...props }) => {
  const className = cn(
    "inline-flex justify-center items-center py-0.5 px-4 border shadow-sm text-xl font-medium rounded-md",
    variant && classByVariant[variant],
    props.className
  );

  if (render) {
    return render({
      className,
      ...props,
    });
  }

  return <button type={type} {...props} className={className} />;
};

const classByVariant = {
  primary: "border-transparent text-indigo-900 bg-white cursor-default",
  outline: "border-indigo-900 text-indigo-900 bg-white cursor-default"
};

NumberLabel.propTypes = {
  variant: PropTypes.oneOf(["primary", "outline"]),
  render: PropTypes.func,
};
