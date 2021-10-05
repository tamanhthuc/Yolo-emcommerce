import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Header = () => {
  const contactNav = [
    {
      display: "Tra cứu đơn hàng",
      path: "/tra-cua-don-hang",
    },
    {
      display: "tạp chí thời trang",
      path: "/new",
    },
    {
      display: "liên hệ",
      path: "lien-he",
    },
    {
      display: "hệ thống cửa hàng toàn quốc",
      path: "he-thong-cua-hang",
    },
    {
      display: "tuyển dụng",
      path: "/tuyen-dung",
    },
  ];

  const mainNav = [
    {
      display: "trang chủ",
      path: "/",
    },
    {
      display: "Nữ",
      path: "/nu",
    },
    {
      display: "Nam",
      path: "/nam",
    },
    {
      display: "trẻ em",
      path: "/tre-em",
    },
    {
      display: "Đồng phục",
      path: "/onther",
    },
    {
      display: "POLO YODY",
      path: "/POLO",
    },
    {
      display: "sale 60%",
      path: "/sale",
    },
  ];

  const mainNavMobile = () => {
    return mainNav.concat(contactNav);
  };

  const dataNavMobile = mainNavMobile();

  //  ===============================

  const { pathname } = useLocation();
  const [modal, setModal] = useState(false);
  const menuRef = useRef(null);

  const menuToggle = () => {
    menuRef.current.classList.toggle("active");
    setModal(!modal);
  };

  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);

  useEffect(() => {
    var lastScrollTop = 0;
    const handleEvent = () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // while (scrollTop < lastScrollTop) {
      //   headerRef.current.style.top = scrollTop * -1 + "px";
      // }

      if (scrollTop > lastScrollTop) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleEvent);

    return () => {
      window.removeEventListener("scroll", handleEvent);
    };
  }, []);

  let cartItems = useSelector((state) => state.cartItems.value);

  const [totalProduct, setTotalProduct] = useState(0);

  useEffect(() => {
    setTotalProduct(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__contact">
          <div className="header__contact__left">
            {contactNav.map((item, index) => (
              <div key={index} className="header__contact__left__item">
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="header__contact__right">
            <div className="header__contact__right__item">
              <Link to="lien-he">
                Hotline:
                <span> 1800 2086</span> (Miễn phí)
              </Link>
            </div>
          </div>
        </div>

        {/* End Header Contact */}

        {/* Header main */}

        <div className="header__main">
          <div className="header__main__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu"></i>
          </div>
          <div className="header__main__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="header__main__search">
            <input type="text" placeholder="Tìm kiếm sản phẩm" />
            <button>
              <i className="bx bx-search"></i>
            </button>
          </div>

          <div className="header__main__info">
            <div className="header__main__info__account">
              <div className="header__main__info__account__icon">
                <i className="bx bx-user-circle"></i>
              </div>

              <div className="header__main__info__account__name">
                Tài Khoản
                <span>
                  <i className="bx bx-caret-down-circle"></i>
                </span>
              </div>

              <div className="header__main__info__account__sub">
                <Link to="/user/in">Đăng nhập</Link>

                <Link to="/user/up">Đăng ký</Link>
              </div>
            </div>

            <div className="header__main__info__cart">
              <div className="header__main__info__cart__search">
                <i className="bx bx-search"></i>
              </div>

              <Link to="/cart">
                <div className="header__main__info__cart__icon">
                  <i className="bx bx-cart"></i>
                  <span>{totalProduct}</span>
                </div>
              </Link>

              <div className="header__main__info__cart__name">
                {totalProduct} Sản phẩm
                <span>
                  <i className="bx bx-caret-down-circle"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* header main */}
      <div className="header__nav">
        {mainNav.map((item, index) => (
          <div
            key={index}
            className={`header__nav__item ${
              index === activeNav ? "active" : ""
            }`}
          >
            <Link to={item.path}>
              <span>{item.display}</span>
            </Link>
          </div>
        ))}
      </div>

      {/* end headermain */}

      <div className="header__mobile" ref={menuRef}>
        <div className="header__mobile__close" onClick={menuToggle}>
          <i className="bx bx-x"></i>
        </div>
        {dataNavMobile.map((item, index) => (
          <div
            key={index}
            className="header__mobile__item"
            onClick={menuToggle}
          >
            <Link to={item.path}>{item.display}</Link>
          </div>
        ))}

        <div className="header__mobile__phone header__mobile__item">
          Hotline: 1800 2086 (Miễn phí)
        </div>

        <div className="header__mobile__account ">
          <div className="header__mobile__account__signIn ">
            <Link to="/">Đăng nhập</Link>
          </div>
          <div className="header__mobile__account__register">
            <Link to="/">Đăng ký</Link>
          </div>
        </div>
      </div>

      {modal && (
        <div className="header__mobile__overlay" onClick={menuToggle}></div>
      )}
    </div>
  );
};

export default Header;
