import React from "react";
import bannerHome01 from "../assets/images/home/banner-home/banner-home-01.jpg";
import bannerHome02 from "../assets/images/home/banner-home/banner-home-02.jpg";
import bannerHome03 from "../assets/images/home/banner-home/banner-home-03.jpg";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="banner__title">
          POLO YODY – MẶC MỖI NGÀY, THOẢI MÁI MỖI NGÀY
        </div>

        <div className="banner__description">
          "Thoải mái, trẻ trung, khỏe khoắn, mặc đâu cũng đẹp" là những điều
          YODY Everyday Wear đem đến cho những khách hàng yêu quý của mình trong
          xuân hè 2021 này. Bổ sung vào tủ đồ: "Mặc mỗi ngày, thoải mái mỗi
          ngày” cùng áo polo pima, polo mắt chim, hè năm nay, YODY cho ra mắt
          thêm Polo cafe – Dòng áo phông cao cấp với chất liệu vải sợi cafe độc
          quyền của YODY tại Việt Nam. Bộ 3 hứa hẹn sẽ là những items quốc dân
          đồng hành cùng sự tự tin, thoải mái cho người mặc. Xem và cùng YODY
          trải nghiệm ngay nhé!
        </div>

        <div className="banner__image">
          <img src={bannerHome01} alt="" />

          <div className="banner__image__item">
            <img src={bannerHome02} alt="" />
            <img src={bannerHome03} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
