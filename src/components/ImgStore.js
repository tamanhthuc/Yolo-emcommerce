import React from "react";
import Grid from "./Grid";

import img01 from "../assets/images/home/image-store/product-01.jpg";
import img02 from "../assets/images/home/image-store/product-02.jpg";
import img03 from "../assets/images/home/image-store/product-03.jpg";
import img04 from "../assets/images/home/image-store/product-04.jpg";

const ImgStore = () => {
  return (
    <div className="imgstore">
      <div className="imgstore__title">HÌNH ẢNH CỬA HÀNG</div>
      <div className="imgstore__description">
        Cùng xem những hình ảnh mới nhất tại hệ thống cửa hàng YODY
      </div>
      <div className="imgstore__image">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <img src={img01} alt="" />
          <img src={img02} alt="" />
          <img src={img03} alt="" />
          <img src={img04} alt="" />
        </Grid>
      </div>
    </div>
  );
};

export default ImgStore;
