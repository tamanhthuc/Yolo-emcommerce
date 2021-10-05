import React, { useState } from "react";

import childProductData from "../assets/fake-data/home/child-products";

import trouserProductData from "../assets/fake-data/home/trousersChild-products";

// import { setProducts } from "../redux/actions/productAction";
import Container from "./Container";
import ProductCard from "./ProductCard";
import Section, { SectionBody, SectionTitle } from "./Section";
import { Link } from "react-router-dom";
import accessorysProductData from "../assets/fake-data/home/accessoryChild-products";

const PAGE_SHIRT_PRODUCTS = "shirtProducts";

const PAGE_CHILD_TROUSERS_PRODUCTS = "maleTrousersProducts";

const PAGE_CHILD_HOME_PRODUCTS = "maleHomeProducts";

const PAGE_CHILD_UNDERWEAR_PRODUCTS = "maleUnderwearProducts";

const PAGE_CHILD_ACCESSORY_PRODUCTS = "maleAccessoryarProducts";

export const SectionSellChild = () => {
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
        <SectionTitle>Thời trang trẻ em</SectionTitle>

        <div className="section-sell__best__nav">
          <div
            className={`section-sell__best__nav__item ${
              page === PAGE_SHIRT_PRODUCTS ? "active" : ""
            }`}
            onClick={() => navigate(PAGE_SHIRT_PRODUCTS)}
          >
            Áo trẻ em
          </div>
          <div
            className={`section-sell__best__nav__item ${
              page === PAGE_CHILD_TROUSERS_PRODUCTS ? "active" : ""
            } `}
            onClick={() => navigate(PAGE_CHILD_TROUSERS_PRODUCTS)}
          >
            Quần trẻ em
          </div>
          <div
            className={`section-sell__best__nav__item  ${
              page === PAGE_CHILD_HOME_PRODUCTS ? "active" : ""
            }`}
            onClick={() => navigate(PAGE_CHILD_HOME_PRODUCTS)}
          >
            Bộ đồ trẻ em
          </div>
          <div
            className={`section-sell__best__nav__item   ${
              page === PAGE_CHILD_UNDERWEAR_PRODUCTS ? "active" : ""
            }  `}
            onClick={() => navigate(PAGE_CHILD_UNDERWEAR_PRODUCTS)}
          >
            đầm bé gái
          </div>

          <div
            className={`section-sell__best__nav__item   ${
              page === PAGE_CHILD_ACCESSORY_PRODUCTS ? "active" : ""
            }  `}
            onClick={() => navigate(PAGE_CHILD_ACCESSORY_PRODUCTS)}
          >
            phụ kiện trẻ em
          </div>
        </div>
        {page === PAGE_SHIRT_PRODUCTS && (
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
            </SectionBody>
          </Section>
        )}

        {page === PAGE_CHILD_TROUSERS_PRODUCTS && (
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
        {page === PAGE_CHILD_HOME_PRODUCTS && (
          <Section>
            <SectionBody>
              <Container>
                {/* {homeProductData.getAllProducts().map((item, index) => (
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))} */}
              </Container>

              {/* <Link to="/nam">
                <div className="section-sell__best__btn">
                  <span className="section-sell__best__btn__icon">
                    <i class="bx bx-chevrons-right"></i>
                  </span>

                  <span className="section-sell__best__btn__name">
                    Xem tất cả
                  </span>
                </div>
              </Link> */}
            </SectionBody>
          </Section>
        )}

        {page === PAGE_CHILD_UNDERWEAR_PRODUCTS && (
          <Section>
            <SectionBody>
              <Container>
                {/* {underwearProductData.getAllProducts().map((item, index) => (
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
                  />
                ))} */}
              </Container>

              {/* <Link to="/tre-con">
                <div className="section-sell__best__btn">
                  <span className="section-sell__best__btn__icon">
                    <i class="bx bx-chevrons-right"></i>
                  </span>

                  <span className="section-sell__best__btn__name">
                    Xem tất cả
                  </span>
                </div>
              </Link> */}
            </SectionBody>
          </Section>
        )}

        {page === PAGE_CHILD_ACCESSORY_PRODUCTS && (
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

              <div className="section-sell__best__btn">
                <span className="section-sell__best__btn__icon">
                  <i class="bx bx-chevrons-right"></i>
                </span>

                <span className="section-sell__best__btn__name">
                  Xem tất cả
                </span>
              </div>
            </SectionBody>
          </Section>
        )}
      </div>
    </div>
  );
};
