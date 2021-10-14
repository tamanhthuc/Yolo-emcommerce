import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Helmet from "../components/Helmet";
import productData from "../assets/fake-data/catalog/maleCatalog/products";
import numberWithCommans from "../utils/numberWithCommans";
import Button2 from "../components/Button2";
import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";

const Cart = (props) => {
  let cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsDetail(cartItems)
  );

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsDetail(cartItems));
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Giỏ hàng">
      <div className="container">
        {cartItems.length > 0 && (
          <div className="cart">
            <div className="cart__info">
              <div className="cart__info__txt">
                <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
                <div className="cart__info__txt__price">
                  <span>Thành tiền:</span>{" "}
                  <span>{numberWithCommans(Number(totalPrice))}</span>
                </div>
              </div>

              <div className="cart__info__btn">
                <Button2>Yêu cầu đặt hàng</Button2>

                <Link to="/nam">
                  <Button2>Tiếp tục mua hàng</Button2>
                </Link>
              </div>
            </div>

            <div className="cart__list">
              {cartProducts.map((item, index) => (
                <CartItems item={item} key={index} />
              ))}
            </div>
          </div>
        )}

        {cartItems.length === 0 && (
          <div className="cart__zero">
            <i className="bx bxs-shopping-bag"></i>
            <span>Giỏ hàng của bạn hiện tại không có sản phẩm nào !</span>
          </div>
        )}
      </div>
    </Helmet>
  );
};

export default Cart;
