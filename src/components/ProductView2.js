import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Button2 from "./Button2";
import Grid from "./Grid";
import { addItem } from "../redux/shopping-cart/cartItemsSlice";

import numberWidthCommas from "../utils/numberWithCommans";
import { useDispatch } from "react-redux";
import { remove } from "../redux/product-modal/ProductModalSlice";
const ProductView2 = (props) => {
  let product = props.product;

  const dispatch = useDispatch();

  if (product === undefined)
    product = {
      price: 0,
      title: "",
      colors: [],
      size: [],
      image01: null,
      image02: null,
      categorySlug: "",
      slug: "",
      description: "",
    };

  const [color, setColor] = useState(undefined);

  const [size, setSize] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);

  const check = () => {
    if (color === undefined) {
      alert("Vui lòng chọn màu sắc");
      return false;
    }

    if (size === undefined) {
      alert("Vui lòng chọn kích cỡ");
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if (check()) {
      let newItem = {
        slug: product.slug,
        color: color,
        size: size,
        price: product.price,
        quantity: quantity,
      };

      if (dispatch(addItem(newItem))) {
        alert("Sucess");
        props.history.push("/cart");
        dispatch(remove());
      } else {
        alert("Fail");
      }
    }
  };

  return (
    <div className="product-display">
      <Grid col={2} gap={30} smCol={2}>
        <div className="product-display__images">
          <img src={product.image01} alt="" />
        </div>

        <div className="product-display__info">
          <h1 className="product-display__info__title">{product.title}</h1>

          <div className="product-display__info__state">
            <div className="product-display__info__state__key">
              Mã: <span>{product.id}</span>
            </div>
            <div className="product-display__info__state__about">
              Tình trạng: <span>Còn hàng</span>
            </div>
          </div>

          <div className="product-display__info__item">
            <span className="product-display__info__item__price">
              {numberWidthCommas(product.price)}
            </span>
          </div>

          <div className="product-display__info__item">
            <div className="product-display__info__item__title">
              Màu sắc: <span>{color}</span>
            </div>

            <div className="product-display__info__item__list">
              {product.colors.map((item, index) => (
                <div
                  key={index}
                  className={`product-display__info__item__list__item ${
                    color === item ? "active" : ""
                  }
                
                `}
                  onClick={() => setColor(item)}
                >
                  <div className={`circle bg-${item}`}></div>
                </div>
              ))}
            </div>
          </div>

          <div className="product-display__info__item">
            <div className="product-display__info__item__title">
              Kích cỡ: <span>{size}</span>
            </div>

            <div className="product-display__info__item__list">
              {product.size.map((item, index) => (
                <div
                  key={index}
                  className={`product-display__info__item__list__item product-display__info__item__list__item__size
                ${size === item ? "active" : ""} 
                }`}
                  onClick={() => setSize(item)}
                >
                  <span className="product-display__info__item__list__item__size__name">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="product-display__info__item product-display__info__item__flex">
            <div className="product-display__info__item__title">Số lượng: </div>

            <div className="product-display__info__item__quantity">
              <div
                className="product-display__info__item__quantity__btn"
                onClick={() => updateQuantity("minus")}
              >
                <i className="bx bx-minus"></i>
              </div>

              <div className="product-display__info__item__quantity__input">
                {quantity}
              </div>

              <div
                className="product-display__info__item__quantity__btn"
                onClick={() => updateQuantity("plus")}
              >
                <i className="bx bx-plus"></i>
              </div>
            </div>
          </div>

          <div className="product-display__info__item product-display__info__btn">
            <Button2 size="xl" onClick={() => addToCart()}>
              Mua ngay
            </Button2>
          </div>
        </div>
      </Grid>
    </div>
  );
};

ProductView2.prototypes = {
  product: PropTypes.object.isRequired,
};

export default withRouter(ProductView2);
