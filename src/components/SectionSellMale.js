import React, { useState } from "react";

import maleProductData from "../assets/fake-data/home/male-products";

import trouserProductData from "../assets/fake-data/home/trousersMale-products";
import homeProductData from "../assets/fake-data/home/homeMale-products";
import underwearProductData from "../assets/fake-data/home/underwearMale-products";

// import { setProducts } from "../redux/actions/productAction";
import Container from "./Container";
import ProductCard from "./ProductCard";
import Section, { SectionBody, SectionTitle } from "./Section";
import { Link } from "react-router-dom";
import accessorysProductData from "../assets/fake-data/home/accessoryMale-products";

const PAGE_SHIRT_PRODUCTS = "shirtProducts";

const PAGE_MALE_TROUSERS_PRODUCTS = "maleTrousersProducts";

const PAGE_MALE_HOME_PRODUCTS = "maleHomeProducts";

const PAGE_MALE_UNDERWEAR_PRODUCTS = "maleUnderwearProducts";

const PAGE_MALE_ACCESSORY_PRODUCTS = "maleAccessoryarProducts";

export const SectionSellMale = (props) => {
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
        <SectionTitle>{props.title}</SectionTitle>
        <div className="section-sell__best__description">
          {props.description}
        </div>
        <div className="section-sell__best__nav">
          <div
            className={`section-sell__best__nav__item ${
              page === PAGE_SHIRT_PRODUCTS ? "active" : ""
            }`}
            onClick={() => navigate(PAGE_SHIRT_PRODUCTS)}
          >
            Áo Nam
          </div>
          <div
            className={`section-sell__best__nav__item ${
              page === PAGE_MALE_TROUSERS_PRODUCTS ? "active" : ""
            } `}
            onClick={() => navigate(PAGE_MALE_TROUSERS_PRODUCTS)}
          >
            Quần nam
          </div>
          <div
            className={`section-sell__best__nav__item  ${
              page === PAGE_MALE_HOME_PRODUCTS ? "active" : ""
            }`}
            onClick={() => navigate(PAGE_MALE_HOME_PRODUCTS)}
          >
            Đồ mặc nhà nam
          </div>
          <div
            className={`section-sell__best__nav__item   ${
              page === PAGE_MALE_UNDERWEAR_PRODUCTS ? "active" : ""
            }  `}
            onClick={() => navigate(PAGE_MALE_UNDERWEAR_PRODUCTS)}
          >
            đồ mặc trong
          </div>

          <div
            className={`section-sell__best__nav__item   ${
              page === PAGE_MALE_ACCESSORY_PRODUCTS ? "active" : ""
            }  `}
            onClick={() => navigate(PAGE_MALE_ACCESSORY_PRODUCTS)}
          >
            phụ kiện nam
          </div>
        </div>
        {page === PAGE_SHIRT_PRODUCTS && (
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
            </SectionBody>
          </Section>
        )}

        {page === PAGE_MALE_TROUSERS_PRODUCTS && (
          <Section>
            <SectionBody>
              <Container>
                {trouserProductData.getAllProducts().map((item, index) => (
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
        {page === PAGE_MALE_HOME_PRODUCTS && (
          <Section>
            <SectionBody>
              <Container>
                {homeProductData.getAllProducts().map((item, index) => (
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

        {page === PAGE_MALE_UNDERWEAR_PRODUCTS && (
          <Section>
            <SectionBody>
              <Container>
                {underwearProductData.getAllProducts().map((item, index) => (
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

        {page === PAGE_MALE_ACCESSORY_PRODUCTS && (
          <Section>
            <SectionBody>
              <Container>
                {accessorysProductData.getAllProducts().map((item, index) => (
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
