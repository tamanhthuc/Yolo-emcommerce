import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../assets/images/home/footer/icon1.png";
import icon2 from "../assets/images/home/footer/icon2.png";
import icon3 from "../assets/images/home/footer/icon3.png";
import logo2 from "../assets/images/logo2.png";
import logoFooter from "../assets/images/logo-footer.png";
import connectData from "../assets/fake-data/home/connect";

import Grid from "./Grid";

const sampleProduct = [
  {
    img: icon1,
    title: "thời trang nam",
    description: "những mẫu ảnh thời trang mới nhất của anh",
    path: "/nam",
  },
  {
    img: icon2,
    title: "thời trang nữ",
    description: "những mẫu ảnh thời trang mới nhất của nàng",
    path: "/nu",
  },
  {
    img: icon3,
    title: "thời trang trẻ em",
    description: "thời trang cho bé",
    path: "/tre-em ",
  },
];

const navFooterContact = [
  {
    display: "Giới thiệu",
    path: "/gioi-thieu",
  },
  {
    display: "Liên hệ",
    path: "/lien-he",
  },
  {
    display: "Tuyển dụng",
    path: "/tuyển dụng",
  },
  {
    display: "Tin tức",
    path: "/tin-tuc",
  },
  {
    display: "Hệ thống của hàng",
    path: "/he-thong-cua-hang",
  },
];

const navFooterSp = [
  {
    display: "Hướng dẫn chọn size",
    path: "/huong-dan-chon-size",
  },
  {
    display: "Chính sách khách hàng thân thiêt",
    path: "/chinh-sach-khach-hang-than-thiet",
  },
  {
    display: "Chính sách đổi/trả",
    path: "/chinh-sach-doi-tra",
  },
  {
    display: "Chính sách bảo mật",
    path: "/chinh-sach-bao-mat",
  },
  {
    display: "Thanh toán, giao nhận",
    path: "/thanh-toan-giao-nhan",
  },
  {
    display: "Affiliate",
    path: "/affiliate",
  },
];

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__category">
        <div className="container">
          <div className="footer__category__sample">
            {sampleProduct.map((item, index) => (
              <div className="footer__category__sample__item" key={index}>
                <Link to={item.path}>
                  <div className="footer__category__sample__item__img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="footer__category__sample__item__title">
                    {item.title}
                  </div>

                  <div className="footer__category__sample__item__description">
                    {item.description}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__subscribe">
          <Grid col={2} mdCol={2} smCol={1} gap={20}>
            <div className="footer__subscribe__text">
              <div className="footer__subscribe__text__title">
                đăng ký nhận thông tin
              </div>
              <div className="footer__subscribe__text__description">
                Đăng ký ngay để là người đầu tiên cập nhật sớm nhất những tin
                tức thời trang, những bộ sưu tập cũng như ưu đãi hấp dẫn từ
                YODY.
              </div>
            </div>

            <form className="footer__subscribe__input">
              <div className="footer__subscribe__input__sub">
                <input type="text" placeholder="Nhập email đăng ký của bạn" />
                <button>đăng ký</button>
              </div>
              <div className="footer__subscribe__input__check">
                {/* <Checkbox />
                <span>Tôi đồng ý nhận email từ Yody</span>
                <span className="footer__subscribe__input__check__icon">
                  <i class="bx bx-checkbox"></i>
                </span> */}
              </div>
            </form>
          </Grid>
        </div>
      </div>

      <div className="footer__main">
        <div className="container">
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            <div className="footer__main__item">
              <div className="footer__main__item__logo">
                <img src={logo2} alt="" />
              </div>

              <div className="footer__main__item__description">
                "Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy
                nghĩ và hành động của mình" là sứ mệnh, là triết lý, chiến
                lược.. luôn cùng YODY tiến bước
              </div>

              <div className="footer__main__item__contact">
                <div className="footer__main__item__contact__title">
                  TỔNG ĐÀI GỌI HỖ TRỢ
                </div>
                <ul className="footer__main__item__contact__detail">
                  <li>
                    Liên hệ đặt hàng: <span>024 730 56665 </span>
                  </li>
                  <li>
                    Thắc mắc đơn hàng: <span>024 730 16661 </span>
                  </li>
                  <li>
                    Góp ý, khiếu nại: <span>1800 2086 (Miễn phí) </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer__main__item">
              <div className="footer__main__item__title">VỀ YODY</div>
              {navFooterContact.map((item, index) => (
                <div className="footer__main__item__nav" key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </div>
              ))}

              <div className="footer__main__item__img">
                <img src={logoFooter} alt="" />
              </div>
            </div>

            <div className="footer__main__item">
              <div className="footer__main__item__tile">HỖ TRỢ KHÁCH HÀNG</div>
              {navFooterSp.map((item, index) => (
                <div className="footer__main__item__nav" key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </div>
              ))}
            </div>

            <div className="footer__main__item">
              <div className="footer__main__item__title">
                CÔNG TY CP THỜI TRANG YODY
              </div>

              <div className="footer__main__item__address">
                <span> Văn phòng: </span>
                Công ty YODY, Đường An Định, TP.Hải Dương (Dưới chân cầu Đồng
                Niên)
              </div>

              <div className="footer__main__item__phone">MST: 0801206940</div>

              <div className="footer__main__item__email">
                Email: chamsockhachhang@yody.vn
              </div>

              <div className="footer__main__item__connect">
                <div className="footer__main__item__connect__title">
                  KẾT NỐI VỚI CHÚNG TÔI
                </div>
                <ul className="footer__main__item__connect__list">
                  {connectData.map((item, index) => (
                    <li key={index}>
                      <a href={item.path}>
                        <img src={item.img} alt="" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>
        </div>
      </div>

      <div className="footer__copyright">
        <div className="container">
          © Bản quyền thuộc về <Link to="/">Yody.vn</Link> All rights reserved
        </div>
      </div>
    </div>
  );
};
