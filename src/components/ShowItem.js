import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/shopping-cart/cartItemsSlice";

const ShowItem = (props) => {
  const [item, setItem] = useState(props.item);

  useEffect(() => {
    setItem(props.item);
  }, [props.item]);

  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(removeItem(item));
  };
  return (
    <div className="show-item">
      <div className="show-item__image">
        <img src={item.product.image01} alt="" />
      </div>

      <div className="show-item__info">
        <div className="show-item__info__name">
          <Link to={`/catalog/${item.slug}`}>
            {`${item.product.title} - ${item.color} - ${item.size}`}
          </Link>
        </div>
        <div className="show-item__info__price">{item.price}đ</div>
      </div>

      <div className="show-item__close" onClick={() => removeCartItem()}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

ShowItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ShowItem;
