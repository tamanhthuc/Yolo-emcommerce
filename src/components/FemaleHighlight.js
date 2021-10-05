import React, { useState } from "react";

// import { setProducts } from "../redux/actions/productAction";

import banner1 from "../assets/images/home/product-females/product-banners/banner-01.jpg";
import banner2 from "../assets/images/home/product-females/product-banners/banner-02.jpg";
import banner3 from "../assets/images/home/product-females/product-banners/banner-03.jpg";
import banner4 from "../assets/images/home/product-females/product-banners/banner-05.jpg";

import Container from "./Container";
import ProductCard from "./ProductCard";
import Section, { SectionBody, SectionTitle } from "./Section";
import { Link } from "react-router-dom";

import Container2 from "./Container2";
import femaleProductData from "../assets/fake-data/home/female-products";
import trouserProductData from "../assets/fake-data/home/trousersFemale-products";
import dressProductData from "../assets/fake-data/home/dressFemale-products";
import homeProductData from "../assets/fake-data/home/homeFemale-products";
import accssoryProductData from "../assets/fake-data/home/accessoryFemale-products";

const PAGE_SHIRT_PRODUCTS = "shirtProducts";

const PAGE_FEMALE_TROUSERS_PRODUCTS = "maleTrousersProducts";

const PAGE_FEMALE_DRESS_PRODUCTS = "femaleDressProducts";

const PAGE_FEMALE_HOME_PRODUCTS = "femaleHomeProducts";

const PAGE_FEMALE_UNDERWEAR_PRODUCTS = "maleUnderwearProducts";

const PAGE_FEMALE_ACCESSORY_PRODUCTS = "maleAccessoryarProducts";

export const FemaleHighlight = (props) => {
  // const products = useSelector((state) => state.AllProducts.products);

  // const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   dispatch(setProducts(productData.getAllProducts()));
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  const [page, setPage] = useState(PAGE_SHIRT_PRODUCTS);

  const navigate = (nexpage) => {
    setPage(nexpage);
  };

  return (
    <div className="container">
      <div className="section-sell__best">
        <SectionTitle>Thời trang nữ</SectionTitle>
        <div className="section-sell__best__description">
          Thời trang nữ tại Yody với mong muốn đem lại sự cân bằng giữa phong
          cách bên ngoài và sự thoải mái bên trong, toát lên sự gần gũi, trẻ
          trung cho quý khách hàng với các dòng sản phẩm như áo polo, áo phông,
          áo sơ mi, quần Jean.
        </div>
        <div className="section-sell__best__nav">
          <div
            className={`section-sell__best__nav__item ${
              page === PAGE_SHIRT_PRODUCTS ? "active" : ""
            }`}
            onClick={() => navigate(PAGE_SHIRT_PRODUCTS)}
          >
            Áo nữ
          </div>
          <div
            className={`section-sell__best__nav__item ${
              page === PAGE_FEMALE_TROUSERS_PRODUCTS ? "active" : ""
            } `}
            onClick={() => navigate(PAGE_FEMALE_TROUSERS_PRODUCTS)}
          >
            Quần nữ
          </div>

          <div
            className={`section-sell__best__nav__item ${
              page === PAGE_FEMALE_DRESS_PRODUCTS ? "active" : ""
            } `}
            onClick={() => navigate(PAGE_FEMALE_DRESS_PRODUCTS)}
          >
            váy nữ
          </div>

          <div
            className={`section-sell__best__nav__item  ${
              page === PAGE_FEMALE_HOME_PRODUCTS ? "active" : ""
            }`}
            onClick={() => navigate(PAGE_FEMALE_HOME_PRODUCTS)}
          >
            Đồ mặc nhà nữ
          </div>
          <div
            className={`section-sell__best__nav__item   ${
              page === PAGE_FEMALE_UNDERWEAR_PRODUCTS ? "active" : ""
            }  `}
            onClick={() => navigate(PAGE_FEMALE_UNDERWEAR_PRODUCTS)}
          >
            đồ mặc trong nữ
          </div>

          <div
            className={`section-sell__best__nav__item   ${
              page === PAGE_FEMALE_ACCESSORY_PRODUCTS ? "active" : ""
            }  `}
            onClick={() => navigate(PAGE_FEMALE_ACCESSORY_PRODUCTS)}
          >
            phụ kiện nữ
          </div>
        </div>
        {page === PAGE_SHIRT_PRODUCTS && (
          <div className="section-sell__best__content">
            <div className="section-sell__best__content__banner">
              <img src={banner1} alt="" />
            </div>

            <div className="section-sell__best__content__item">
              <div className="section-sell__best__content__item__title">
                {props.title}
              </div>

              <Container2>
                {femaleProductData.getAllProducts().map((item, index) => (
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))}
              </Container2>

              <div className="section-sell__best__content__item__btn">
                <Link to="/nu">xem thêm</Link>
              </div>
            </div>
          </div>
        )}

        {page === PAGE_FEMALE_TROUSERS_PRODUCTS && (
          <div className="section-sell__best__content">
            <div className="section-sell__best__content__banner">
              <img src={banner2} alt="" />
            </div>

            <div className="section-sell__best__content__item">
              <div className="section-sell__best__content__item__title">
                sản phẩm hot
              </div>

              <Container2>
                {trouserProductData.getAllProducts().map((item, index) => (
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))}
              </Container2>

              <div className="section-sell__best__content__item__btn">
                <Link to="/nu">xem thêm</Link>
              </div>
            </div>
          </div>
        )}

        {page === PAGE_FEMALE_DRESS_PRODUCTS && (
          <div className="section-sell__best__content">
            <div className="section-sell__best__content__banner">
              <img src={banner3} alt="" />
            </div>

            <div className="section-sell__best__content__item">
              <div className="section-sell__best__content__item__title">
                sản phẩm hot
              </div>

              <Container2>
                {dressProductData.getAllProducts().map((item, index) => (
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))}
              </Container2>

              <div className="section-sell__best__content__item__btn">
                <Link to="/nu">xem thêm</Link>
              </div>
            </div>
          </div>
        )}

        {page === PAGE_FEMALE_HOME_PRODUCTS && (
          <div className="section-sell__best__content">
            <div className="section-sell__best__content__banner">
              <img src={banner4} alt="" />
            </div>

            <div className="section-sell__best__content__item">
              <div className="section-sell__best__content__item__title">
                sản phẩm hot
              </div>

              <Container2>
                {homeProductData.getAllProducts().map((item, index) => (
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))}
              </Container2>

              <div className="section-sell__best__content__item__btn">
                <Link to="/nu">xem thêm</Link>
              </div>
            </div>
          </div>
        )}

        {page === PAGE_FEMALE_UNDERWEAR_PRODUCTS && (
          <div className="section-sell__best__content">
            <div className="section-sell__best__content__banner"></div>
          </div>
        )}

        {page === PAGE_FEMALE_ACCESSORY_PRODUCTS && (
          <div className="section-sell__best__content">
            <div className="section-sell__best__content__banner">
              <img src={banner2} alt="" />
            </div>

            <div className="section-sell__best__content__item">
              <div className="section-sell__best__content__item__title">
                sản phẩm hot
              </div>

              <Container2>
                {accssoryProductData.getAllProducts().map((item, index) => (
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))}
              </Container2>

              <div className="section-sell__best__content__item__btn">
                <Link to="/nu">xem thêm</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
