import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = (props) => {
  const slug = props.slug;

  return (
    <div className="btn">
      <div className="btn__detail btn__item">
        <Link to={`/nam/${slug}`}>
          <span className="btn__detail__name">Xem chi tiết</span>
          <span className="btn__detail__icon">
            <i className="bx bxs-show"></i>
          </span>
        </Link>
      </div>

      <div
        className="btn__buy btn__item"
        onClick={props.onClick ? () => props.onClick() : null}
      >
        <span className="btn__buy__name">Mua ngay</span>
        <span className="btn__buy__icon">
          <i className="bx bx-cart"></i>
        </span>
      </div>
    </div>
  );
};

Button.propTypes = {
  onclick: PropTypes.func,
  slug: PropTypes.string,
};
export default Button;
