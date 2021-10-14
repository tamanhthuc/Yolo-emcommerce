import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import numberWithCommas from "../utils/numberWithCommans";
import Button2 from "./Button2";

import { useDispatch } from "react-redux";

import { set } from "../redux/product-modal/ProductModalSlice";

const ProductCard2 = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <Link to={`/nu/${props.slug}`}>
        <div className="product-card__image">
          <img src={props.img01} alt="" />
        </div>
        <div className="product-card__sell">
          <div className="product-card__sell__increase">-25%</div>
          <div className="product-card__sell__new">MỚI</div>
        </div>
        <div className="product-card__name">{props.name}</div>

        <div className="product-card__price">
          {numberWithCommas(props.price)}

          <span className="product-card__price__old">
            <del>{numberWithCommas(390000)}</del>
          </span>
        </div>
      </Link>
      <div className="product-card__btn">
        <Button2 slug={props.slug} onClick={() => dispatch(set(props.slug))} />
      </div>
    </div>
  );
};

ProductCard2.propTypes = {
  img01: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard2;
