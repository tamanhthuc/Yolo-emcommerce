import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import productData from "../assets/fake-data/catalog/maleCatalog/products";

import ProductView2 from "./ProductView2";
import { remove } from "../redux/product-modal/ProductModalSlice";

const ProductViewModal = (props) => {
  const productSlug = useSelector((state) => state.productModal.value);

  const dispatch = useDispatch();

  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);

  return (
    <div
      className={`product-view__modal ${product === undefined ? "" : "active"}`}
    >
      <div className="product-view__modal__content">
        <ProductView2 product={product} />

        <div
          className="product-view__modal__content__close"
          onClick={() => dispatch(remove())}
        >
          <i className="bx bx-x"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
