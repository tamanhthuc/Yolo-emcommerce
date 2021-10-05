import React from "react";
import PropTypes from "prop-types";

const Button2 = (props) => {
  const bg = props.backgroundColor ? "bg-" + props.backgroundColor : "bg-main";

  const size = props.size ? "btn-" + props.size : "";
  return (
    <button
      className={`btn ${bg} ${size} `}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      <span className="btn__txt">{props.children}</span>
    </button>
  );
};

Button2.propTypes = {
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
};

export default Button2;
