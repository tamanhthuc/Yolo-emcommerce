import React, { useState } from "react";

import productData from "../assets/fake-data/home/all-productData";
import femaleProductData from "../assets/fake-data/home/female-products";
import maleProductData from "../assets/fake-data/home/male-products";
import childProductData from "../assets/fake-data/home/child-products";

// import { setProducts } from "../redux/actions/productAction";
import Container from "./Container";
import ProductCard from "./ProductCard";
import Section, { SectionBody, SectionTitle } from "./Section";
import { Link } from "react-router-dom";

const PAGE_ALL_PRODUCTS = "allProducts";

const PAGE_MALE_PRODUCTS = "maleProducts";

const PAGE_FEMALE_PRODUCTS = "femaleProducts";

const PAGE_CHILD_PRODUCTS = "childProducts";

export const SectionSellBest = () => {
  // const products = useSelector((state) => state.AllProducts.products);

  // const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   dispatch(setProducts(productData.getAllProducts()));
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  const [page, setPage] = useState(PAGE_ALL_PRODUCTS);

  const navigate = (nexpage) => {
    setPage(nexpage);
  };

  return (
    <div className="container">
      <div className="section-sell__best">
        <SectionTitle>top sản phẩm bán chạy trong tuần</SectionTitle>
        <div className="section-sell__best__nav">
          <div
            className={`section-sell__best__nav__item ${
              page === PAGE_ALL_PRODUCTS ? "active" : ""
            }`}
            onClick={() => navigate(PAGE_ALL_PRODUCTS)}
          >
            Tất cả
          </div>
          <div
            className={`section-sell__best__nav__item ${
              page === PAGE_FEMALE_PRODUCTS ? "active" : ""
            } `}
            onClick={() => navigate(PAGE_FEMALE_PRODUCTS)}
          >
            Nữ
          </div>
          <div
            className={`section-sell__best__nav__item  ${
              page === PAGE_MALE_PRODUCTS ? "active" : ""
            }`}
            onClick={() => navigate(PAGE_MALE_PRODUCTS)}
          >
            Nam
          </div>
          <div
            className={`section-sell__best__nav__item   ${
              page === PAGE_CHILD_PRODUCTS ? "active" : ""
            }  `}
            onClick={() => navigate(PAGE_CHILD_PRODUCTS)}
          >
            Trẻ em
          </div>
        </div>
        {page === PAGE_ALL_PRODUCTS && (
          <Section>
            <SectionBody>
              <Container>
                {productData.getAllProducts().map((item, index) => (
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))}
              </Container>
            </SectionBody>
          </Section>
        )}

        {page === PAGE_FEMALE_PRODUCTS && (
          <Section>
            <SectionBody>
              <Container>
                {femaleProductData.getAllProducts().map((item, index) => (
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))}
              </Container>

              <Link to="/nu">
                <div className="section-sell__best__btn">
                  <span className="section-sell__best__btn__icon">
                    <i class="bx bx-chevrons-right"></i>
                  </span>

                  <span className="section-sell__best__btn__name">
                    Xem tất cả
                  </span>
                </div>
              </Link>
            </SectionBody>
          </Section>
        )}
        {page === PAGE_MALE_PRODUCTS && (
          <Section>
            <SectionBody>
              <Container>
                {maleProductData.getAllProducts().map((item, index) => (
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))}
              </Container>

              <Link to="/nam">
                <div className="section-sell__best__btn">
                  <span className="section-sell__best__btn__icon">
                    <i class="bx bx-chevrons-right"></i>
                  </span>

                  <span className="section-sell__best__btn__name">
                    Xem tất cả
                  </span>
                </div>
              </Link>
            </SectionBody>
          </Section>
        )}

        {page === PAGE_CHILD_PRODUCTS && (
          <Section>
            <SectionBody>
              <Container>
                {childProductData.getAllProducts().map((item, index) => (
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))}
              </Container>

              <Link to="/tre-con">
                <div className="section-sell__best__btn">
                  <span className="section-sell__best__btn__icon">
                    <i class="bx bx-chevrons-right"></i>
                  </span>

                  <span className="section-sell__best__btn__name">
                    Xem tất cả
                  </span>
                </div>
              </Link>
            </SectionBody>
          </Section>
        )}
      </div>
    </div>
  );
};
